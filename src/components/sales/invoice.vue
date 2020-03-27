<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="card-body">
          <h2 class="header-title mb-4">Ingreso de Documento de Venta</h2>

          <!-- <p class="typo__p" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p> -->
          <div class="d-flex justify-content-center">
            <div
              v-show="submitStatus === 'PENDING'"
              class="spinner-border text-success m-2 avatar-lg"
              role="status"
            ></div>
          </div>
          <div v-show="submitStatus === 'OK'" class="alert alert-success" role="alert">
            <i class="mdi mdi-check-all mr-2"></i> Producto ingresado
            <strong>correctamente!</strong>
          </div>

          <form v-show="submitStatus !== 'PENDING'" action="/something" method="post" :disabled="0" @submit="checkForm">
            <div v-if="submitStatus === 'ERROR'" class="alert alert-danger bg-danger text-white border-0" role="alert">
              Los campos no son
              <strong>validos</strong>
            </div>
            <h5 class="text-uppercase bg-light p-2 mt-0 mb-3">Cliente</h5>
            <div class="form-row mb-1">
              <div class="col-auto">
                <b-form-group label="Seleccionar Tipo de Cliente">
                  <b-form-radio-group
                    id="radio-group-1"
                    v-model="form.tipClient.value"
                    :options="form.tipClient.options"
                    name="radio-options"
                  ></b-form-radio-group>
                </b-form-group>
              </div>
            </div>
            <!-- <div v-if="form.tipClient.value === 'REGISTRADO'" class="form-row mb-1 ">
              <div class="col-auto">
                <b-form-group label="Buscar por:">
                  <b-form-radio-group
                    v-model="form.radioSearchUser.value"
                    :options="form.radioSearchUser.options"
                    class="mb-3"
                    disabled-field="notEnabled"
                  ></b-form-radio-group>
                </b-form-group>
              </div>
              <div class="col-auto">
                <label for="product-reference">
                  Buscar
                </label>
                <input
                  id="id-client-SearchBar"
                  :value="form.searchBar"
                  type="string"
                  class="form-control"
                  placeholder="Buscar"
                  list="id-client-name-list"
                  @input="findClientInputOptions"
                />
                <datalist id="id-client-name-list">
                  <option>Manual Option</option>
                  <option v-for="nameOption in nameOptions" :key="nameOption.id">{{ nameOption }}</option>
                </datalist>
              </div>
            </div> -->

            <div class="form-row align-items-center mb-2">
              <div class="col-2">
                <label for="product-reference">
                  Codigo
                </label>
                <b-form-input
                  v-model="IdCod"
                  placeholder="Cod Usuario"
                  debounce="500"
                  :disabled="form.tipClient.value !== 'REGISTRADO'"
                ></b-form-input>
              </div>
              <div class="col-2">
                <label for="product-reference">
                  DNI
                </label>
                <b-form-input
                  v-model="Invoice.client.Dni_Cli"
                  placeholder="Dni"
                  :disabled="form.tipClient.value === 'REGISTRADO'"
                ></b-form-input>
              </div>
              <div class="col-6">
                <label for="product-reference">
                  Nombre de Cliente
                </label>
                <b-form-input
                  v-model="Invoice.client.Nom_Cli"
                  placeholder="Nombre de Cliente"
                  :disabled="form.tipClient.value === 'REGISTRADO'"
                ></b-form-input>
              </div>
            </div>

            <div class="form-row align-items-center mb-2">
              <div class="col-auto">
                <label for="product-price">
                  Fecha de Ingreso
                  <span class="text-danger">*</span>
                </label>
                <v-date-picker
                  v-model="Invoice.DateCreacion"
                  color="red"
                  is-dark
                  :input-props="{
                    class: 'form-control',
                    readonly: true,
                  }"
                />
              </div>
              <div class="col-auto">
                <label for="product-price">
                  Fecha de Vencimiento
                  <span class="text-danger">*</span>
                </label>
                <v-date-picker
                  v-model="Invoice.DateVencimiento"
                  color="red"
                  is-dark
                  :input-props="{
                    class: 'form-control',
                    readonly: true,
                  }"
                />
              </div>
            </div>

            <div class="row">
              <div class="col-12">
                <div class="card-box">
                  <b-table
                    striped
                    hover
                    :items="Invoice.detalleItems"
                    :fields="form.itemsFieldsTable"
                    class="table table-centered mb-0"
                    custom-foot
                  >
                    <!-- <template v-slot:cell(Cod_Medi)="row">
                      <b-form-input
                        v-model="Invoice.detalleItems[row.index].id"
                        placeholder="Cod"
                        bounce="500"
                        class="tabledit-input form-control form-control-sm"
                        :state="form.itemsFieldsTable[row.index].state"
                        @input="findProductInfo(row.index)"
                      ></b-form-input>
                    </template> -->

                    <template v-slot:cell(Cod_Medi)="row">
                      <b-form-input
                        v-model="Invoice.detalleItems[row.index].id"
                        placeholder="Cod"
                        bounce="500"
                        class="tabledit-input form-control form-control-sm"
                        :state="form.itemsFieldsTable[row.index].state"
                        @input="findProductInfo(row.index)"
                      ></b-form-input>
                    </template>

                    <template v-slot:cell(Cant_Dmed)="row">
                      <b-form-input
                        v-model="Invoice.detalleItems[row.index].Cant_Dmed"
                        placeholder="Cant."
                        @input="calcImpTotal(row.index)"
                      ></b-form-input>
                    </template>

                    <template v-slot:custom-foot="">
                      <b-tr>
                        <b-th :colspan="3" sticky-column>Resultados</b-th>
                        <b-th :colspan="2" class="text-right" sticky-column>Importe Bruto:</b-th>
                        <b-th :colspan="1">{{ Invoice.subTotal }} </b-th>
                      </b-tr>
                      <b-tr>
                        <b-th :colspan="3" sticky-column></b-th>
                        <b-th :colspan="2" class="text-right" sticky-column>con IGV:</b-th>
                        <b-th :colspan="1">{{ Invoice.igvTotal }} </b-th>
                      </b-tr>
                      <b-tr>
                        <b-th :colspan="3" sticky-column></b-th>
                        <b-th :colspan="2" class="text-right" sticky-column>con IGV:</b-th>
                        <b-th :colspan="1">{{ Invoice.precioTotal }} </b-th>
                      </b-tr>
                    </template>
                  </b-table>
                </div>
              </div>
            </div>

            <button type="submit" class="btn btn-primary waves-effect waves-light mt-3">Ingresar Producto</button>
          </form>
        </div>
      </div>
      <!-- end card-box -->
    </div>
    <!-- end col -->
  </div>
  <!-- end row -->
