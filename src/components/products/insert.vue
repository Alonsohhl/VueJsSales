

<template>
  <div class="row">

    <div class="col-lg-6">
      <div class="card-box">
        <h5 class="text-uppercase bg-light p-2 mt-0 mb-3">General</h5>

        <div class="form-group mb-3">
          <label for="product-name">
            Nombre del producto
            <span class="text-danger">*</span>
          </label>
          <input
            id="product-names"
            type="text"
            class="form-control"
            placeholder="e.g : Medicamento"
          />
        </div>

        <div class="form-group mb-3">
          <label for="product-description">
            Descripción
            <span class="text-danger">*</span>
          </label>
          <textarea
            class="form-control"
            id="product-description"
            rows="5"
            placeholder="Porfavor ingresar descripción"
          ></textarea>
        </div>

        <div class="form-group mb-3">
          <label for="product-reference">
            Seleccionar Categoria
            <span class="text-danger">*</span>
          </label>
          <!-- <select id="inputState" class="form-control">  @change="onChangeCat"  -->
          <select
            v-model="selectedCat"
            name="city"
            id="inputState"
            class="form-control"
            tabindex="12"
          >
            <!-- <option selected >Choose</option> -->
            <option v-for="(cat) in categories" :key="cat.id" :value="cat.id">{{ cat.Desc_Cat }}</option>
          </select>
          <div class="span">hola -> {{selectedCat}}</div>
        </div>

        <div class="form-group mb-3">
          <label for="product-price">
            Precio de Compra
            <span class="text-danger">*</span>
          </label>
          <input type="text" class="form-control" id="product-price" placeholder="Enter amount" />
        </div>

        <div class="form-group mb-3">
          <label for="product-price">
            Precio Unitario de Venta
            <span class="text-danger">*</span>
          </label>
          <input type="text" class="form-control" id="product-price" placeholder="Enter amount" />
        </div>

        <v-date-picker
          v-model='dateIng'
          color='red'
          is-dark
          :input-props='{
            class: "form-control" ,
            readonly: true,
            }'
        />

        <div class="form-group mb-3">
          <label for="product-reference">
            Por favor ingresar descripción
            <span class="text-danger">*</span>
          </label>
          <input
            type="text"
            id="product-reference"
            class="form-control"
            placeholder="e.g : Apple iMac"
          />
        </div>

        <div class="form-group mb-3">
          <label for="product-description">
            Descripción
            <span class="text-danger">*</span>
          </label>
          <textarea
            class="form-control"
            id="product-description"
            rows="5"
            placeholder="Please enter description"
          ></textarea>
        </div>

        <div class="form-group mb-3">
          <label for="product-summary">Product Summary</label>
          <textarea
            class="form-control"
            id="product-summary"
            rows="3"
            placeholder="Please enter summary"
          ></textarea>
        </div>

        <div class="form-group mb-3">
          <label for="product-category">
            Categories
            <span class="text-danger">*</span>
          </label>
          <select class="form-control select2" id="product-category">
            <option>Select</option>
            <optgroup label="Shopping">
              <option value="SH1">Shopping 1</option>
              <option value="SH2">Shopping 2</option>
              <option value="SH3">Shopping 3</option>
              <option value="SH4">Shopping 4</option>
            </optgroup>
            <optgroup label="CRM">
              <option value="CRM1">Crm 1</option>
              <option value="CRM2">Crm 2</option>
              <option value="CRM3">Crm 3</option>
              <option value="CRM4">Crm 4</option>
            </optgroup>
            <optgroup label="eCommerce">
              <option value="E1">eCommerce 1</option>
              <option value="E2">eCommerce 2</option>
              <option value="E3">eCommerce 3</option>
              <option value="E4">eCommerce 4</option>
            </optgroup>
          </select>
        </div>

        <div class="form-group mb-3">
          <label for="product-price">
            Price
            <span class="text-danger">*</span>
          </label>
          <input type="text" class="form-control" id="product-price" placeholder="Enter amount" />
        </div>

        <div class="form-group mb-3">
          <label class="mb-2">
            Status
            <span class="text-danger">*</span>
          </label>
          <br />
          <div class="radio form-check-inline">
            <input type="radio" id="inlineRadio1" value="option1" name="radioInline" checked />
            <label for="inlineRadio1">Online</label>
          </div>
          <div class="radio form-check-inline">
            <input type="radio" id="inlineRadio2" value="option2" name="radioInline" />
            <label for="inlineRadio2">Offline</label>
          </div>
          <div class="radio form-check-inline">
            <input type="radio" id="inlineRadio3" value="option3" name="radioInline" />
            <label for="inlineRadio3">Draft</label>
          </div>
        </div>

        <div class="form-group mb-0">
          <label>Comment</label>
          <textarea class="form-control" rows="3" placeholder="Please enter comment"></textarea>
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
// import { Datetime } from 'vue-datetime';
// import 'vue-datetime/dist/vue-datetime.css'

export default {
  name: 'prod-insert',
  components: {
    //   datetime: Datetime
  },
  //   props: {
  //     minimized: {
  //       type: Boolean,
  //       required: true,
  //     },
  //   },
  data() {
    return {
      //   items: navigationRoutes.routes,
      selectedCat: '',
      categories: [],
      dateIng: new Date(),
    }
  },
  //   methods: {
  //         onChangeCat: function (event) {
  //              axios.get('http://localhost:3010/products/getcat/10')
  //             .then((response) => {
  //                  console.log('Exito');
  //                  this.categories = response.data
  //             }).catch(function(error) {
  //                 console.log('error con Categorias ' + error);
  //             });
  //         },
  //         getCat: function () {

  //       axios.get('http://localhost:3010/products/getcat/10')
  //             .then((response) => {
  //                  console.log('Exito');
  //                  return response.data
  //             }).catch(function(error) {
  //                 return [error];
  //             });
  //             // return []
  //         }

  //     },
  created: function() {
    axios
      .get('http://localhost:3010/products/getcat/10')
      .then((response) => {
        console.log('Exito')
        this.categories = response.data
      })
      .catch(function(error) {
        console.log('error con Categorias ' + error)
      })
  },

  // a computed getter
}
</script>
