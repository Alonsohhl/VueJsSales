<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="card-body">
          <h2 class="header-title mb-4">Comprobante de Venta </h2>

          <form disabled @submit.stop.prevent="onSubmit">
            <div class="clearfix">
              <!-- <div class="float-left">
                <img src="assets/images/logo-dark.png" alt="" height="20" />
              </div> -->
              <div class="float-left">
                <h2 class="pl-3 m-0">COMPROBANTE</h2>
              </div>
              <div class="float-right">
                <h2 class="pr-3 m-0">{{ Invoice.Ser_Boleta }} - {{ Invoice.Num_Boleta }}</h2>
              </div>
            </div>

            <div class="row">
              <div class="col-md-6">
                <div class="mt-3">
                  <p
                    ><b
                      >Cliente:
                      <h4
                        >{{ Invoice.t01fcli.Nom_Cli }} {{ Invoice.t01fcli.App_Cli }} {{ Invoice.t01fcli.Apm_Cli }}</h4
                      ></b
                    >
                  </p>

                  <p class="text-muted"
                    >Muchas gracias porque sigues comprando nuestros productos. Nuestra empresa promete ofrecerle
                    productos de alta calidad, así como un excelente servicio al cliente para cada transacción.
                  </p>
                </div> </div
              ><!-- end col -->
              <div class="col-md-4 offset-md-2">
                <div class="mt-3 float-right">
                  <p class="m-b-10"
                    ><strong>Fec Emisión : </strong>
                    <span class="float-right"> &nbsp;&nbsp;&nbsp;&nbsp; {{ Invoice.Fecha_Boleta | toDate }}</span></p
                  >
                  <p class="m-b-10"
                    ><strong>Fec Vencimiento : </strong>
                    <span class="float-right">
                      &nbsp;&nbsp;&nbsp;&nbsp; {{ Invoice.Fecha_Venc_Boleta | toDate }}</span
                    ></p
                  >
                  <p class="m-b-10"
                    ><strong>Order Status : </strong>
                    <span class="float-right"><span class="badge badge-danger">Pago Pendiente</span></span></p
                  >
                </div> </div
              ><!-- end col -->
            </div>

            <div class="row">
              <div class="col-12">
                <div class="table-responsive">
                  <b-table :items="Invoice.detalleItems" :fields="form.table.fields" class="table mt-4 table-centered">
                    <template v-slot:cell(line_medi)="row">
                      {{ ++row.index }}
                    </template>
                    <template v-slot:cell(Precio_Unitario)="row">
                      {{ row.item.Precio_Unitario | toCurrency }}
                    </template>
                    <template v-slot:cell(Importe_Total)="row">
                      {{ row.item.Importe_Total | toCurrency }}
                    </template>
                  </b-table>
                </div>
                <!-- end table-responsive -->
              </div>
              <!-- end col -->
            </div>

            <div class="row">
              <div class="col-sm-6">
                <div class="clearfix pt-5">
                  <h6 class="text-muted">Notas:</h6>

                  <small class="text-muted">
                    Todas las cuentas deben pagarse dentro de los 7 días posteriores a la recepción de la factura. A
                    pagar con cheque o tarjeta de crédito o pago directo en línea. Si la cuenta no se paga dentro de los
                    7 días, los detalles de los créditos proporcionados como confirmación del trabajo realizado se
                    cobrarán la tarifa acordada indicada anteriormente.
                  </small>
                </div>
              </div>
              <!-- end col -->
              <div class="col-sm-6">
                <div class="float-right">
                  <p
                    ><b>Sub-total:</b> <span class="float-right">{{ Invoice.Sub_Total | toCurrency }}</span></p
                  >
                  <p
                    ><b>IGV (18%):</b>
                    <span class="float-right">
                      &nbsp;&nbsp;&nbsp; {{ (Invoice.Sub_Total * 0.18) | toCurrency }}</span
                    ></p
                  >
                  <h3 class="float-right">Total:{{ Invoice.Precio_Total | toCurrency }}</h3>
                </div>
                <div class="clearfix"></div>
              </div>
              <!-- end col -->
            </div>

            <div class="mt-4 mb-1">
              <div class="text-right d-print-none">
                <a href="javascript:window.print()" class="btn btn-primary waves-effect waves-light"
                  ><i class="mdi mdi-printer mr-1"></i> Imprimir</a
                >
                <router-link tag="a" class="btn btn-info waves-effect waves-light" :to="{ name: 'displaySales' }"
                  >Volver</router-link
                >
              </div>
            </div>

            <!-- <div class="form-row align-items-center mb-2">
              <div class="col-2">
                <label for="product-reference">
                  Codigo
                </label>
                <b-form-input v-model="Invoice.client.id" placeholder="Cod Usuario" disabled></b-form-input>
              </div>
              <div class="col-2">
                <label for="product-reference">
                  DNI
                </label>
                <b-form-input
                  v-model="Invoice.client.Dni_Cli"
                  placeholder="Dni"
                  :disabled="form.tipClient.value === 'REGISTRADO'"
                ></b-form-input>
              </div>
              <div class="col-6">
                <label for="product-reference">
                  Nombre de Cliente
                </label>
                <b-form-input
                  v-model="Invoice.client.Nom_Cli"
                  placeholder="Nombre de Cliente"
                  :disabled="form.tipClient.value === 'REGISTRADO'"
                ></b-form-input>
              </div>
            </div>

            <div class="form-row align-items-center mb-2">
              <div class="col-auto">
                <label for="product-price">
                  Fecha de Ingreso
                  <span class="text-danger">*</span>
                </label>
                <v-date-picker
                  v-model="Invoice.DateCreacion"
                  color="red"
                  is-dark
                  :input-props="{
                    class: 'form-control',
                    readonly: true,
                  }"
                />
              </div>
              <div class="col-auto">
                <label for="product-price">
                  Fecha de Vencimiento
                  <span class="text-danger">*</span>
                </label>
                <v-date-picker
                  v-model="Invoice.DateVencimiento"
                  color="red"
                  is-dark
                  :input-props="{
                    class: 'form-control',
                    readonly: true,
                  }"
                />
              </div>
            </div> -->

            <!-- <div class="row">
              <div class="col-12">
                <div class="card-box">
                  <b-table
                    striped
                    hover
                    :items="Invoice.detalleItems"
                    :fields="form.itemsFieldsTable"
                    class="table table-centered mb-0"
                    custom-foot
                  >
                    <template v-slot:cell(Cod_Medi)="row">
                      <b-form-input
                        v-model="Invoice.detalleItems[row.index].id"
                        placeholder="Cod"
                        bounce="500"
                        class="tabledit-input form-control form-control-sm"
                        :state="form.itemsFieldsTable[row.index].state"
                        @input="findProductInfo(row.index)"
                      ></b-form-input>
                    </template>

                    <template v-slot:cell(Cant_Dmed)="row">
                      <b-form-input
                        v-model="Invoice.detalleItems[row.index].Cant_Dmed"
                        placeholder="Cant."
                        @input="calcImpTotal(row.index)"
                      ></b-form-input>
                    </template>

                    <template v-slot:custom-foot="">
                      <b-tr>
                        <b-th :colspan="3" sticky-column>Resultados</b-th>
                        <b-th :colspan="2" class="text-right" sticky-column>Importe Bruto:</b-th>
                        <b-th :colspan="1">{{ Invoice.subTotal | toCurrency }} </b-th>
                      </b-tr>
                      <b-tr>
                        <b-th :colspan="3" sticky-column></b-th>
                        <b-th :colspan="2" class="text-right" sticky-column>con IGV:</b-th>
                        <b-th :colspan="1">{{ Invoice.igvTotal | toCurrency }} </b-th>
                      </b-tr>
                      <b-tr>
                        <b-th :colspan="3" sticky-column></b-th>
                        <b-th :colspan="2" class="text-right" sticky-column>con IGV:</b-th>
                        <b-th :colspan="1">{{ Invoice.precioTotal | toCurrency }} </b-th>
                      </b-tr>
                    </template>
                  </b-table>
                  <button type="submit" class="btn btn-primary waves-effect waves-light m-2 float-right"
                    >Ingresar Producto</button
                  >
                </div>
              </div>

              Documento creado por: {{ currentUser.name }}
            </div> -->
          </form>
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
import { API_URL } from '@src/app.config'
// import Swal from 'sweetalert2'

