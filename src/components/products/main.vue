<template>
  <div class="card">
    <div class="row">
      <div class="col-md-12">
        <b-input-group size="sm">
          <b-form-input
            id="filterInput"
            v-model="filter"
            type="search"
            placeholder="Buscar por Nombre"
          ></b-form-input>
          <b-input-group-append>
            <b-button :disabled="!filter" @click="filter = ''"
              >Cancelar</b-button
            >
          </b-input-group-append>
        </b-input-group>
        <!-- <div class="table-responsive"> -->

        <b-table
          striped
          hover
          :items="getApiDataTable"
          class="table table-centered mb-0"
          :fields="fields"
          :filter="filter"
        >
          <!-- <b-table striped hover :items="getApiDataTable" class="table table-centered mb-0"   :busy.sync="isBusy" :fields="fields" :filter="filter"> -->
        </b-table>
      </div>
    </div>
  </div>

  <!-- end col -->
  <!-- </div> -->
  <!-- end row -->
</template>

<script>
// import axios from 'axios'
var PRODUCTS = require('./productHelpers')
// const API_URL = 'http://localhost:3010/products/getproveedores?razSoc=:query'

export default {
  name: 'ProdMain',
  components: {},
  data() {
    return {
      products: [],
      fields: [
        { key: 'Nom_Medi', label: 'Nombre' },
        { key: 'Cant_Medi', label: 'Cantidad' },
        { key: 'RUC', label: 'RUC' },
        { key: 'RazonSoc_Prov', label: 'Razon Social' },
      ],
      filter: '',
      isBusy: false,
    }
  },
  // created: () => {
  //   this.fillTable = () => {
  //     PRODUCTS.getProducts
  //   }
  //   this.fillTable()
  // },

  methods: {
    getApiDataTable(ctx) {
      // Here we don't set isBusy prop, so busy state will be
      // handled by table itself
      // this.isBusy = true
      // this.products =  PRODUCTS.getProducts()
      // let promise = axios.get('http://localhost:3010/products/getall/5/'+this.filter)

      return PRODUCTS.getProducts()
      // return promise.then((data) => {
      //   const items = data.data

      //   // Here we could override the busy state, setting isBusy to false
      //   // this.isBusy = false
      //   console.dir(data)
      //   return(items)
      // }).catch(error => {
      //   // Here we could override the busy state, setting isBusy to false
      //   // this.isBusy = false
      //   // Returning an empty array, allows table to correctly handle
      //   // internal busy state in case of error
      //   console.log(error)
      //   return []
      // })
    },
  },
}
</script>
