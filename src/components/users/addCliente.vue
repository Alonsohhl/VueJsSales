<template>
  <div class="container-fluid">
    <vueAlerts :alerts="alerts"></vueAlerts>
    <div class="d-flex justify-content-center">
      <div
        v-show="submitStatus === 'PENDING'"
        class="spinner-border text-success m-2 avatar-lg"
        role="status"
      ></div>
    </div>

    <div class="row">
      <div class="col-xl-8">
        <div class="card">
          <div class="card-body">
            <h2 class="header-title mb-4">{{ labels.title }}</h2>
            <b-form v-if="show" @submit.stop.prevent="onSubmit">
              <b-form-group
                id="input-group-Dni_Cli"
                label="DNI"
                label-for="input-Dni_Cli"
              >
                <b-form-input
                  id="input-Dni_Cli"
                  v-model.trim="$v.form.Dni_Cli.$model"
                  type="text"
                  placeholder="Ingresar DNI del cliente"
                  aria-describedby="input-1-live-feedback"
                  :state="
                    $v.form.Dni_Cli.$dirty ? !$v.form.Dni_Cli.$error : null
                  "
                ></b-form-input>

                <ul
                  v-if="$v.form.Dni_Cli.$anyError"
                  id="parsley-id-7"
                  class="parsley-errors-list filled mb-2"
                >
                  <li v-if="!$v.form.Dni_Cli.required" class="parsley-required"
                    >Campo Requerido.</li
                  >
                  <li v-if="!$v.form.Dni_Cli.numeric" class="parsley-required"
                    >Solo se aceptan numeros.</li
                  >
                  <li
                    v-if="!$v.form.Dni_Cli.minLength"
                    class="parsley-required"
                  >
                    Tiene que tener al menos
                    {{ $v.form.Dni_Cli.$params.minLength.min }} numeros.</li
                  >
                  <li
                    v-if="!$v.form.Dni_Cli.maxLength"
                    class="parsley-required"
                  >
                    Tiene que tener al menos
                    {{ $v.form.Dni_Cli.$params.maxLength.max }} numeros.</li
                  >
                </ul>
              </b-form-group>
              <b-form-group
                id="input-group-Nom_Cli"
                label="Nombre:"
                label-for="input-Nom_Cli"
              >
                <b-form-input
                  id="input-Nom_Cli"
                  v-model.trim="$v.form.Nom_Cli.$model"
                  type="text"
                  placeholder="Ingresar Nombre de Cliente"
                  :state="
                    $v.form.Nom_Cli.$dirty ? !$v.form.Nom_Cli.$error : null
                  "
                ></b-form-input>
                <ul
                  v-if="$v.form.Nom_Cli.$anyError"
                  id="parsley-id-7"
                  class="parsley-errors-list filled mb-2"
                >
                  <li v-if="!$v.form.Nom_Cli.required" class="parsley-required"
                    >Campo Requerido.</li
                  >

                  <li
                    v-if="!$v.form.Nom_Cli.minLength"
                    class="parsley-required"
                  >
                    Tiene que tener al menos
                    {{ $v.form.Nom_Cli.$params.minLength.min }} letras.</li
                  >
                  <li
                    v-if="!$v.form.Nom_Cli.maxLength"
                    class="parsley-required"
                  >
                    Tiene que ser ser menor de
                    {{ $v.form.Nom_Cli.$params.maxLength.max }} letras</li
                  >
                </ul>
              </b-form-group>
              <b-form-group
                id="input-group-App_Cli"
                label="Apellido Paterno:"
                label-for="input-App_Cli"
              >
                <b-form-input
                  id="input-App_Cli"
                  v-model.trim="$v.form.App_Cli.$model"
                  type="text"
                  placeholder="Ingresar apellido paterno"
                  :state="
                    $v.form.App_Cli.$dirty ? !$v.form.App_Cli.$error : null
                  "
                ></b-form-input>
                <ul
                  v-if="$v.form.App_Cli.$anyError"
                  id="parsley-id-7"
                  class="parsley-errors-list filled mb-2"
                >
                  <li v-if="!$v.form.App_Cli.required" class="parsley-required"
                    >Campo Requerido.</li
                  >

                  <li
                    v-if="!$v.form.App_Cli.minLength"
                    class="parsley-required"
                  >
                    Tiene que tener al menos
                    {{ $v.form.App_Cli.$params.minLength.min }} letras.</li
                  >
                  <li
                    v-if="!$v.form.App_Cli.maxLength"
                    class="parsley-required"
                  >
                    Tiene que ser ser menor de
                    {{ $v.form.App_Cli.$params.maxLength.max }} letras.</li
                  >
                </ul>
              </b-form-group>
              <b-form-group
                id="input-group-Apm_Cli"
                label="Apellido Materno:"
                label-for="input-Apm_Cli"
              >
                <b-form-input
                  id="input-Apm_Cli"
                  v-model.trim="$v.form.Apm_Cli.$model"
                  type="text"
                  placeholder="Ingresar Apellido materno"
                  :state="
                    $v.form.Apm_Cli.$dirty ? !$v.form.Apm_Cli.$error : null
                  "
                ></b-form-input>
                <ul
                  v-if="$v.form.Apm_Cli.$anyError"
                  id="parsley-id-7"
                  class="parsley-errors-list filled mb-2"
                >
                  <li v-if="!$v.form.Apm_Cli.required" class="parsley-required"
                    >Campo Requerido.</li
                  >

                  <li
                    v-if="!$v.form.Apm_Cli.minLength"
                    class="parsley-required"
                  >
                    Tiene que tener al menos
                    {{ $v.form.Apm_Cli.$params.minLength.min }} letras.</li
                  >
                  <li
                    v-if="!$v.form.Apm_Cli.maxLength"
                    class="parsley-required"
                  >
                    Tiene que ser ser menor de
                    {{ $v.form.Apm_Cli.$params.maxLength.max }} letras.</li
                  >
                </ul>
              </b-form-group>
              <b-form-group
                id="input-group-Correo_Cli"
                label="Email address:"
                label-for="input-Correo_Cli"
              >
                <b-form-input
                  id="input-Correo_Cli"
                  v-model.trim="$v.form.Correo_Cli.$model"
                  type="email"
                  placeholder="Ingresar Correo Electronico"
                ></b-form-input>
                <ul
                  v-if="$v.form.Correo_Cli.$anyError"
                  id="parsley-id-7"
                  class="parsley-errors-list filled mb-2"
                >
                  <li
                    v-if="!$v.form.Correo_Cli.required"
                    class="parsley-required"
                    >Campo Requerido.</li
                  >

                  <li v-if="!$v.form.Correo_Cli.email" class="parsley-required">
                    Tiene que ser un Email valido.</li
                  >
                </ul>
              </b-form-group>
              <!-- <b-form-group
                id="input-group-Correo_Cli"
                label="Correo Electronico:"
                label-for="input-Correo_Cli"
                description="Apellido Materno"
              >
                <b-form-input
                  id="input-Sexo_Cli"
                  v-model="form.Sexo_Cli"
                  type="text"
                  required
                  placeholder="Ingresar"
                ></b-form-input>
              </b-form-group> -->

              <b-form-group
                id="input-group-Sexo_Cli"
                label="Sexo:"
                label-for="input-Sexo_Cli"
              >
                <b-form-select
                  id="input-Sexo_Cli"
                  v-model="form.Sexo_Cli.value"
                  :options="form.Sexo_Cli.options"
                  type="text"
                ></b-form-select>
              </b-form-group>

              <b-button type="submit" variant="primary">Submit</b-button>
              <b-button type="reset" variant="danger">Reset</b-button>
            </b-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import vueAlerts from '../basicElements/alert'
