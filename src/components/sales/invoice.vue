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
          <div
            v-show="submitStatus === 'OK'"
            class="alert alert-success"
            role="alert"
          >
            <i class="mdi mdi-check-all mr-2"></i> Producto ingresado
            <strong>correctamente!</strong>
          </div>

          <form
            v-show="submitStatus !== 'PENDING'"
            action="/something"
            method="post"
            :disabled="0"
            @submit="checkForm"
          >
            <div
              v-if="submitStatus === 'ERROR'"
              class="alert alert-danger bg-danger text-white border-0"
              role="alert"
            >
              Los campos no son
              <strong>validos</strong>
            </div>
            <h5 class="text-uppercase bg-light p-2 mt-0 mb-3">Cliente</h5>
            <div class="form-row mb-1">
              <div class="col-auto">
                <label for="product-reference">
                  Seleccionar Tipo de Cliente
                  <span class="text-danger">*</span>
                </label>
                <!-- <select id="inputState" class="form-control">  @change="onChangeCat"  -->
                <select
                  id="inputState"
                  v-model="tipClient"
                  class="form-control"
                  tabindex="12"
                >
                  <!-- <option selected >Choose</option> -->
                  <option value="0">Sin codigo</option>
                  <option value="1">Con condigo</option>
                </select>

                <ul
                  v-if="$v.selectedCat.$anyDirty && !$v.selectedCat.required"
                  id="parsley-id-7"
                  class="parsley-errors-list filled mb-2"
                >
                  <li class="parsley-required">Requerido.</li>
                </ul>
              </div>
              <div class="col-3">
                <label for="product-reference">
                  Nro. Doc
                  <span class="text-danger">*</span>
                </label>
                <input
                  id="cliDoc"
                  v-model.trim="cliDoc"
                  type="string"
                  class="form-control"
                  placeholder="Nro. Doc"
                />
              </div>
              <div class="col-6">
                <label for="product-reference">
                  Nombre de cliente
                  <span class="text-danger">*</span>
                </label>
                <input
                  id="cliDoc"
                  v-model.trim="cliDoc"
                  type="string"
                  class="form-control"
                  placeholder="Nombre de Cliente"
                  :disabled="tipClient === '1'"
                />
              </div>
            </div>
            <!-- <ul class="parsley-errors-list filled mb-2" id="parsley-id-7"><li class="parsley-required">This value is required.</li></ul> -->

            <div class="form-row align-items-center mb-2">
              <div class="col-auto">
                <label for="product-price">
                  Fecha de Ingreso
                  <span class="text-danger">*</span>
                </label>
                <v-date-picker
                  v-model="dateIng"
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
                  v-model="dateven"
                  color="red"
                  is-dark
                  :input-props="{
                    class: 'form-control',
                    readonly: true,
                  }"
                />
              </div>
            </div>
            <div class="form-row mb-2">
              <div class="col-auto">
                <label for="product-price">
                  Precio de Compra
                  <span class="text-danger">*</span>
                </label>
                <input
                  id="product-price"
                  v-model.trim="$v.precioCompra.$model"
                  type="number"
                  class="form-control"
                  placeholder="Ingrese cantidad"
                />
                <ul
                  v-if="$v.precioCompra.$anyDirty && !$v.precioCompra.minValue"
                  id="parsley-id-7"
                  class="parsley-errors-list filled mb-2"
                >
                  <li class="parsley-required">
                    el
                    <strong>Valor</strong> tiene que ser mayor.
                  </li>
                </ul>
              </div>
              <div class="col-auto">
                <label for="product-price">
                  Precio Unitario de Venta
                  <span class="text-danger">*</span>
                </label>
                <input
                  id="product-price"
                  v-model.trim="$v.precioVenta.$model"
                  type="number"
                  class="form-control"
                  placeholder="Ingrese cantidad"
                />
                <ul
                  v-if="$v.precioVenta.$anyDirty && !$v.precioVenta.minValue"
                  id="parsley-id-7"
                  class="parsley-errors-list filled mb-2"
                >
                  <li class="parsley-required">
                    el
                    <strong>Valor</strong> tiene que ser mayor.
                  </li>
                </ul>
              </div>
            </div>

            <div class="form-row mb-2">
              <div class="col-auto">
                <label for="product-price">
                  Stock Minimo
                  <span class="text-danger">*</span>
                </label>
                <input
                  id="product-price"
                  v-model.trim="$v.stockMin.$model"
                  type="number"
                  class="form-control"
                  placeholder="Ingrese cantidad"
                />
                <ul
                  v-if="$v.stockMin.$anyDirty && !$v.stockMin.minValue"
                  id="parsley-id-7"
                  class="parsley-errors-list filled mb-2"
                >
                  <li class="parsley-required">
                    el
                    <strong>Valor</strong> tiene que ser mayor.
                  </li>
                </ul>
              </div>
              <div class="col-auto">
                <label for="product-price">
                  Stock Maximo
                  <span class="text-danger">*</span>
                </label>
                <input
                  id="product-price"
                  v-model.trim="$v.stockMax.$model"
                  type="number"
                  class="form-control"
                  placeholder="Ingrese cantidad"
                />
                <ul
                  v-if="$v.stockMax.$anyDirty && !$v.stockMax.minValue"
                  id="parsley-id-7"
                  class="parsley-errors-list filled mb-2"
                >
                  <li class="parsley-required">
                    el
                    <strong>Valor</strong> tiene que ser mayor.
                  </li>
                </ul>
              </div>
            </div>

            <div class="form-row mb-2">
              <div class>
                <label for="product-price">
                  Ingresar Proveedor
                  <span class="text-danger">*</span>
                </label>
                <!-- eslint-disable-next-line -->
                <vue-bootstrap-typeahead
                  v-model="autoCompleteProdQuery"
                  class="mb-2"
                  :data="autoCompleteProducts"
                  :serializer="(item) => item.Nom_Medi"
                  placeholder="Buscar Proveedores"
                  @hit="selectedProveedor = $event"
                />

                <label
                  v-if="selectedProveedor && selectedProveedor.RazonSoc_Prov"
                  for="selectedProveedor"
                >
                  <strong>RUC:</strong>
                  {{ selectedProveedor.RUC }} /
                  <strong>Razon Social:</strong>
                  {{ selectedProveedor.RazonSoc_Prov }}
                </label>
                <ul
                  v-if="$v.query.$anyDirty && !provIndex"
                  id="parsley-id-7"
                  class="parsley-errors-list filled mb-2"
                >
                  <li class="parsley-required">Requerido.</li>
                </ul>
              </div>
            </div>

            <button
              type="submit"
              class="btn btn-primary waves-effect waves-light mt-3"
              >Ingresar Producto</button
            >
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
// import _ from 'underscore'

