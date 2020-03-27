<template>
  <div class="row">
    <vueAlerts :alerts="alerts"></vueAlerts>
    <div class="col-12">
      <div class="card">
        <div class="card-body">
          <div class="row mb-2">
            <!-- -Link- -->
            <router-link
              tag="a"
              class="btn btn-danger waves-effect waves-light"
              :to="{ name: 'addUserAdmin' }"
              data-animation="fadein"
              data-plugin="custommodal"
              data-overlaycolor="#38414a"
              >Agregar Administrador</router-link
            >
          </div>

          <div class="table-responsive">
            <b-table
              id="my-table-user"
              small
              :items="UsersRawData"
              :fields="fields"
              responsive="sm"
              :busy="tableCatIsBusy"
              class="table table-centered table-striped"
            >
              <template v-slot:table-busy>
                <div class="text-center text-success my-2">
                  <b-spinner class="align-middle"></b-spinner>
                  <strong>Cargando...</strong>
                </div>
              </template>

              <template v-slot:cell(name)="row">
                {{ row.item.Nom_EmpFar }} {{ row.item.App_EmpFar }}
                {{ row.item.Apm_EmpFar }}
              </template>

              <template v-slot:cell(Desc_Cat)="row">
                <b-form-input
                  v-if="UsersRawData[row.index].actionOptions === 'editing'"
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
                <b-button-group v-if="UsersRawData[row.index].actionOptions === 'default'">
                  <router-link
                    tag="b-button"
                    class="btn btn-success waves-effect waves-light"
                    variant="outline-success"
                    :to="{
                      name: 'udpUserAdmin',
                      params: {
                        id: UsersRawData[row.index].id,
                      },
                    }"
                    data-animation="fadein"
                    data-plugin="custommodal"
                    data-overlaycolor="#38414a"
                    ><span class="mdi mdi-8px mdi-pencil"></span
                  ></router-link>

                  <b-button id="deleteAdmin" variant="outline-danger" type="button" @click="deleteUser(row.index)">
                    <span class="mdi mdi-8px mdi-delete"></span>
                  </b-button>
                </b-button-group>
                <!-- <b-button-group v-if="UsersRawData[row.index].actionOptions === 'editing'">
                  <b-button variant="outline-success" type="button" @click="updateCategory(row.index)">
                    Actualizar
                    <span class="mdi mdi-8px mdi-content-save"></span>
                  </b-button>

                  <b-button variant="outline-danger" type="button" @click="toggleRow(row.index)">
                    cancelar
                    <span class="mdi mdi-8px mdi-close"></span>
                  </b-button>
                </b-button-group> -->
              </template>
            </b-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vueAlerts from '@src/components/basicElements/alert'
import axios from 'axios'
import appConfig from '@src/app.config' // configuracion file
import Swal from 'sweetalert2/dist/sweetalert2.js'
let adminHelper = require('./adminUserHelper')

export default {
  components: {
    vueAlerts,
  },
  data() {
    return {
      tableCatIsBusy: true,
      actionOptions: 'default', // tool bar for grid Options

      alerts: [],

      fields: [
        { key: 'id', label: 'Cod' },
        { key: 'Dni_EmpFar', label: 'Dni' },
        { key: 'name', label: 'Nombre' },
        { key: 'Correo_EmpFar', label: 'Correo' },
        'Acciones',
      ],

      submitStatus: null,
      UsersRawData: [],
    }
  },
  created: function() {
    this.fillTable = () => {
      axios
        .get(`${appConfig.API_URL}users/find`)
        .then((response) => {
          this.UsersRawData = response.data
          this.UsersRawData.forEach(function(element) {
            element.editFlag = false
            element.actionOptions = 'default'
          })
          this.tableCatIsBusy = false
        })
        .catch(function(error) {
          return error
        })
    }
    this.fillTable()
  },
  methods: {
    deleteUser: function(index) {
      Swal.fire({
        title: 'Estas seguro?',
        text: 'El Usuario sera eliminado!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, Eliminar',
        cancelButtonText: 'No, Conservar el usuario',
      }).then((result) => {
        if (result.value) {
          Swal.fire('Eliminado!', 'Usuario eliminado.', 'success')
          this.submitStatus = 'PENDING'
          adminHelper.deleteAdmin(this.UsersRawData[index].id).then(() => {
            this.UsersRawData[index].actionOptions = 'default'
            this.fillTable()
            this.submitStatus = 'OK'
            this.$root.$emit('bv::refresh::table', 'my-table-user')
          })
        }
      })
    },
  },
}
</script>

<style></style>
