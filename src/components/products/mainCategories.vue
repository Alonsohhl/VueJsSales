<template>
  <div class="container-fluid">
    <h2 class="header-title mb-4">Categorias</h2>

    <vueAlerts :alerts="alerts"></vueAlerts>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <b-table
            id="my-table"
            small
            :items="categories"
            :fields="fields"
            responsive="sm"
            :busy="tableCatIsBusy"
            class="tabledit-view-mode"
          >
            <template v-slot:table-busy>
              <div class="text-center text-success my-2">
                <b-spinner class="align-middle"></b-spinner>
                <strong>Loading...</strong>
              </div>
            </template>

            <template v-slot:cell(Desc_Cat)="row">
              <b-form-input
                v-if="categories[row.index].actionOptions === 'editing'"
                id="range-1"
                v-model="row.item.Desc_Cat"
                type="text"
              ></b-form-input>
              <div v-else>
                {{ row.item.Desc_Cat }}
              </div>
              <!-- <input class="tabledit-input form-control form-control-sm" type="text" name="col1" value="Desc_Cat" style=""> -->
            </template>

            <template v-slot:cell(Acciones)="row">
              <b-button-group
                v-if="categories[row.index].actionOptions === 'default'"
              >
                <b-button
                  variant="outline-success"
                  type="button"
                  @click="toggleEdit(row.index)"
                >
                  <span class="mdi mdi-8px mdi-pencil"></span>
                </b-button>
                <b-button
                  variant="outline-danger"
                  type="button"
                  @click="deleteCategory(row.index)"
                >
                  <span class="mdi mdi-8px mdi-delete"></span>
                </b-button>
              </b-button-group>
              <b-button-group
                v-if="categories[row.index].actionOptions === 'editing'"
              >
                <b-button
                  variant="outline-success"
                  type="button"
                  @click="updateCategory(row.index)"
                >
                  Actualizar
                  <span class="mdi mdi-8px mdi-content-save"></span>
                </b-button>

                <b-button
                  variant="outline-danger"
                  type="button"
                  @click="toggleRow(row.index)"
                >
                  cancelar
                  <span class="mdi mdi-8px mdi-close"></span>
                </b-button>
              </b-button-group>

              <!-- <button type="button" class="btn btn-outline-success btn-rounded waves-effect waves-light" style=""><span class="mdi mdi-8px mdi-pencil"></span></button> -->
            </template>
          </b-table>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-xl-8">
        <div class="card">
          <div class="card-body">
            <h2 class="header-title mb-4">Ingreso Categorias</h2>

            <!-- <b-table striped hover :items="items"></b-table> -->

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
                Los campos no son <strong>validos</strong>
              </div>

              <div class="form-row mb-1">
                <div class="col-3">
                  <label for="product-name">
                    Codigo Cat
                  </label>

                  <input
                    id="product-names"
                    v-model.trim="$v.codigoCategoria.$model"
                    type="text"
                    class="form-control"
                    placeholder="Categoria"
                  />
                  <ul
                    v-if="
                      $v.codigoCategoria.$anyDirty &&
                        !$v.codigoCategoria.required
                    "
                    id="parsley-id-7"
                    class="parsley-errors-list filled mb-2"
                  >
                    <li class="parsley-required">Requerido.</li>
                  </ul>
                </div>

                <div class="col-6">
                  <label for="Categoria-name">
                    Nombre de Categoria
                  </label>

                  <input
                    id="Categoria-names"
                    v-model.trim="$v.descCategoria.$model"
                    type="text"
                    class="form-control"
                    placeholder="Categoria"
                  />
                  <ul
                    v-if="
                      $v.descCategoria.$anyDirty && !$v.descCategoria.required
                    "
                    id="Categoria-id-7"
                    class="parsley-errors-list filled mb-2"
                  >
                    <li class="parsley-required">Requerido.</li>
                  </ul>
                </div>

                <button
                  type="submit"
                  class="btn btn-primary waves-effect waves-light mt-3"
                  >Ingresar Categoria</button
                >
              </div>
            </form>
          </div>
        </div>
        <!-- end card-box -->
      </div>
      <!-- end col -->
    </div>
    <!-- end row -->
  </div>
</template>

<script>
import vueAlerts from '../basicElements/alert'
import axios from 'axios'

import { required } from 'vuelidate/lib/validators'