import axios from 'axios'
import { API_URL } from '@src/app.config'

import {
  required,
  minLength,
  maxLength,
  numeric,
  email,
} from 'vuelidate/lib/validators'

export default {
  name: 'CliInsert',
  props: ['id'],
  components: {
    vueAlerts,
    // Table,Input
  },
  data() {
    return {
      form: {
        Dni_Cli: '',
        Nom_Cli: '',
        App_Cli: '',
        Apm_Cli: '',
        Correo_Cli: '',
        Sexo_Cli: {
          value: 'masculino',
          options: [
            { value: 'masculino', text: 'Masculino' },
            { value: 'femenino', text: 'Femenino' },
          ],
        },
      },
      labels: {
        title: 'Ingresar Cliente',
      },

      show: true,

      alerts: [],
      submitStatus: null,
    }
  },
  created() {
    if (this.$route.params.mode === 'UPDATE' && this.$route.params.id) {
      this.labels.title = 'Actualizar Cliente'

      axios
        .get(API_URL + 'clients/find', {
          params: {
            id: 3,
          },
        })
        .then((response) => {
          this.form.Dni_Cli = response.data[0].Dni_Cli
          console.log('TCL: created -> response', response)
          this.form.Nom_Cli = response.data[0].Nom_Cli
          this.form.Apm_Cli = response.data[0].Apm_Cli
          this.form.App_Cli = response.data[0].App_Cli
          this.form.Correo_Cli = response.data[0].Correo_Cli
          this.form.Sexo_Cli.value = response.data[0].Sexo_Cli

          // this.categories = response.data
          // this.categories.forEach(function(element) {
          //   element.editFlag = false
          //   element.actionOptions = 'default'
          // })
          // this.tableCatIsBusy = false
        })
        .catch(function(error) {
          return error
          // console.log('error con Categorias ' + error)
        })
    }
  },
  validations: {
    form: {
      Dni_Cli: {
        required,
        minLength: minLength(8),
        maxLength: maxLength(8),
        numeric,
      },
      Nom_Cli: {
        required,
        minLength: minLength(2),
        maxLength: maxLength(20),
      },
      App_Cli: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(20),
      },
      Apm_Cli: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(20),
      },
      Correo_Cli: {
        required,
        email,
      },
      Sexo_Cli: {
        required,
      },
    },
  },
  methods: {
    onSubmit(evt) {
      this.$v.form.$touch()
      if (this.$v.form.$anyError) {
        return
      }
      // evt.preventDefault()
      // alert(JSON.stringify(this.form))

      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        this.submitStatus = 'PENDING'
        axios
          .post(API_URL + 'clients/insert', {
            cliente: {
              Dni_Cli: this.form.Dni_Cli,
              Nom_Cli: this.form.Nom_Cli,
              App_Cli: this.form.App_Cli,
              Apm_Cli: this.form.Apm_Cli,
              Correo_Cli: this.form.Correo_Cli,
              Sexo_Cli: this.form.Sexo_Cli.value,
            },
          })
          .then((response) => {
            console.dir(response)
            setTimeout((response) => {
              console.log('ingresado')
              //   currentObj.output = response
              this.submitStatus = 'OK'
              // Object.assign(this.$data, this.$options.data())
              // console.Object
              this.form.Dni_Cli = ''
              this.form.Nom_Cli = ''
              this.form.App_Cli = ''
              this.form.Apm_Cli = ''
              this.form.Correo_Cli = ''
              this.form.Sexo_Cli.value = 'masculino'
              this.$v.$reset()
            }, 500)
            // this.submitStatus = 'OK'
            //   currentObj.output = response.data;
          })
          .catch((err) => {
            if (err.response && err.response.data) {
              console.log(err.response.data)
            }
            this.submitStatus = 'ERROR'
            console.log('error x')
            console.log({ err })
          })
      }
    },
    onSubmitUpdate(evt) {
      this.$v.form.$touch()
      if (this.$v.form.$anyError) {
        return
      }
      // evt.preventDefault()
      // alert(JSON.stringify(this.form))

      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        this.submitStatus = 'PENDING'
        axios
          .post(API_URL + 'clients/insert', {
            cliente: {
              Dni_Cli: this.form.Dni_Cli,
              Nom_Cli: this.form.Nom_Cli,
              App_Cli: this.form.App_Cli,
              Apm_Cli: this.form.Apm_Cli,
              Correo_Cli: this.form.Correo_Cli,
              Sexo_Cli: this.form.Sexo_Cli.value,
            },
          })
          .then((response) => {
            console.dir(response)
            setTimeout((response) => {
              console.log('ingresado')
              //   currentObj.output = response
              this.submitStatus = 'OK'
              // Object.assign(this.$data, this.$options.data())
              // console.Object
              this.form.Dni_Cli = ''
              this.form.Nom_Cli = ''
              this.form.App_Cli = ''
              this.form.Apm_Cli = ''
              this.form.Correo_Cli = ''
              this.form.Sexo_Cli.value = 'masculino'
              this.$v.$reset()
            }, 500)
            // this.submitStatus = 'OK'
            //   currentObj.output = response.data;
          })
          .catch((err) => {
            if (err.response && err.response.data) {
              console.log(err.response.data)
            }
            this.submitStatus = 'ERROR'
            console.log('error x')
            console.log({ err })
          })
      }
    },
    onReset(evt) {
      evt.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
  },
}
</script>

<style></style>
