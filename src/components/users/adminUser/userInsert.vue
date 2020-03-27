<template>
  <div class="container-fluid">
    <vueAlerts :alerts="alerts"></vueAlerts>
    <!-- <div class="d-flex justify-content-center">
      <b-alert variant="success" show>Success Alert</b-alert>
      <div
        v-show="submitStatus === 'PENDING'"
        class="spinner-border text-success m-2 avatar-lg"
        role="status"
      ></div>
    </div> -->
    <!-- class="d-flex justify-content-center" -->

    <div class="row">
      <div class="col-xl-8">
        <div class="card">
          <div class="card-body">
            <!-- <h2 class="header-title mb-4">{{ labels.title }}</h2> -->
            <b-form v-if="show" @submit.stop.prevent="onSubmit">
              <div v-if="submitStatus === 'USER_INSERT'" class="row center d-flex justify-content-center">
                <b-alert variant="success" :show="3">
                  Usuario Ingresado
                </b-alert>
              </div>
              <div v-if="submitStatus === 'PENDING'" class="row center d-flex justify-content-center">
                <b-alert variant="success" show>
                  cargando
                  <div class="spinner-border text-success ml-3 avatar-xs" role="status"></div>
                </b-alert>
              </div>
              <b-form-group id="input-group-Dni_EmpFar" label="DNI" label-for="input-Dni_EmpFar">
                <b-form-input
                  id="input-Dni_EmpFar"
                  v-model.trim="$v.form.Dni_EmpFar.$model"
                  type="text"
                  placeholder="Ingresar DNI del Usuario"
                  aria-describedby="input-1-live-feedback"
                  :state="$v.form.Dni_EmpFar.$dirty ? !$v.form.Dni_EmpFar.$error : null"
                ></b-form-input>

                <ul v-if="$v.form.Dni_EmpFar.$anyError" id="parsley-id-7" class="parsley-errors-list filled mb-2">
                  <li v-if="!$v.form.Dni_EmpFar.required" class="parsley-required">Campo Requerido.</li>
                  <li v-if="!$v.form.Dni_EmpFar.numeric" class="parsley-required">Solo se aceptan numeros.</li>
                  <li v-if="!$v.form.Dni_EmpFar.minLength" class="parsley-required">
                    Tiene que ser mayor a
                    {{ $v.form.Dni_EmpFar.$params.minLength.min }} números de longitud.</li
                  >
                  <li v-if="!$v.form.Dni_EmpFar.maxLength" class="parsley-required">
                    Tiene que ser menor de
                    {{ $v.form.Dni_EmpFar.$params.maxLength.max }} números de longitud.</li
                  >
                </ul>
              </b-form-group>
              <b-form-group id="input-group-Nom_EmpFar" label="Nombre:" label-for="input-Nom_EmpFar">
                <b-form-input
                  id="input-Nom_EmpFar"
                  v-model.trim="$v.form.Nom_EmpFar.$model"
                  type="text"
                  placeholder="Ingresar Nombre de Cliente"
                  :state="$v.form.Nom_EmpFar.$dirty ? !$v.form.Nom_EmpFar.$error : null"
                ></b-form-input>
                <ul v-if="$v.form.Nom_EmpFar.$anyError" id="parsley-id-7" class="parsley-errors-list filled mb-2">
                  <li v-if="!$v.form.Nom_EmpFar.required" class="parsley-required">Campo Requerido.</li>

                  <li v-if="!$v.form.Nom_EmpFar.minLength" class="parsley-required">
                    Tiene que tener al menos
                    {{ $v.form.Nom_EmpFar.$params.minLength.min }} letras.</li
                  >
                  <li v-if="!$v.form.Nom_EmpFar.maxLength" class="parsley-required">
                    Tiene que ser ser menor de
                    {{ $v.form.Nom_EmpFar.$params.maxLength.max }} letras</li
                  >
                </ul>
              </b-form-group>
              <b-form-group id="input-group-App_EmpFar" label="Apellido Paterno:" label-for="input-App_EmpFar">
                <b-form-input
                  id="input-App_EmpFar"
                  v-model.trim="$v.form.App_EmpFar.$model"
                  type="text"
                  placeholder="Ingresar apellido paterno"
                  :state="$v.form.App_EmpFar.$App_EmpFar ? !$v.form.App_EmpFar.$error : null"
                ></b-form-input>
                <ul v-if="$v.form.App_EmpFar.$anyError" id="parsley-id-7" class="parsley-errors-list filled mb-2">
                  <li v-if="!$v.form.App_EmpFar.required" class="parsley-required">Campo Requerido.</li>

                  <li v-if="!$v.form.App_EmpFar.minLength" class="parsley-required">
                    Tiene que tener al menos
                    {{ $v.form.App_EmpFar.$params.minLength.min }} letras.</li
                  >
                  <li v-if="!$v.form.App_EmpFar.maxLength" class="parsley-required">
                    Tiene que ser ser menor de
                    {{ $v.form.App_EmpFar.$params.maxLength.max }} letras.</li
                  >
                </ul>
              </b-form-group>
              <b-form-group id="input-group-Apm_EmpFar" label="Apellido Materno:" label-for="input-Apm_EmpFar">
                <b-form-input
                  id="input-Apm_EmpFar"
                  v-model.trim="$v.form.Apm_EmpFar.$model"
                  type="text"
                  placeholder="Ingresar Apellido materno"
                  :state="$v.form.Apm_EmpFar.$dirty ? !$v.form.Apm_EmpFar.$error : null"
                ></b-form-input>
                <ul v-if="$v.form.Apm_EmpFar.$anyError" id="parsley-id-7" class="parsley-errors-list filled mb-2">
                  <li v-if="!$v.form.Apm_EmpFar.required" class="parsley-required">Campo Requerido.</li>

                  <li v-if="!$v.form.Apm_EmpFar.minLength" class="parsley-required">
                    Tiene que tener al menos
                    {{ $v.form.Apm_EmpFar.$params.minLength.min }} letras.</li
                  >
                  <li v-if="!$v.form.Apm_EmpFar.maxLength" class="parsley-required">
                    Tiene que ser ser menor de
                    {{ $v.form.Apm_EmpFar.$params.maxLength.max }} letras.</li
                  >
                </ul>
              </b-form-group>
              <b-form-group id="input-group-Correo_EmpFar" label="Correo Electronico:" label-for="input-Correo_EmpFar">
                <b-form-input
                  id="input-Correo_EmpFar"
                  v-model.trim="$v.form.Correo_EmpFar.$model"
                  type="email"
                  placeholder="Ingresar Correo Electronico"
                ></b-form-input>
                <ul v-if="$v.form.Correo_EmpFar.$anyError" id="parsley-id-7" class="parsley-errors-list filled mb-2">
                  <li v-if="!$v.form.Correo_EmpFar.required" class="parsley-required">Campo Requerido.</li>

                  <li v-if="!$v.form.Correo_EmpFar.email" class="parsley-required"> Tiene que ser un Email valido.</li>
                </ul>
              </b-form-group>
              <b-form-group id="input-group-Dir_EmpFar" label="Dirección Empleado:" label-for="input-Dir_EmpFar">
                <b-form-input
                  id="input-Dir_EmpFar"
                  v-model.trim="$v.form.Dir_EmpFar.$model"
                  type="text"
                  placeholder="Ingresar dirección"
                  :state="$v.form.Dir_EmpFar.$dirty ? !$v.form.Dir_EmpFar.$error : null"
                >
                </b-form-input>
                <ul v-if="$v.form.Dir_EmpFar.$anyError" id="parsley-id-7" class="parsley-errors-list filled mb-2">
                  <li v-if="!$v.form.Dir_EmpFar.required" class="parsley-required">Campo Requerido.</li>
                  <li v-if="!$v.form.Dir_EmpFar.minLength" class="parsley-required">
                    Tiene que mas de
                    {{ $v.form.Dir_EmpFar.$params.minLength.min }} letras.</li
                  >
                  <li v-if="!$v.form.Dir_EmpFar.maxLength" class="parsley-required">
                    Tiene que ser ser menor de
                    {{ $v.form.Dir_EmpFar.$params.maxLength.max }} letras.</li
                  >
                </ul>
              </b-form-group>

              <b-form-group id="input-group-Pass_Usu" label="Contraseña:" label-for="input-Pass_Usu">
                <b-form-input
                  id="input-Pass_Usu"
                  v-model.trim="$v.form.Pass_Usu.$model"
                  type="password"
                  placeholder="Ingresar contraseña"
                  :state="$v.form.Pass_Usu.$dirty ? !$v.form.Pass_Usu.$error : null"
                >
                </b-form-input>
                <ul v-if="$v.form.Pass_Usu.$anyError" id="parsley-id-7" class="parsley-errors-list filled mb-2">
                  <li v-if="!$v.form.Pass_Usu.required" class="parsley-required">Campo Requerido.</li>
                  <li v-if="!$v.form.Pass_Usu.minLength" class="parsley-required">
                    Tiene que mas de
                    {{ $v.form.Pass_Usu.$params.minLength.min }} letras.</li
                  >
                  <li v-if="!$v.form.Pass_Usu.maxLength" class="parsley-required">
                    Tiene que ser ser menor de
                    {{ $v.form.Pass_Usu.$params.maxLength.max }} letras.</li
                  >
                </ul>
              </b-form-group>

              <b-form-group id="input-group-Nom_Usu" label="Usuario de Sistema:" label-for="input-Nom_Usu">
                <b-form-input
                  id="input-Nom_Usu"
                  v-model.trim="$v.form.Nom_Usu.$model"
                  type="text"
                  placeholder="Ingresar Nombre de Usuario"
                  :state="$v.form.Nom_Usu.$dirty ? !$v.form.Nom_Usu.$error : null"
                >
                </b-form-input>
                <ul v-if="$v.form.Nom_Usu.$anyError" id="parsley-id-7" class="parsley-errors-list filled mb-2">
                  <li v-if="!$v.form.Nom_Usu.required" class="parsley-required">Campo Requerido.</li>
                  <li v-if="!$v.form.Nom_Usu.minLength" class="parsley-required">
                    Tiene que tener mas de
                    {{ $v.form.Nom_Usu.$params.minLength.min }} caracteres.</li
                  >
                  <li v-if="!$v.form.Nom_Usu.maxLength" class="parsley-required">
                    Tiene que ser ser menor de
                    {{ $v.form.Nom_Usu.$params.maxLength.max }} caracteres.</li
                  >
                </ul>
              </b-form-group>
              <b-form-group id="input-group-Pass_Usu" label="Contraseña:" label-for="input-Pass_Usu">
                <b-form-input
                  id="input-Pass_Usu"
                  v-model.trim="$v.form.Pass_Usu.$model"
                  type="password"
                  placeholder="Ingresar contraseña"
                  :state="$v.form.Pass_Usu.$dirty ? !$v.form.Pass_Usu.$error : null"
                >
                </b-form-input>
                <ul v-if="$v.form.Pass_Usu.$anyError" id="parsley-id-7" class="parsley-errors-list filled mb-2">
                  <li v-if="!$v.form.Pass_Usu.required" class="parsley-required">Campo Requerido.</li>
                  <li v-if="!$v.form.Pass_Usu.minLength" class="parsley-required">
                    Tiene que mas de
                    {{ $v.form.Pass_Usu.$params.minLength.min }} letras.</li
                  >
                  <li v-if="!$v.form.Pass_Usu.maxLength" class="parsley-required">
                    Tiene que ser ser menor de
                    {{ $v.form.Pass_Usu.$params.maxLength.max }} letras.</li
                  >
                </ul>
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
import vueAlerts from '@src/components/basicElements/alert'
import axios from 'axios'
import { API_URL } from '@src/app.config'