import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss' // minLength
let catController = require('./categoriesHelpers')

const API_URL = 'http://localhost:3010/products/getproveedores?razSoc=:query'

export default {
  name: 'ProdInsert',
  components: {
    vueAlerts,
    // Table,Input
  },
  filters: {
    stringify(value) {
      return JSON.stringify(value, null, 2)
    },
  },
  data() {
    return {
      descCategoria: '',
      codigoCategoria: '',
      tableCatIsBusy: true,
      actionOptions: 'default',
      okAlertTimer: 0,

      alerts: [],

      fields: [
        { key: 'Cod_Cat', label: 'Codigo' },
        { key: 'Desc_Cat', label: 'Descripción' },
        'Acciones', // // A regular column
      ],

      submitStatus: null,
      categories: [],

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

      query: '',
      selectedProveedor: null,
      proveedores: [],
    }
  },
  validations: {
    codigoCategoria: {
      required,
    },
    descCategoria: {
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
  },
  watch: {
    query(newQuery) {
      axios
        .get(`http://localhost:3010/products/getproveedores?razSoc=${newQuery}`)
        .then((res) => {
          // console.log('TCL: query -> res.data', res.data)
          this.proveedores = res.data
        })
    },
  },
  created: function() {
    this.fillTable = () => {
      axios
        .get('http://localhost:3010/products/getcat/10')
        .then((response) => {
          this.categories = response.data
          this.categories.forEach(function(element) {
            element.editFlag = false
            element.actionOptions = 'default'
          })
          this.tableCatIsBusy = false
        })
        .catch(function(error) {
          return error
          // console.log('error con Categorias ' + error)
        })
    }
    this.fillTable()
  },
  methods: {
    checkForm: function(e) {
      e.preventDefault()
      // console.log('submit Category')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
        // console.log('submit Categorysss')
      } else {
        this.submitStatus = 'PENDING'
        axios
          .post('http://localhost:3010/products/insertCategory', {
            categoria: {
              Cod_Cat: this.codigoCategoria,
              Desc_Cat: this.descCategoria,
            },
          })
          .then((response) => {
            // console.dir(response)
            setTimeout((response) => {
              // console.log('ingresado')
              this.submitStatus = 'OK'
              this.fillTable()
            }, 500)
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
    toggleEdit: function(index) {
      this.categories[index].editFlag = !this.categories[index].editFlag
      this.categories[index].actionOptions = 'editing'
      this.$root.$emit('bv::refresh::table', 'my-table')
      // this.fillTable()
    },
    toggleRow: function(index, value = 'default') {
      this.categories[index].actionOptions = value
      this.$root.$emit('bv::refresh::table', 'my-table')
    },
    updateCategory: function(index) {
      catController
        .updateCategory({
          id: this.categories[index].id,
          Desc_Cat: this.categories[index].Desc_Cat,
        })
        .then(() => {
          this.categories[index].actionOptions = 'default'
          this.alerts.push({ mensaje: 'Categoria Actualizada' })
          this.$root.$emit('bv::refresh::table', 'my-table')
          // this.flash('Data loadedx', 'success');
        })
    },
    deleteCategory: function(index) {
      Swal.fire({
        title: 'Estas seguro?',
        text: 'La categoria sera eliminada!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, Eliminar',
        cancelButtonText: 'No, Conservar la categoria',
      }).then((result) => {
        if (result.value) {
          Swal.fire('Eliminado!', 'Categoria Eliminada.', 'success')
          this.submitStatus = 'PENDING'
          catController
            .deleteCategory({
              id: this.categories[index].id,
            })
            .then(() => {
              this.categories[index].actionOptions = 'default'
              // this.alerts.push({mensaje: 'Categoria Eliminada'})
              this.fillTable()
              this.submitStatus = 'OK'
              this.$root.$emit('bv::refresh::table', 'my-table')
            })
        }
      })
    },

    async getAddresses(query) {
      try {
        const res = await fetch(API_URL.replace(':query', query))
        const suggestions = await res.json()

        this.addresses = suggestions
        // console.dir(this.addresses)
      } catch (error) {
        return error // "Oops!"
      }
    },
    info(item, index, button) {
      this.infoModal.title = `Row index: ${index}`
      this.infoModal.content = JSON.stringify(item, null, 2)
      this.$root.$emit('bv::show::modal', this.infoModal.id, button)
    },
  },
}
</script>
