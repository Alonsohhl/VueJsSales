<template>
  <div class="row">
    <div class="col-md-12">
      <div class="card">
        <div class="card-body">
          <h2 class="header-title mb-4">Ingreso de Venta</h2>

          <!-- <p class="typo__p" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p> -->
          <div class="d-flex justify-content-center">
            <div
              v-show="submitStatus === 'PENDING'"
              class="spinner-border text-success m-2 avatar-lg"
              role="status"
            ></div>
          </div>
          <div
            v-show="submitStatus === 'OK'"
            class="alert alert-success"
            role="alert"
          >
            <i class="mdi mdi-check-all mr-2"></i> Producto ingresado
            <strong>correctamente!</strong>
          </div>

          <form
            v-show="submitStatus !== 'PENDING'"
            action="/something"
            method="post"
            :disabled="0"
            @submit="checkForm"
          >
            <div
              v-if="submitStatus === 'ERROR'"
              class="alert alert-danger bg-danger text-white border-0"
              role="alert"
            >
              Los campos no son
              <strong>validos</strong>
            </div>
            <h5 class="text-uppercase bg-light p-2 mt-0 mb-3">Cliente</h5>
            <div class="form-row mb-1">
              <div class="col-auto">
                <label for="product-reference">
                  Seleccionar Tipo de Cliente
                  <span class="text-danger">*</span>
                </label>
                <!-- <select id="inputState" class="form-control">  @change="onChangeCat"  -->
                <select
                  id="inputState"
                  v-model="tipClient"
                  class="form-control"
                  tabindex="12"
                >
                  <!-- <option selected >Choose</option> -->
                  <option value="0">Sin codigo</option>
                  <option value="1">Con condigo</option>
                </select>

                <ul
                  v-if="$v.selectedCat.$anyDirty && !$v.selectedCat.required"
                  id="parsley-id-7"
                  class="parsley-errors-list filled mb-2"
                >
                  <li class="parsley-required">Requerido.</li>
                </ul>
              </div>
              <div class="col-3">
                <label for="product-reference">
                  Nro. Doc
                  <span class="text-danger">*</span>
                </label>
                <input
                  id="cliDoc"
                  v-model.trim="cliDoc"
                  type="string"
                  class="form-control"
                  placeholder="Nro. Doc"
                />
              </div>
              <div class="col-6">
                <label for="product-reference">
                  Nombre de cliente
                  <span class="text-danger">*</span>
                </label>
                <input
                  id="cliDoc"
                  v-model.trim="cliDoc"
                  type="string"
                  class="form-control"
                  placeholder="Nombre de Cliente"
                  :disabled="tipClient === '1'"
                />
              </div>
            </div>
            <!-- <ul class="parsley-errors-list filled mb-2" id="parsley-id-7"><li class="parsley-required">This value is required.</li></ul> -->

            <div class="form-row align-items-center mb-2">
              <div class="table-responsive">
                <table id="btn-editable" class="table table-centered mb-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Codigo</th>
                      <th>Nombre</th>
                      <th>Cantidad</th>
                      <th>Descuento</th>
                      <th>Total</th>

                      <th class="tabledit-toolbar-column"></th
                    ></tr>
                  </thead>

                  <tbody>
                    <tr
                      v-for="(invoiceProduct, index) in invoiceProducts"
                      :key="invoiceProduct.id"
                      :title="invoiceProduct.Nom_Medi"
                    >
                      <td>
                        <span class="tabledit-span tabledit-identifier">{{
                          index + 1
                        }}</span>
                        <input
                          class="tabledit-input tabledit-identifier"
                          type="hidden"
                          name="id"
                          value="1"
                          disabled=""
                        />
                      </td>
                      <!-- <td class="tabledit-view-mode">
                              <span class="tabledit-span">
                                <input
                                  v-model.trim="invoiceProduct.id"
                                  type="string"
                                  class="form-control"
                                  id="cliDoc"
                                  placeholder="Codigo del Producto"
                                  :disabled="tipClient === '1'"
                                />

                              </span>
                            </td> -->
                      <td class="tabledit-view-mode">
                        <!-- eslint-disable -->
                        <span class="tabledit-span">
                          <vue-bootstrap-typeahead
                            :data="autoCompleteProducts"
                            v-model="autoCompleteProdQuery"
                            size="lg"
                            :serializer="(s) => s.text"
                            placeholder="Codigo o Descripcion del Producto"
                            @hit="selectedAddress = $event"
                          />
                        </span>
                        <!-- eslint-enable -->
                      </td>
                      <td>
                        <span class="tabledit-span tabledit-identifier">{{
                          index
                        }}</span>
                        <input
                          class="tabledit-input tabledit-identifier"
                          type="hidden"
                          name="id"
                          value="1"
                          disabled=""
                        />
                      </td>
                    </tr>

                    <tr id="1">
                      <td
                        ><span class="tabledit-span tabledit-identifier">1</span
                        ><input
                          class="tabledit-input tabledit-identifier"
                          type="hidden"
                          name="id"
                          value="1"
                          disabled=""
                      /></td>
                      <td class="tabledit-view-mode"
                        ><span class="tabledit-span">
                          <input
                            id="cliDoc"
                            v-model.trim="cliDoc"
                            type="string"
                            class="form-control"
                            placeholder="Codigo del Producto"
                            :disabled="tipClient === '1'"
                          />

                          Tiger Nixon</span
                        ><input
                          class="tabledit-input form-control form-control-sm"
                          type="text"
                          name="col1"
                          value="Tiger Nixon"
                          style="display: none;"
                          disabled=""
                      /></td>

                      <td class="tabledit-view-mode"
                        ><span class="tabledit-span">System Architect</span
                        ><input
                          class="tabledit-input form-control form-control-sm"
                          type="text"
                          name="col2"
                          value="System Architect"
                          style="display: none;"
                          disabled=""
                      /></td>
                      <td class="tabledit-view-mode"
                        ><span class="tabledit-span">Edinburgh</span
                        ><input
                          class="tabledit-input form-control form-control-sm"
                          type="text"
                          name="col3"
                          value="Edinburgh"
                          style="display: none;"
                          disabled=""
                      /></td>
                      <td class="tabledit-view-mode"
                        ><span class="tabledit-span">61</span
                        ><input
                          class="tabledit-input form-control form-control-sm"
                          type="text"
                          name="col4"
                          value="61"
                          style="display: none;"
                          disabled=""
                      /></td>
                      <td>2011/04/25</td>
                      <td class="tabledit-view-mode"
                        ><span class="tabledit-span">$320,800</span
                        ><input
                          class="tabledit-input form-control form-control-sm"
                          type="text"
                          name="col6"
                          value="$320,800"
                          style="display: none;"
                          disabled=""
                      /></td>
                      <td style=" width: 1%;white-space: nowrap;"
                        ><div
                          class="tabledit-toolbar btn-toolbar"
                          style="text-align: left;"
                        >
                          <div
                            class="btn-group btn-group-sm"
                            style="float: none;"
                            ><button
                              type="button"
                              class="tabledit-edit-button btn btn-success"
                              style="float: none;"
                              ><span class="mdi mdi-pencil"></span></button
                          ></div> </div></td
                    ></tr>
                    <tr id="2">
                      <td
                        ><span class="tabledit-span tabledit-identifier">2</span
                        ><input
                          class="tabledit-input tabledit-identifier"
                          type="hidden"
                          name="id"
                          value="2"
                          disabled=""
                      /></td>
                      <td class="tabledit-view-mode"
                        ><span class="tabledit-span">Garrett Winters</span
                        ><input
                          class="tabledit-input form-control form-control-sm"
                          type="text"
                          name="col1"
                          value="Garrett Winters"
                          style="display: none;"
                          disabled=""
                      /></td>
                      <td class="tabledit-view-mode"
                        ><span class="tabledit-span">Accountant</span
                        ><input
                          class="tabledit-input form-control form-control-sm"
                          type="text"
                          name="col2"
                          value="Accountant"
                          style="display: none;"
                          disabled=""
                      /></td>
                      <td class="tabledit-view-mode"
                        ><span class="tabledit-span">Tokyo</span
                        ><input
                          class="tabledit-input form-control form-control-sm"
                          type="text"
                          name="col3"
                          value="Tokyo"
                          style="display: none;"
                          disabled=""
                      /></td>
                      <td class="tabledit-view-mode"
                        ><span class="tabledit-span">63</span
                        ><input
                          class="tabledit-input form-control form-control-sm"
                          type="text"
                          name="col4"
                          value="63"
                          style="display: none;"
                          disabled=""
                      /></td>
                      <td>2011/07/25</td>
                      <td class="tabledit-view-mode"
                        ><span class="tabledit-span">$170,750</span
                        ><input
                          class="tabledit-input form-control form-control-sm"
                          type="text"
                          name="col6"
                          value="$170,750"
                          style="display: none;"
                          disabled=""
                      /></td>
                      <td style=" width: 1%;white-space: nowrap;"
                        ><div
                          class="tabledit-toolbar btn-toolbar"
                          style="text-align: left;"
                        >
                          <div
                            class="btn-group btn-group-sm"
                            style="float: none;"
                            ><button
                              type="button"
                              class="tabledit-edit-button btn btn-success"
                              style="float: none;"
                              ><span class="mdi mdi-pencil"></span></button
                          ></div> </div></td
                    ></tr>
                    <tr id="3">
                      <td
                        ><span class="tabledit-span tabledit-identifier">3</span
                        ><input
                          class="tabledit-input tabledit-identifier"
                          type="hidden"
                          name="id"
                          value="3"
                          disabled=""
                      /></td>
                      <td class="tabledit-view-mode"
                        ><span class="tabledit-span">Ashton Cox</span
                        ><input
                          class="tabledit-input form-control form-control-sm"
                          type="text"
                          name="col1"
                          value="Ashton Cox"
                          style="display: none;"
                          disabled=""
                      /></td>
                      <td class="tabledit-view-mode"
                        ><span class="tabledit-span"
                          >Junior Technical Author</span
                        ><input
                          class="tabledit-input form-control form-control-sm"
                          type="text"
                          name="col2"
                          value="Junior Technical Author"
                          style="display: none;"
                          disabled=""
                      /></td>
                      <td class="tabledit-view-mode"
                        ><span class="tabledit-span">San Francisco</span
                        ><input
                          class="tabledit-input form-control form-control-sm"
                          type="text"
                          name="col3"
                          value="San Francisco"
                          style="display: none;"
                          disabled=""
                      /></td>
                      <td class="tabledit-view-mode"
                        ><span class="tabledit-span">66</span
                        ><input
                          class="tabledit-input form-control form-control-sm"
                          type="text"
                          name="col4"
                          value="66"
                          style="display: none;"
                          disabled=""
                      /></td>
                      <td>2009/01/12</td>
                      <td class="tabledit-view-mode"
                        ><span class="tabledit-span">$86,000</span
                        ><input
                          class="tabledit-input form-control form-control-sm"
                          type="text"
                          name="col6"
                          value="$86,000"
                          style="display: none;"
                          disabled=""
                      /></td>
                      <td style=" width: 1%;white-space: nowrap;"
                        ><div
                          class="tabledit-toolbar btn-toolbar"
                          style="text-align: left;"
                        >
                          <div
                            class="btn-group btn-group-sm"
                            style="float: none;"
                            ><button
                              type="button"
                              class="tabledit-edit-button btn btn-success"
                              style="float: none;"
                              ><span class="mdi mdi-pencil"></span></button
                          ></div> </div></td
                    ></tr>
                    <tr id="4">
                      <td
                        ><span class="tabledit-span tabledit-identifier">4</span
                        ><input
                          class="tabledit-input tabledit-identifier"
                          type="hidden"
                          name="id"
                          value="4"
                          disabled=""
                      /></td>
                      <td class="tabledit-view-mode"
                        ><span class="tabledit-span">Cedric Kelly</span
                        ><input
                          class="tabledit-input form-control form-control-sm"
                          type="text"
                          name="col1"
                          value="Cedric Kelly"
                          style="display: none;"
                          disabled=""
                      /></td>
                      <td class="tabledit-view-mode"
                        ><span class="tabledit-span"
                          >Senior Javascript Developer</span
                        ><input
                          class="tabledit-input form-control form-control-sm"
                          type="text"
                          name="col2"
                          value="Senior Javascript Developer"
                          style="display: none;"
                          disabled=""
                      /></td>
                      <td class="tabledit-view-mode"
                        ><span class="tabledit-span">Edinburgh</span
                        ><input
                          class="tabledit-input form-control form-control-sm"
                          type="text"
                          name="col3"
                          value="Edinburgh"
                          style="display: none;"
                          disabled=""
                      /></td>
                      <td class="tabledit-view-mode"
                        ><span class="tabledit-span">22</span
                        ><input
                          class="tabledit-input form-control form-control-sm"
                          type="text"
                          name="col4"
                          value="22"
                          style="display: none;"
                          disabled=""
                      /></td>
                      <td>2012/03/29</td>
                      <td class="tabledit-view-mode"
                        ><span class="tabledit-span">$433,060</span
                        ><input
                          class="tabledit-input form-control form-control-sm"
                          type="text"
                          name="col6"
                          value="$433,060"
                          style="display: none;"
                          disabled=""
                      /></td>
                      <td style=" width: 1%;white-space: nowrap;"
                        ><div
                          class="tabledit-toolbar btn-toolbar"
                          style="text-align: left;"
                        >
                          <div
                            class="btn-group btn-group-sm"
                            style="float: none;"
                            ><button
                              type="button"
                              class="tabledit-edit-button btn btn-success"
                              style="float: none;"
                              ><span class="mdi mdi-pencil"></span></button
                          ></div> </div></td
                    ></tr>
                    <tr id="5">
                      <td
                        ><span class="tabledit-span tabledit-identifier">5</span
                        ><input
                          class="tabledit-input tabledit-identifier"
                          type="hidden"
                          name="id"
                          value="5"
                          disabled=""
                      /></td>
                      <td class="tabledit-view-mode"
                        ><span class="tabledit-span">Airi Satou</span
                        ><input
                          class="tabledit-input form-control form-control-sm"
                          type="text"
                          name="col1"
                          value="Airi Satou"
                          style="display: none;"
                          disabled=""
                      /></td>
                      <td class="tabledit-view-mode"
                        ><span class="tabledit-span">Accountant</span
                        ><input
                          class="tabledit-input form-control form-control-sm"
                          type="text"
                          name="col2"
                          value="Accountant"
                          style="display: none;"
                          disabled=""
                      /></td>
                      <td class="tabledit-view-mode"
                        ><span class="tabledit-span">Tokyo</span
                        ><input
                          class="tabledit-input form-control form-control-sm"
                          type="text"
                          name="col3"
                          value="Tokyo"
                          style="display: none;"
                          disabled=""
                      /></td>
                      <td class="tabledit-view-mode"
                        ><span class="tabledit-span">33</span
                        ><input
                          class="tabledit-input form-control form-control-sm"
                          type="text"
                          name="col4"
                          value="33"
                          style="display: none;"
                          disabled=""
                      /></td>
                      <td>2008/11/28</td>
                      <td class="tabledit-view-mode"
                        ><span class="tabledit-span">$162,700</span
                        ><input
                          class="tabledit-input form-control form-control-sm"
                          type="text"
                          name="col6"
                          value="$162,700"
                          style="display: none;"
                          disabled=""
                      /></td>
                      <td style=" width: 1%;white-space: nowrap;"
                        ><div
                          class="tabledit-toolbar btn-toolbar"
                          style="text-align: left;"
                        >
                          <div
                            class="btn-group btn-group-sm"
                            style="float: none;"
                            ><button
                              type="button"
                              class="tabledit-edit-button btn btn-success"
                              style="float: none;"
                              ><span class="mdi mdi-pencil"></span></button
                          ></div> </div></td
                    ></tr>
                    <tr id="6">
                      <td
                        ><span class="tabledit-span tabledit-identifier">6</span
                        ><input
                          class="tabledit-input tabledit-identifier"
                          type="hidden"
                          name="id"
                          value="6"
                          disabled=""
                      /></td>
                      <td class="tabledit-view-mode"
                        ><span class="tabledit-span">Brielle Williamson</span
                        ><input
                          class="tabledit-input form-control form-control-sm"
                          type="text"
                          name="col1"
                          value="Brielle Williamson"
                          style="display: none;"
                          disabled=""
                      /></td>
                      <td class="tabledit-view-mode"
                        ><span class="tabledit-span"
                          >Integration Specialist</span
                        ><input
                          class="tabledit-input form-control form-control-sm"
                          type="text"
                          name="col2"
                          value="Integration Specialist"
                          style="display: none;"
                          disabled=""
                      /></td>
                      <td class="tabledit-view-mode"
                        ><span class="tabledit-span">New York</span
                        ><input
                          class="tabledit-input form-control form-control-sm"
                          type="text"
                          name="col3"
                          value="New York"
                          style="display: none;"
                          disabled=""
                      /></td>
                      <td class="tabledit-view-mode"
                        ><span class="tabledit-span">61</span
                        ><input
                          class="tabledit-input form-control form-control-sm"
                          type="text"
                          name="col4"
                          value="61"
                          style="display: none;"
                          disabled=""
                      /></td>
                      <td>2012/12/02</td>
                      <td class="tabledit-view-mode"
                        ><span class="tabledit-span">$372,000</span
                        ><input
                          class="tabledit-input form-control form-control-sm"
                          type="text"
                          name="col6"
                          value="$372,000"
                          style="display: none;"
                          disabled=""
                      /></td>
                      <td style=" width: 1%;white-space: nowrap;"
                        ><div
                          class="tabledit-toolbar btn-toolbar"
                          style="text-align: left;"
                        >
                          <div
                            class="btn-group btn-group-sm"
                            style="float: none;"
                            ><button
                              type="button"
                              class="tabledit-edit-button btn btn-success"
                              style="float: none;"
                              ><span class="mdi mdi-pencil"></span></button
                          ></div> </div></td
                    ></tr>
                    <tr id="7">
                      <td
                        ><span class="tabledit-span tabledit-identifier">7</span
                        ><input
                          class="tabledit-input tabledit-identifier"
                          type="hidden"
                          name="id"
                          value="7"
                          disabled=""
                      /></td>
                      <td class="tabledit-view-mode"
                        ><span class="tabledit-span">Herrod Chandler</span
                        ><input
                          class="tabledit-input form-control form-control-sm"
                          type="text"
                          name="col1"
                          value="Herrod Chandler"
                          style="display: none;"
                          disabled=""
                      /></td>
                      <td class="tabledit-view-mode"
                        ><span class="tabledit-span">Sales Assistant</span
                        ><input
                          class="tabledit-input form-control form-control-sm"
                          type="text"
                          name="col2"
                          value="Sales Assistant"
                          style="display: none;"
                          disabled=""
                      /></td>
                      <td class="tabledit-view-mode"
                        ><span class="tabledit-span">San Francisco</span
                        ><input
                          class="tabledit-input form-control form-control-sm"
                          type="text"
                          name="col3"
                          value="San Francisco"
                          style="display: none;"
                          disabled=""
                      /></td>
                      <td class="tabledit-view-mode"
                        ><span class="tabledit-span">59</span
                        ><input
                          class="tabledit-input form-control form-control-sm"
                          type="text"
                          name="col4"
                          value="59"
                          style="display: none;"
                          disabled=""
                      /></td>
                      <td>2012/08/06</td>
                      <td class="tabledit-view-mode"
                        ><span class="tabledit-span">$137,500</span
                        ><input
                          class="tabledit-input form-control form-control-sm"
                          type="text"
                          name="col6"
                          value="$137,500"
                          style="display: none;"
                          disabled=""
                      /></td>
                      <td style=" width: 1%;white-space: nowrap;"
                        ><div
                          class="tabledit-toolbar btn-toolbar"
                          style="text-align: left;"
                        >
                          <div
                            class="btn-group btn-group-sm"
                            style="float: none;"
                            ><button
                              type="button"
                              class="tabledit-edit-button btn btn-success"
                              style="float: none;"
                              ><span class="mdi mdi-pencil"></span></button
                          ></div> </div></td
                    ></tr>
                    <tr id="8">
                      <td
                        ><span class="tabledit-span tabledit-identifier">8</span
                        ><input
                          class="tabledit-input tabledit-identifier"
                          type="hidden"
                          name="id"
                          value="8"
                          disabled=""
                      /></td>
                      <td class="tabledit-view-mode"
                        ><span class="tabledit-span">Rhona Davidson</span
                        ><input
                          class="tabledit-input form-control form-control-sm"
                          type="text"
                          name="col1"
                          value="Rhona Davidson"
                          style="display: none;"
                          disabled=""
                      /></td>
                      <td class="tabledit-view-mode"
                        ><span class="tabledit-span"
                          >Integration Specialist</span
                        ><input
                          class="tabledit-input form-control form-control-sm"
                          type="text"
                          name="col2"
                          value="Integration Specialist"
                          style="display: none;"
                          disabled=""
                      /></td>
                      <td class="tabledit-view-mode"
                        ><span class="tabledit-span">Tokyo</span
                        ><input
                          class="tabledit-input form-control form-control-sm"
                          type="text"
                          name="col3"
                          value="Tokyo"
                          style="display: none;"
                          disabled=""
                      /></td>
                      <td class="tabledit-view-mode"
                        ><span class="tabledit-span">55</span
                        ><input
                          class="tabledit-input form-control form-control-sm"
                          type="text"
                          name="col4"
                          value="55"
                          style="display: none;"
                          disabled=""
                      /></td>
                      <td>2010/10/14</td>
                      <td class="tabledit-view-mode"
                        ><span class="tabledit-span">$327,900</span
                        ><input
                          class="tabledit-input form-control form-control-sm"
                          type="text"
                          name="col6"
                          value="$327,900"
                          style="display: none;"
                          disabled=""
                      /></td>
                      <td style=" width: 1%;white-space: nowrap;"
                        ><div
                          class="tabledit-toolbar btn-toolbar"
                          style="text-align: left;"
                        >
                          <div
                            class="btn-group btn-group-sm"
                            style="float: none;"
                            ><button
                              type="button"
                              class="tabledit-edit-button btn btn-success"
                              style="float: none;"
                              ><span class="mdi mdi-pencil"></span></button
                          ></div> </div></td
                    ></tr>
                    <tr id="9">
                      <td
                        ><span class="tabledit-span tabledit-identifier">9</span
                        ><input
                          class="tabledit-input tabledit-identifier"
                          type="hidden"
                          name="id"
                          value="9"
                          disabled=""
                      /></td>
                      <td class="tabledit-view-mode"
                        ><span class="tabledit-span">Colleen Hurst</span
                        ><input
                          class="tabledit-input form-control form-control-sm"
                          type="text"
                          name="col1"
                          value="Colleen Hurst"
                          style="display: none;"
                          disabled=""
                      /></td>
                      <td class="tabledit-view-mode"
                        ><span class="tabledit-span">Javascript Developer</span
                        ><input
                          class="tabledit-input form-control form-control-sm"
                          type="text"
                          name="col2"
                          value="Javascript Developer"
                          style="display: none;"
                          disabled=""
                      /></td>
                      <td class="tabledit-view-mode"
                        ><span class="tabledit-span">San Francisco</span
                        ><input
                          class="tabledit-input form-control form-control-sm"
                          type="text"
                          name="col3"
                          value="San Francisco"
                          style="display: none;"
                          disabled=""
                      /></td>
                      <td class="tabledit-view-mode"
                        ><span class="tabledit-span">39</span
                        ><input
                          class="tabledit-input form-control form-control-sm"
                          type="text"
                          name="col4"
                          value="39"
                          style="display: none;"
                          disabled=""
                      /></td>
                      <td>2009/09/15</td>
                      <td class="tabledit-view-mode"
                        ><span class="tabledit-span">$205,500</span
                        ><input
                          class="tabledit-input form-control form-control-sm"
                          type="text"
                          name="col6"
                          value="$205,500"
                          style="display: none;"
                          disabled=""
                      /></td>
                      <td style=" width: 1%;white-space: nowrap;"
                        ><div
                          class="tabledit-toolbar btn-toolbar"
                          style="text-align: left;"
                        >
                          <div
                            class="btn-group btn-group-sm"
                            style="float: none;"
                            ><button
                              type="button"
                              class="tabledit-edit-button btn btn-success"
                              style="float: none;"
                              ><span class="mdi mdi-pencil"></span></button
                          ></div> </div></td
                    ></tr>
                    <tr id="10">
                      <td
                        ><span class="tabledit-span tabledit-identifier"
                          >10</span
                        ><input
                          class="tabledit-input tabledit-identifier"
                          type="hidden"
                          name="id"
                          value="10"
                          disabled=""
                      /></td>
                      <td class="tabledit-view-mode"
                        ><span class="tabledit-span">Sonya Frost</span
                        ><input
                          class="tabledit-input form-control form-control-sm"
                          type="text"
                          name="col1"
                          value="Sonya Frost"
                          style="display: none;"
                          disabled=""
                      /></td>
                      <td class="tabledit-view-mode"
                        ><span class="tabledit-span">Software Engineer</span
                        ><input
                          class="tabledit-input form-control form-control-sm"
                          type="text"
                          name="col2"
                          value="Software Engineer"
                          style="display: none;"
                          disabled=""
                      /></td>
                      <td class="tabledit-view-mode"
                        ><span class="tabledit-span">Edinburgh</span
                        ><input
                          class="tabledit-input form-control form-control-sm"
                          type="text"
                          name="col3"
                          value="Edinburgh"
                          style="display: none;"
                          disabled=""
                      /></td>
                      <td class="tabledit-view-mode"
                        ><span class="tabledit-span">23</span
                        ><input
                          class="tabledit-input form-control form-control-sm"
                          type="text"
                          name="col4"
                          value="23"
                          style="display: none;"
                          disabled=""
                      /></td>
                      <td>2008/12/13</td>
                      <td class="tabledit-view-mode"
                        ><span class="tabledit-span">$103,600</span
                        ><input
                          class="tabledit-input form-control form-control-sm"
                          type="text"
                          name="col6"
                          value="$103,600"
                          style="display: none;"
                          disabled=""
                      /></td>
                      <td style=" width: 1%;white-space: nowrap;"
                        ><div
                          class="tabledit-toolbar btn-toolbar"
                          style="text-align: left;"
                        >
                          <div
                            class="btn-group btn-group-sm"
                            style="float: none;"
                            ><button
                              type="button"
                              class="tabledit-edit-button btn btn-success"
                              style="float: none;"
                              ><span class="mdi mdi-pencil"></span></button
                          ></div> </div></td
                    ></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="form-row align-items-center mb-2">
              <div class="col-auto">
                <label for="product-price">
                  Fecha de Ingreso
                  <span class="text-danger">*</span>
                </label>
                <v-date-picker
                  v-model="dateIng"
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
                  v-model="dateven"
                  color="red"
                  is-dark
                  :input-props="{
                    class: 'form-control',
                    readonly: true,
                  }"
                />
              </div>
            </div>
            <div class="form-row mb-2">
              <div class="col-auto">
                <label for="product-price">
                  Precio de Compra
                  <span class="text-danger">*</span>
                </label>
                <input
                  id="product-price"
                  v-model.trim="$v.precioCompra.$model"
                  type="number"
                  class="form-control"
                  placeholder="Ingrese cantidad"
                />
                <ul
                  v-if="$v.precioCompra.$anyDirty && !$v.precioCompra.minValue"
                  id="parsley-id-7"
                  class="parsley-errors-list filled mb-2"
                >
                  <li class="parsley-required">
                    el
                    <strong>Valor</strong> tiene que ser mayor.
                  </li>
                </ul>
              </div>
              <div class="col-auto">
                <label for="product-price">
                  Precio Unitario de Venta
                  <span class="text-danger">*</span>
                </label>
                <input
                  id="product-price"
                  v-model.trim="$v.precioVenta.$model"
                  type="number"
                  class="form-control"
                  placeholder="Ingrese cantidad"
                />
                <ul
                  v-if="$v.precioVenta.$anyDirty && !$v.precioVenta.minValue"
                  id="parsley-id-7"
                  class="parsley-errors-list filled mb-2"
                >
                  <li class="parsley-required">
                    el
                    <strong>Valor</strong> tiene que ser mayor.
                  </li>
                </ul>
              </div>
            </div>

            <div class="form-row mb-2">
              <div class="col-auto">
                <label for="product-price">
                  Stock Minimo
                  <span class="text-danger">*</span>
                </label>
                <input
                  id="product-price"
                  v-model.trim="$v.stockMin.$model"
                  type="number"
                  class="form-control"
                  placeholder="Ingrese cantidad"
                />
                <ul
                  v-if="$v.stockMin.$anyDirty && !$v.stockMin.minValue"
                  id="parsley-id-7"
                  class="parsley-errors-list filled mb-2"
                >
                  <li class="parsley-required">
                    el
                    <strong>Valor</strong> tiene que ser mayor.
                  </li>
                </ul>
              </div>
              <div class="col-auto">
                <label for="product-price">
                  Stock Maximo
                  <span class="text-danger">*</span>
                </label>
                <input
                  id="product-price"
                  v-model.trim="$v.stockMax.$model"
                  type="number"
                  class="form-control"
                  placeholder="Ingrese cantidad"
                />
                <ul
                  v-if="$v.stockMax.$anyDirty && !$v.stockMax.minValue"
                  id="parsley-id-7"
                  class="parsley-errors-list filled mb-2"
                >
                  <li class="parsley-required">
                    el
                    <strong>Valor</strong> tiene que ser mayor.
                  </li>
                </ul>
              </div>
            </div>

            <div class="form-row mb-2">
              <div class>
                <label for="product-price">
                  Ingresar Proveedor
                  <span class="text-danger">*</span>
                </label>
                <!-- eslint-disable-next-line -->
                <vue-bootstrap-typeahead
                  v-model="autoCompleteProdQuery"
                  class="mb-2"
                  :data="autoCompleteProducts"
                  :serializer="(item) => item.Nom_Medi"
                  placeholder="Buscar Proveedores"
                  @hit="selectedProveedor = $event"
                />

                <label
                  v-if="selectedProveedor && selectedProveedor.RazonSoc_Prov"
                  for="selectedProveedor"
                >
                  <strong>RUC:</strong>
                  {{ selectedProveedor.RUC }} /
                  <strong>Razon Social:</strong>
                  {{ selectedProveedor.RazonSoc_Prov }}
                </label>
                <ul
                  v-if="$v.query.$anyDirty && !provIndex"
                  id="parsley-id-7"
                  class="parsley-errors-list filled mb-2"
                >
                  <li class="parsley-required">Requerido.</li>
                </ul>
              </div>
            </div>

            <button
              type="submit"
              class="btn btn-primary waves-effect waves-light mt-3"
              >Ingresar Producto</button
            >
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
// import _ from 'underscore'