</template>

<script>
import axios from 'axios'
import { required, minValue } from 'vuelidate/lib/validators' // minLength

import { API_URL } from '@src/app.config'

// import { response } from 'express/lib/express'

export default {
  name: 'ProdInsert',
  components: {},
  data() {
    return {
      autoCompleteProdQuery: '',
      autoCompleteProducts: [],

      nameOptions: ['Small', 'Medium', 'Large', 'Extra Large'],

      form: {
        tipClient: {
          value: 'REGISTRADO',
          options: [
            { text: 'Cliente Registrado', value: 'REGISTRADO' },
            { text: 'Cliente Nuevo', value: 'NUEVO' },
          ],
        },
        radioSearchUser: {
          value: 'SEARCH_BY_USER',
          options: [
            { text: 'Buscar por ID', value: 'SEARCH_BY_USER' },
            { text: 'Buscar por Nombre ', value: 'SEARCH_BY_ID' },
          ],
        },
        itemsFieldsTable: [
          { key: 'line_medi', label: '#' },
          { key: 'Cod_Medi', label: 'Cod', thStyle: 'width: 100px' },
          { key: 'Nom_Medi', label: 'Nombre del Producto' },
          { key: 'Cant_Dmed', label: 'Cantidad', thStyle: 'width: 100px' },
          { key: 'Precio_Unitario', label: 'Val. Uni.' },
          { key: 'Importe_Total', label: 'Val. Total' },
        ],

        searchBar: '',
        clientId: '',
        clientName: '',
      },
      Invoice: {
        DateCreacion: new Date(),
        DateVencimiento: new Date(),
        subTotal: 0.0,
        igv: 18,
        igvTotal: 0,
        precioTotal: 0,
        client: {
          id: '',
          Nom_Cli: '',
          Dni_Cli: '',
        },
        detalleItems: [
          { line_medi: 1, Cod_Medi: null, Nom_Medi: null, Cant_Dmed: null, Precio_Unitario: null, Importe_Total: null },
          { line_medi: 2, Cod_Medi: null, Nom_Medi: null, Cant_Dmed: null, Precio_Unitario: null, Importe_Total: null },
          { line_medi: 3, Cod_Medi: null, Nom_Medi: null, Cant_Dmed: null, Precio_Unitario: null, Importe_Total: null },
          { line_medi: 4, Cod_Medi: null, Nom_Medi: null, Cant_Dmed: null, Precio_Unitario: null, Importe_Total: null },
          { line_medi: 5, Cod_Medi: null, Nom_Medi: null, Cant_Dmed: null, Precio_Unitario: null, Importe_Total: null },
        ],
      },

      clienteModel: {
        cliDoc: null,
      },
      cliDoc: null,
      //   items: navigationRoutes.routes,
      submitStatus: null,
      categories: [],
      //   medCantidad: 0;
      selectedCat: null,
      productName: '',
      productDescription: '',
      dateIng: new Date(),
      dateven: new Date(),
      precioCompra: 0,
      precioVenta: 0,
      stockMin: 0,
      stockMax: 0,
      medPrescripcion: 0,
      // proveedorindex: getProvIndex(),
      // provIndex,

      query: '',
      selectedProveedor: null,
      proveedores: [],
    }
  },
  validations: {
    productName: {
      required,
    },
    selectedCat: {
      required,
    },
    productDescription: {
      required,
    },
    dateIng: {
      required,
    },
    dateven: {
      required,
    },
    precioCompra: {
      required,
      minValue: minValue(1),
    },
    precioVenta: {
      required,
      minValue: minValue(1),
    },
    stockMin: {
      required,
      minValue: minValue(1),
    },
    stockMax: {
      required,
      minValue: minValue(1),
    },
    medPrescripcion: {
      required,
    },
    query: {
      required,
    },
  },
  computed: {
    provIndex: {
      get: function() {
        if (this.selectedProveedor && this.selectedProveedor.id) {
          return this.selectedProveedor.id
        } else {
          return null
        }
      },
    },
    autoComplete: function() {
      // `this` points to the vm instance
      return this.message
        .split('')
        .reverse()
        .join('')
    },
    precioTotal: () => {
      return 123
    },

    IdCod: {
      get: function() {
        return this.Invoice.client.id
      },
      set: function(newId) {
        axios
          .get(API_URL + `clients/find?id=${newId}`)
          .then((res) => {
            this.Invoice.client.id = res.data[0].id
            this.Invoice.client.Nom_Cli = res.data[0].Nom_Cli
            this.Invoice.client.Dni_Cli = res.data[0].Dni_Cli
            console.log(res)
          })
          .catch((error) => {
            console.log(error)
            this.Invoice.client.Nom_Cli = ''
            this.Invoice.client.Dni_Cli = ''
          })
      },
    },
    Total: () => {
      return this.detalleItems.reduce(function(cnt, o) {
        return cnt + o.Importe_Total
      }, 0)
    },
  },

  methods: {
    findClientInputOptions: () => {
      axios.get(
        (API_URL + `clients/find?id=${this.searchBar}`).then((response) => {
          console.log(response)
        })
      )
    },
    findProductInfo(index) {
      let productId = this.Invoice.detalleItems[index].id
      axios
        .get(API_URL + `products/findbyId?id=${productId}`)
        .then((res) => {
          console.dir(res)
          // this.Invoice.client.id = res.data[0].id
          this.Invoice.detalleItems[index].Nom_Medi = res.data.Nom_Medi
          this.Invoice.detalleItems[index].Precio_Unitario = res.data.Precio_Unitario
          this.Invoice.detalleItems[index].Cant_Dmed = 0
          this.form.itemsFieldsTable[index].state = true
          console.log(res)
          return this.Invoice.detalleItems[index].id
        })
        .catch((error) => {
          console.log(error)
          this.Invoice.detalleItems[index].Nom_Medi = ''
          this.Invoice.detalleItems[index].Precio_Unitario = 0
          this.Invoice.detalleItems[index].Cant_Dmed = 0
          this.form.itemsFieldsTable[index].state = false
        })
    },
    calcImpTotal(index) {
      // let productId = this.Invoice.detalleItems[index].id
      this.Invoice.detalleItems[index].Importe_Total =
        this.Invoice.detalleItems[index].Cant_Dmed * this.Invoice.detalleItems[index].Precio_Unitario

      this.Invoice.subTotal = this.Invoice.detalleItems.reduce(function(cnt, o) {
        return cnt + o.Importe_Total
      }, 0)

      this.Invoice.igvTotal = this.Invoice.subTotal * (this.Invoice.igv * 0.01)
      this.Invoice.precioTotal = this.Invoice.igvTotal + this.Invoice.subTotal
    },

    // antiguo testamento
    checkForm: function(e) {
      e.preventDefault()
      // console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        this.submitStatus = 'PENDING'
        axios
          .post('http://localhost:3010/products/insert', {
            product: {
              Nom_Medi: this.productName,
              Desc_Medi: this.productDescription,
              Cant_Medi: 2, // ! fix this
              Precio_Com: this.precioCompra,
              Precio_Unitario: this.precioVenta,
              RazonSoc_Prov: 'product.RazonSoc_Prov', // ! fix this
              Fecha_Ing: this.dateIng,
              Fecha_Ven: this.dateven,
              Stock_Min: this.stockMin,
              Stock_Max: this.stockMax,
              Pres_Medi: this.medPrescripcion,
              T01FCATId: this.selectedCat,
              T01FPROId: this.selectedProveedor.id,
            },
          })
          .then((response) => {
            // console.dir(response)
            setTimeout((response) => {
              // console.log('ingresado')
              //   currentObj.output = response
              this.submitStatus = 'OK'
              // Object.assign(this.$data, this.$options.data())
              // console.Object
              this.selectedCat = null
              this.productName = ''
              this.productDescription = ''
              this.dateIng = new Date()
              this.dateven = new Date()
              this.precioCompra = 0
              this.precioVenta = 0
              this.stockMin = 0
              this.stockMax = 0
              this.medPrescripcion = 0
              this.$v.$reset()
            }, 500)
            // this.submitStatus = 'OK'
            //   currentObj.output = response.data;
          })
          .catch((err) => {
            if (err.response && err.response.data) {
              // console.log(err.response.data)
            }
            this.submitStatus = 'ERROR'
            // console.log('error x')
            // console.log({ err })
          })
      }
    },
    async getAddresses(query) {
      // const res = await fetch(API_URL.replace(':query', query))
      // const suggestions = await res.json()
      // this.addresses = suggestions
      // console.dir(this.addresses)
      // console.log('x1')
    },
  },
  filters: {
    stringify(value) {
      return JSON.stringify(value, null, 2)
    },
  },

  // a computed getter
}
</script>
