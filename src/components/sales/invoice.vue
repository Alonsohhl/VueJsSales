<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="card-body" :class="invoiceClass">
          <h2 class="header-title mb-4">Ingreso de Documento de Venta</h2>

          <!-- <p class="typo__p" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p> -->
          <div class="d-flex justify-content-center">
            <div
              v-show="form.submitStatus === 'PENDING'"
              class="spinner-border text-success m-2 avatar-lg"
              role="status"
            ></div>
          </div>
          <div v-show="form.submitStatus === 'OK'" class="alert alert-success" role="alert">
            <i class="mdi mdi-check-all mr-2"></i> Documento ingresado
            <strong>correctamente!</strong>
          </div>

          <form v-show="form.submitStatus !== 'PENDING'" :disabled="0" @submit.stop.prevent="onSubmit">
            <div
              v-if="form.submitStatus === 'ERROR'"
              class="alert alert-danger bg-danger text-white border-0"
              role="alert"
            >
              Los campos no son
              <strong>validos</strong>
            </div>
            <h5 class="text-uppercase bg-light p-2 mt-0 mb-3">Cliente</h5>
            <div v-if="$v.Invoice.client.id.$anyError">
              <b-alert show>
                <i class="mdi mdi-block-helper mr-2"></i>
                Codigo de Cliente invalido x
                {{ $v.Invoice.client.id.required }}
              </b-alert>
            </div>
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

            <div class="form-row align-items-center mb-2">
              <div class="col-2">
                <label for="product-reference">
                  Codigo
                </label>
                <b-form-input
                  v-model="Invoice.client.id"
                  placeholder="Cod Usuario"
                  debounce="500"
                  :disabled="form.tipClient.value !== 'REGISTRADO'"
                  :state="form.client.id.state"
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
                        <b-th :colspan="1">{{ Invoice.subTotal | toCurrency }} </b-th>
                      </b-tr>
                      <b-tr>
                        <b-th :colspan="3" sticky-column></b-th>
                        <b-th :colspan="2" class="text-right" sticky-column>con IGV:</b-th>
                        <b-th :colspan="1">{{ Invoice.igvTotal | toCurrency }} </b-th>
                      </b-tr>
                      <b-tr>
                        <b-th :colspan="3" sticky-column></b-th>
                        <b-th :colspan="2" class="text-right" sticky-column>con IGV:</b-th>
                        <b-th :colspan="1">{{ Invoice.precioTotal | toCurrency }} </b-th>
                      </b-tr>
                    </template>
                  </b-table>
                  <button type="submit" class="btn btn-primary waves-effect waves-light m-2 float-right"
                    >Ingresar Producto</button
                  >
                </div>
              </div>

              Documento creado por: {{ currentUser.name }}
            </div>
          </form>
        </div>
        <div class="" :class="invoiceClass"> </div>
      </div>
      <!-- end card-box -->
    </div>
    <!-- end col -->
  </div>
  <!-- end row -->
</template>

<script>
import axios from 'axios'
// import { required, minValue } from 'vuelidate/lib/validators' // minLength
import { required, minValue } from 'vuelidate/lib/validators'

import { API_URL } from '@src/app.config'
import Swal from 'sweetalert2'
// const mustBeCool = (value) => false

