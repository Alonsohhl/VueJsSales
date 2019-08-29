

<template>
<div class="card">
  <div class="row">

      <div class="col-md-6">
        <div class="table-responsive">
                  <b-table striped hover :items="items" id="datatable-buttons" class="table table-centered mb-0" :fields="fields"></b-table>
        </div>

      </div>
    </div>

    <!-- end col -->
  </div>
  <!-- end row -->
</template>


<script>
import axios from 'axios'

// const API_URL = 'http://localhost:3010/products/getproveedores?razSoc=:query'

export default {
  name: 'prod-main',
  components: {},
  data() {
    return {
      fields: ['first_name', 'last_name', 'age', '-'],
      items: [
        { age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
        { age: 21, first_name: 'Larsen', last_name: 'Shaw' },
        { age: 89, first_name: 'Geneva', last_name: 'Wilson' },
        { age: 38, first_name: 'Jami', last_name: 'Carney' },
      ],
    }
  },
}
</script>
