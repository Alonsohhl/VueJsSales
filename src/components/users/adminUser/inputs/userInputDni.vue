<template>
  <b-form-group id="input-group-Dni_EmpFar" label="DNI" label-for="input-Dni_EmpFar">
    <!-- v-model.trim="$v.inputValue.$model"
      v-bind:value="inputValue"
      v-on:input="$emit('input', $event.target.value)"

        v-model.trim="$v.inputValue.$model"

    -->
    <b-form-input
      id="input-Dni_EmpFar"
      v-model.trim="$v.inputValue.$model"
      type="text"
      placeholder="Ingresar DNI del Usuario"
      aria-describedby="input-1-live-feedback"
      :state="$v.inputValue.$dirty ? !$v.inputValue.$error : null"
      @input="$emit('input', returnValue)"
    ></b-form-input>

    <ul v-if="$v.inputValue.$anyError" id="parsley-id-7" class="parsley-errors-list filled mb-2">
      <li v-if="!$v.inputValue.required" class="parsley-required">Campo Requerido.</li>
      <li v-if="!$v.inputValue.numeric" class="parsley-required">Solo se aceptan numeros.</li>
      <li v-if="!$v.inputValue.minLength" class="parsley-required">
        Tiene que ser mayor a
        {{ $v.inputValue.$params.minLength.min }} números de longitud.</li
      >
      <li v-if="!$v.inputValue.maxLength" class="parsley-required">
        Tiene que ser menor de
        {{ $v.inputValue.$params.maxLength.max }} números de longitud.</li
      >
    </ul>
  </b-form-group>
</template>

<script>
// import vueAlerts from '@src/components/basicElements/alert'
import { required, minLength, maxLength } from 'vuelidate/lib/validators'

export default {
  name: 'InputDni',
  components: {
    // vueAlerts,
    // Table,Input
  },
  props: ['value'],
  //   props: {
  //     inputValue: {
  //       type: String,
  //       required: true,
  //     },
  //   },

  validations: {
    inputValue: {
      required,
      minLength: minLength(8),
      maxLength: maxLength(8),
    },
  },
  data() {
    return {
      inputValue: 'xxx',
    }
  },

  computed: {
    returnValue: function() {
      // `this` points to the vm instance
      if (this.$v.inputValue.$anyError) {
        return null
      }
      return this.inputValue
    },
  },
  methods: {},
}
</script>