import { required, minLength, maxLength, numeric, email } from 'vuelidate/lib/validators'

export default {
  name: 'CliInsert',
  components: {
    vueAlerts,
    // Table,Input
  },
  props: ['id'],
  data() {
    return {
      form: {
        Cod_Sucur: '',
        Dni_EmpFar: '',
        Nom_Usu: '',
        Nom_EmpFar: '',
        App_EmpFar: '',
        Apm_EmpFar: '',
        Tel_EmpFar: '',
        Dir_EmpFar: '',
        Correo_EmpFar: '',
        Pass_Usu: '',
      },
      labels: {
        title: 'Ingresar Administrador',
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
      Nom_Usu: {
        required,
        minLength: minLength(6),
        maxLength: maxLength(10),
      },
      Nom_EmpFar: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(20),
      },
      App_EmpFar: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(20),
      },
      Apm_EmpFar: {
        required,
        minLength: minLength(3),
        maxLength: maxLength(20),
      },
      Tel_EmpFar: {
        minLength: minLength(9),
        maxLength: maxLength(9),
      },
      Dir_EmpFar: {
        required,
        minLength: minLength(5),
        maxLength: maxLength(50),
      },
      Correo_EmpFar: {
        required,
        email,
      },
      Dni_EmpFar: {
        required,
        numeric,
        minLength: minLength(8),
        maxLength: maxLength(8),
      },
      Pass_Usu: {
        required,
        minLength: minLength(5),
        maxLength: maxLength(20),
      },
    },
  },
  methods: {
    onSubmit(evt) {
      this.$v.form.$touch()
      console.log('x')
      if (this.$v.form.$anyError) {
        console.dir(this.$v.form.$error)
        return
      }
      console.log('y')
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        this.submitStatus = 'PENDING'
        axios
          .post(API_URL + 'users/register', {
            user: {
              Cod_Sucur: '',
              Dni_EmpFar: this.form.Dni_EmpFar,
              Nom_EmpFar: this.form.Nom_EmpFar,
              App_EmpFar: this.form.App_EmpFar,
              Apm_EmpFar: this.form.Apm_EmpFar,
              Dir_EmpFar: this.form.Dir_EmpFar,
              Correo_EmpFar: this.form.Correo_EmpFar,
              Nom_Usu: this.form.Nom_Usu,
              Pass_Usu: this.form.Pass_Usu,
            },
          })
          .then((response) => {
            console.dir(response)
            setTimeout((response) => {
              this.submitStatus = 'USER_INSERT'
              setTimeout(() => {
                this.submitStatus = ''
              }, 3000)
              this.form.Dni_EmpFar = ''
              this.form.Nom_EmpFar = ''
              this.form.App_EmpFar = ''
              this.form.Apm_EmpFar = ''
              this.form.Dir_EmpFar = ''
              this.form.Correo_EmpFar = ''
              this.form.Nom_Usu = ''
              this.form.Pass_Usu = ''
              this.$v.$reset()
            }, 500)
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