export default {
  name: 'ProdInsert',
  components: {},
  filters: {
    stringify(value) {
      return JSON.stringify(value, null, 2)
    },
  },
  props: {
    user: {
      type: Object,
      required: false,
      default: () => ({}),
    },
  },
  data() {
    return {
      autoCompleteProdQuery: '',
      autoCompleteProducts: [],
      auxx: '0',

      nameOptions: ['Small', 'Medium', 'Large', 'Extra Large'],

      form: {
        submitStatus: '',
        tipClient: {
          value: 'REGISTRADO',
          options: [
            { text: 'Cliente Registrado', value: 'REGISTRADO' },
            { text: 'Cliente Nuevo', value: 'NUEVO' },
          ],
        },
        client: {
          id: { state: null },
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
          id: null,
          Nom_Cli: '',
          Dni_Cli: '',
        },
        // prettier-ignore
        detalleItems: [
          { line_medi: 1, Cod_Medi: null, Nom_Medi: null, Cant_Dmed: null, Precio_Unitario: null, Importe_Total: null ,valid:false},
          { line_medi: 2, Cod_Medi: null, Nom_Medi: null, Cant_Dmed: null, Precio_Unitario: null, Importe_Total: null ,valid:false},
          { line_medi: 3, Cod_Medi: null, Nom_Medi: null, Cant_Dmed: null, Precio_Unitario: null, Importe_Total: null ,valid:false},
          { line_medi: 4, Cod_Medi: null, Nom_Medi: null, Cant_Dmed: null, Precio_Unitario: null, Importe_Total: null ,valid:false},
          { line_medi: 5, Cod_Medi: null, Nom_Medi: null, Cant_Dmed: null, Precio_Unitario: null, Importe_Total: null ,valid:false},
        ]
      },
    }
  },

  validations() {
    return {
      Invoice: {
        DateCreacion: { required },
        DateVencimiento: { required },
        subTotal: { required, minValue: minValue(0.01) },
        igv: { required },
        igvTotal: { required, minValue: minValue(0.01) },
        precioTotal: { required, minValue: minValue(0.01) },
        client: { id: { required } },
      },
    }
  },
  computed: {
    invoiceClass() {
      return this.form.submitStatus === 'SUBMITED' ? 'fadeOutRightBig animated' : null
    },

    currentUser() {
      return this.$store.state.auth.currentUser
    },
    autoComplete: function () {
      // `this` points to the vm instance
      return this.message.split('').reverse().join('')
    },
  },
  watch: {
    'Invoice.client.id': function (newQuestion, oldQuestion) {
      this.$v.Invoice.client.id.$touch()
      axios
        .get(API_URL + `clients/find?id=${this.Invoice.client.id}`)
        .then((res) => {
          this.Invoice.client.id = res.data[0].id
          this.form.client.id.state = true

          this.Invoice.client.Nom_Cli = res.data[0].Nom_Cli
          this.Invoice.client.Dni_Cli = res.data[0].Dni_Cli
        })
        .catch((error) => {
          console.log(error)
          this.Invoice.client.Nom_Cli = ''
          this.Invoice.client.Dni_Cli = ''
          this.form.client.id.state = false
        })
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
          this.Invoice.detalleItems[index].valid = true

          this.form.itemsFieldsTable[index].state = true

          return this.Invoice.detalleItems[index].id
        })
        .catch((error) => {
          console.log(error)
          this.Invoice.detalleItems[index].Nom_Medi = ''
          this.Invoice.detalleItems[index].Precio_Unitario = 0
          this.Invoice.detalleItems[index].Cant_Dmed = 0
          this.form.itemsFieldsTable[index].state = false
          this.Invoice.detalleItems[index].valid = false
        })
    },
    calcImpTotal(index) {
      // let productId = this.Invoice.detalleItems[index].id
      this.Invoice.detalleItems[index].Importe_Total =
        this.Invoice.detalleItems[index].Cant_Dmed * this.Invoice.detalleItems[index].Precio_Unitario

      this.Invoice.subTotal = this.Invoice.detalleItems.reduce(function (cnt, o) {
        return cnt + o.Importe_Total
      }, 0)

      this.Invoice.igvTotal = this.Invoice.subTotal * (this.Invoice.igv * 0.01)
      this.Invoice.precioTotal = this.Invoice.igvTotal + this.Invoice.subTotal
    },

    onSubmit(evt) {
      console.dir(this.Invoice.detalleItems)
      this.$v.Invoice.$touch()
      if (this.$v.Invoice.$anyError) {
        console.log(this.$v.Invoice.$anyError)
        return
      }

      if (this.$v.$invalid) {
        this.form.submitStatus = 'ERROR'
      } else {
        this.form.submitStatus = 'PENDING'
        axios
          .post(API_URL + 'ventas/setVenta', {
            cabecera: {
              Ser_Boleta: 'F001',
              Cod_Sucur: '1',
              Fecha_Boleta: this.Invoice.DateCreacion,
              Fecha_Venc_Boleta: this.Invoice.DateVencimiento,
              id_Usuario: this.currentUser.name.id,
              id_Cliente: this.Invoice.client.id,
              Sub_Total: this.Invoice.subTotal,
              IGV: this.Invoice.igvTotal,
              Precio_Total: this.Invoice.precioTotal,
              detalle: this.Invoice.detalleItems
                .filter((line) => line.valid)
                .map((currentItem) => {
                  console.log(currentItem)
                  return {
                    Cod_Medi: currentItem.id,
                    Nom_Medi: currentItem.Nom_Medi,
                    Cant_Dmed: currentItem.Cant_Dmed,
                    Precio_Unitario: currentItem.Precio_Unitario,
                    Importe_Total: currentItem.Importe_Total,
                  }
                }),
            },
          })
          .then((response) => {
            console.log('-->')
            console.dir(response)
            setTimeout(() => {
              console.log('ingresado')
              this.form.submitStatus = 'SUBMITED'
              Swal.fire({
                title: 'Registro Exitoso!',
                text: 'Factura ingresada correctamente',
                icon: 'success',
                confirmButtonText: 'Continuar',
              })
              this.$router.push({ name: 'displayInvoice', params: { id: response.data.id } })
              this.$v.$reset()
            }, 500)
          })
          .catch((err) => {
            if (err.response && err.response.data) {
              console.log(err.response.data)
            }
            this.form.submitStatus = 'ERROR'
            console.log('error x')
            console.log({ err })
          })
      }
    },

    // antiguo testamento

    async getAddresses(query) {
      // const res = await fetch(API_URL.replace(':query', query))
      // const suggestions = await res.json()
      // this.addresses = suggestions
      // console.dir(this.addresses)
      // console.log('x1')
    },
  },

  // a computed getter
}
</script>