import { required, minValue } from 'vuelidate/lib/validators' // minLength
import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'

// const API_URL = process.env.API_BASE_URL + 'http://localhost:3010/products/getProdByCodOrDesc?razSoc=:query'
//          const API_URL = 'https://api-url-here.com?query=:query'
export default {
  name: 'ProdInsert',
  components: {
    VueBootstrapTypeahead,
  },
  data() {
    return {
      tipClient: 0,
      cliDoc: null,

      autoCompleteProdQuery: '',
      autoCompleteProducts: [],

      invoiceProducts: [
        { id: '0001', Nom_Medi: 'My journey with Vue' },
        { id: '0002', Nom_Medi: 'Blogging with Vue' },
        { id: '0003', Nom_Medi: 'Why Vue is so fun' },
      ],

      //   items: navigationRoutes.routes,
      submitStatus: null,
      categories: [],
      //   medCantidad: 0;
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
      // proveedorindex: getProvIndex(),
      // provIndex,

      query: '',
      selectedProveedor: null,
      proveedores: [],
    }
  },
  validations: {
    productName: {
      required,
    },
    selectedCat: {
      required,
    },
    productDescription: {
      required,
    },
    dateIng: {
      required,
    },
    dateven: {
      required,
    },
    precioCompra: {
      required,
      minValue: minValue(1),
    },
    precioVenta: {
      required,
      minValue: minValue(1),
    },
    stockMin: {
      required,
      minValue: minValue(1),
    },
    stockMax: {
      required,
      minValue: minValue(1),
    },
    medPrescripcion: {
      required,
    },
    query: {
      required,
    },
  },
  computed: {
    provIndex: {
      get: function() {
        if (this.selectedProveedor && this.selectedProveedor.id) {
          return this.selectedProveedor.id
        } else {
          return null
        }
      },
    },
    autoComplete: function() {
      // `this` points to the vm instance
      return this.message
        .split('')
        .reverse()
        .join('')
    },
  },
  // created: function() {
  //   axios
  //     .get('http://localhost:3010/products/getcat/10')
  //     .then((response) => {
  //       console.log('Cat Loaded')
  //       this.categories = response.data
  //     })
  //     .catch(function(error) {
  //       console.log('error con Categorias ' + error)
  //     })
  // },
  watch: {
    // addressSearchx: _.debounce(function(addr) {
    // console.log('x2')
    // this.getAddresses(addr) }, 500)
    query(newQuery) {
      // console.log('e');
      axios
        // .get(`http://localhost:3010/products/getproveedores?razSoc=${newQuery}`)
        .get(`http://localhost:3010/products/getProdByCodOrDesc/1`)
        .then((res) => {
          // console.log('TCL: query -> res.data', res.data)
          this.autoCompleteProducts = res.data
        })
        .catch(function(e) {
          // console.log('e'); // "oh, no!"
        })
    },
  },
  // age: {
  //   between: between(20, 30)
  // },
  methods: {
    checkForm: function(e) {
      e.preventDefault()
      // console.log('submit!')
      this.$v.$touch()
      if (this.$v.$invalid) {
        this.submitStatus = 'ERROR'
      } else {
        this.submitStatus = 'PENDING'
        axios
          .post('http://localhost:3010/products/insert', {
            product: {
              Nom_Medi: this.productName,
              Desc_Medi: this.productDescription,
              Cant_Medi: 2, // ! fix this
              Precio_Com: this.precioCompra,
              Precio_Unitario: this.precioVenta,
              RazonSoc_Prov: 'product.RazonSoc_Prov', // ! fix this
              Fecha_Ing: this.dateIng,
              Fecha_Ven: this.dateven,
              Stock_Min: this.stockMin,
              Stock_Max: this.stockMax,
              Pres_Medi: this.medPrescripcion,
              T01FCATId: this.selectedCat,
              T01FPROId: this.selectedProveedor.id,
            },
          })
          .then((response) => {
            // console.dir(response)
            setTimeout((response) => {
              // console.log('ingresado')
              //   currentObj.output = response
              this.submitStatus = 'OK'
              // Object.assign(this.$data, this.$options.data())
              // console.Object
              this.selectedCat = null
              this.productName = ''
              this.productDescription = ''
              this.dateIng = new Date()
              this.dateven = new Date()
              this.precioCompra = 0
              this.precioVenta = 0
              this.stockMin = 0
              this.stockMax = 0
              this.medPrescripcion = 0
              this.$v.$reset()
            }, 500)
            // this.submitStatus = 'OK'
            //   currentObj.output = response.data;
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
    async getAddresses(query) {
      // const res = await fetch(API_URL.replace(':query', query))
      // const suggestions = await res.json()
      // this.addresses = suggestions
      // console.dir(this.addresses)
      // console.log('x1')
    },
  },
  filters: {
    stringify(value) {
      return JSON.stringify(value, null, 2)
    },
  },

  // a computed getter
}
</script>
