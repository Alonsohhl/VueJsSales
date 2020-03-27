<template>
  <div class="container-fluid">
    <h2 class="header-title mb-4">Clientes</h2>

    <vueAlerts :alerts="alerts"></vueAlerts>
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="row mb-2">
              <router-link
                tag="a"
                class="btn btn-danger waves-effect waves-light"
                :to="{ name: 'addCliente', params: { mode: 'ING' } }"
                data-animation="fadein"
                data-plugin="custommodal"
                data-overlaycolor="#38414a"
                >Agregar Cliente</router-link
              >
            </div>

            <div class="table-responsive">
              <b-table
                id="my-table"
                small
                :items="categories"
                :fields="fields"
                responsive="sm"
                :busy="tableCatIsBusy"
                class="table table-centered table-striped"
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
                  <b-button-group v-if="categories[row.index].actionOptions === 'default'">
                    <!--

              > -->
                    <router-link
                      tag="b-button"
                      class="btn btn-success waves-effect waves-light"
                      variant="outline-success"
                      :to="{
                        name: 'clientesDetalle',
                        params: {
                          id: categories[row.index].id,
                          mode: 'UPDATE',
                        },
                      }"
                      data-animation="fadein"
                      data-plugin="custommodal"
                      data-overlaycolor="#38414a"
                      ><span class="mdi mdi-8px mdi-pencil"></span
                    ></router-link>

                    <b-button variant="outline-danger" type="button" @click="deleteUserClient(row.index)">
                      <span class="mdi mdi-8px mdi-delete"></span>
                    </b-button>
                  </b-button-group>
                  <b-button-group v-if="categories[row.index].actionOptions === 'editing'">
                    <b-button variant="outline-success" type="button" @click="updateCategory(row.index)">
                      Actualizar
                      <span class="mdi mdi-8px mdi-content-save"></span>
                    </b-button>

                    <b-button variant="outline-danger" type="button" @click="toggleRow(row.index)">
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
      </div>
    </div>

    <!-- end row -->
  </div>
</template>

<script>
import vueAlerts from '@src/components/basicElements/alert'
import axios from 'axios'
import { required } from 'vuelidate/lib/validators'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss' // minLength
import appConfig from '@src/app.config' // configuracion file

let clientController = require('./clientsHelpers')

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
        { key: 'Dni_Cli', label: 'DNI' },
        { key: 'Nom_Cli', label: 'Nombre' },
        { key: 'Correo_Cli', label: 'Correo' },
        'Acciones',
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
    provIndex: function() {
      // `this` points to the vm instance
      return this.message
        .split('')
        .reverse()
        .join('')
    },
  },
  watch: {
    query(newQuery) {
      axios.get(`http://localhost:3010/products/getproveedores?razSoc=${newQuery}`).then((res) => {
        // console.log('TCL: query -> res.data', res.data)
        this.proveedores = res.data
      })
    },
  },
  created: function() {
    this.fillTable = () => {
      axios
        .get(appConfig.API_URL + 'clients/find')
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
      clientController
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
    deleteUserClient: function(index) {
      Swal.fire({
        title: 'Estas seguro?',
        text: 'El cliente sera eliminado!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, Eliminar',
        cancelButtonText: 'No, Conservar el Cliente',
      }).then((result) => {
        if (result.value) {
          Swal.fire('Eliminado!', 'Cliente Eliminado.', 'success')
          this.submitStatus = 'PENDING'
          clientController.deleteClient(this.categories[index].id).then(() => {
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
        const res = await fetch(appConfig.API_URL.replace(':query', query))
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
