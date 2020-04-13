<template>
  <div class="row">
    <div class="col-12">
      <div class="card">
        <div class="card-body">
          <div class="row mb-2">
            <!-- -Link- -->
            <router-link
              tag="a"
              class="btn btn-danger waves-effect waves-light"
              :to="{ name: 'insVenta' }"
              data-animation="fadein"
              data-plugin="custommodal"
              data-overlaycolor="#38414a"
              >Agregar Factura</router-link
            >
          </div>
          <div class="row">
            <b-col lg="6" class="my-1">
              <b-form-group
                label="Filtrar"
                label-cols-sm="3"
                label-align-sm="right"
                label-size="sm"
                label-for="filterInput"
                class="mb-0"
                description="Dejar el campo vacío para retornar los últimos 20 documentos"
              >
                <b-input-group size="sm">
                  <b-form-input
                    id="filterInput"
                    v-model="table.filter.value"
                    type="search"
                    placeholder="Ingrese un Nro de Factura valido"
                    debounce="500"
                  ></b-form-input>
                  <b-input-group-append>
                    <b-button :disabled="!table.filter.value" @click="table.filter.value = ''">Clear</b-button>
                  </b-input-group-append>
                </b-input-group>
              </b-form-group>
            </b-col>
            <b-col lg="6" class="my-1">
              <b-form-group label="Buscar por:" label-cols-sm="3" label-align-sm="right" label-size="sm" class="mb-0">
                <b-form-radio-group
                  id="radio-group-search"
                  v-model="table.filter.selectedOption"
                  name="radio-sub-component"
                >
                  <b-form-radio value="id">ID</b-form-radio>
                  <b-form-radio value="Num_Boleta">Nro Documento</b-form-radio>
                </b-form-radio-group>
              </b-form-group>
            </b-col>
          </div>
          <div class="table-responsive">
            <b-table
              id="my-table-user"
              small
              :items="salesRawData"
              :fields="table.fields"
              responsive="sm"
              :busy="table.tableCatIsBusy"
              class="table table-centered table-striped"
            >
              <template v-slot:cell(Fecha_Boleta)="data">
                {{ data.item.Fecha_Boleta | toMomentJs }}
              </template>

              <template v-slot:cell(Precio_Total)="data">
                {{ data.item.Precio_Total | toCurrency }}
              </template>

              <template v-slot:cell(actions)="data">
                <b-button
                  size="sm"
                  class="mr-1"
                  variant="outline-primary"
                  @click="$router.push({ name: 'displayInvoice', params: { id: data.item.id } })"
                >
                  mostrar
                </b-button>
              </template>
            </b-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { API_URL } from '@src/app.config'

import moment from 'moment'

export default {
  data() {
    return {
      salesRawData: [],
      table: {
        filter: {
          value: null,
          selectedOption: 'id',
        },
        fields: [
          { key: 'id', label: 'ID' },
          { key: 'Ser_Boleta', label: 'Serie' },
          { key: 'Num_Boleta', label: 'Numero' },
          { key: 'Fecha_Boleta', label: 'Fecha' },
          { key: 'Precio_Total', label: 'Precio' },
          { key: 't01fcli.Nom_Cli', label: 'Cliente' },
          { key: 'actions', label: '' },
        ],
        tableCatIsBusy: null,
      },
    }
  },
  created: function() {
    moment.locale('es-PE')

    this.fillTable()
  },
  methods: {
    fillTable: function(value) {
      let axiosQuery = `${API_URL}ventas/fetchAll`
      if (value & (this.table.filter.selectedOption === 'id')) axiosQuery += `?id=${value}`
      if (value & (this.table.filter.selectedOption === 'Num_Boleta')) axiosQuery += `?Num_Boleta=${value}`

      axios
        .get(axiosQuery)
        .then((response) => {
          this.salesRawData = response.data
          this.tableCatIsBusy = false
        })
        .catch(function(error) {
          console.log(error)
        })
    },
  },
  watch: {
    'table.filter.value': function() {
      // if(this.table.filter.selectedOption===)
      this.fillTable(this.table.filter.value)
    },
    'table.filter.selectedOption': function() {
      // if(this.table.filter.selectedOption===)
      this.fillTable(this.table.filter.value)
    },
  },
}
</script>