import { required, minValue } from 'vuelidate/lib/validators' // minLength
import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'

// const API_URL = process.env.API_BASE_URL + 'http://localhost:3010/products/getProdByCodOrDesc?razSoc=:query'
//          const API_URL = 'https://api-url-here.com?query=:query'
export default {
  name: 'ProdInsert',
  components: {
    VueBootstrapTypeahead,
  },
  data() {
    return {
      tipClient: 0,
      cliDoc: null,

      autoCompleteProdQuery: '',
      autoCompleteProducts: [],

      invoiceProducts: [
        { id: '0001', Nom_Medi: 'My journey with Vue' },
        { id: '0002', Nom_Medi: 'Blogging with Vue' },
        { id: '0003', Nom_Medi: 'Why Vue is so fun' },
      ],

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
  },
  // created: function() {
  //   axios
  //     .get('http://localhost:3010/products/getcat/10')
  //     .then((response) => {
  //       console.log('Cat Loaded')
  //       this.categories = response.data
  //     })
  //     .catch(function(error) {
  //       console.log('error con Categorias ' + error)
  //     })
  // },
  watch: {
    // addressSearchx: _.debounce(function(addr) {
    // console.log('x2')
    // this.getAddresses(addr) }, 500)
    query(newQuery) {
      // console.log('e');
      axios
        // .get(`http://localhost:3010/products/getproveedores?razSoc=${newQuery}`)
        .get(`http://localhost:3010/products/getProdByCodOrDesc/1`)
        .then((res) => {
          // console.log('TCL: query -> res.data', res.data)
          this.autoCompleteProducts = res.data
        })
        .catch(function(e) {
          // console.log('e'); // "oh, no!"
        })
    },
  },
  // age: {
  //   between: between(20, 30)
  // },
  methods: {
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