export default {
  name: 'ProdDsp',
  props: {
    user: {
      type: Object,
      required: false,
      default: () => ({}),
    },
  },

  data() {
    return {
      form: {
        table: {
          fields: [
            { key: 'line_medi', label: '#', thStyle: 'width: 5%' },
            { key: 'Cod_Medi', label: 'Cod', thStyle: 'width: 100px' },
            { key: 'Nom_Medi', label: 'Nombre del Producto' },
            { key: 'Cant_Dmed', label: 'Cantidad', thStyle: 'width: 100px' },
            { key: 'Precio_Unitario', label: 'Val. Uni.' },
            { key: 'Importe_Total', label: 'Val. Total', thClass: 'text-right', tdClass: 'text-right' },
          ],
        },
      },
      Invoice: {
        id: null,
        Ser_Boleta: '',
        Num_Boleta: '',
        Cod_Sucur: null,
        Fecha_Boleta: '',
        Fecha_Venc_Boleta: '',
        Sub_Total: null,
        IGV: 18,
        Precio_Total: null,
        createdAt: '',
        updatedAt: '',
        id_Cliente: null,
        id_Usuario: null,
        t01fcli: {
          Nom_Cli: '',
          App_Cli: '',
          Apm_Cli: '',
        },

        detalleItems: [
          {
            line_medi: 1,
            Cod_Medi: null,
            Nom_Medi: null,
            Cant_Dmed: null,
            Precio_Unitario: null,
            Importe_Total: null,
            valid: false,
          },
          {
            line_medi: 2,
            Cod_Medi: null,
            Nom_Medi: null,
            Cant_Dmed: null,
            Precio_Unitario: null,
            Importe_Total: null,
            valid: false,
          },
          {
            line_medi: 3,
            Cod_Medi: null,
            Nom_Medi: null,
            Cant_Dmed: null,
            Precio_Unitario: null,
            Importe_Total: null,
            valid: false,
          },
          {
            line_medi: 4,
            Cod_Medi: null,
            Nom_Medi: null,
            Cant_Dmed: null,
            Precio_Unitario: null,
            Importe_Total: null,
            valid: false,
          },
          {
            line_medi: 5,
            Cod_Medi: null,
            Nom_Medi: null,
            Cant_Dmed: null,
            Precio_Unitario: null,
            Importe_Total: null,
            valid: false,
          },
        ],
      },
    }
  },
  created: function () {
    axios
      .get(`${API_URL}ventas/findInvoice?id=${this.$route.params.id}`)
      .then((reqInvoice) => {
        console.log(reqInvoice)
        if (!reqInvoice) throw Error('Documento Invalido')
        this.Invoice = reqInvoice.data
        this.Invoice.detalleItems = reqInvoice.data.T01FCBODETs
      })
      .catch((err) => {
        console.log(err)
        this.$router.push({ name: '404' })
      })
  },

  // a computed getter
}
</script>
