<template>
  <div class="layout">
    <div class="row">
      <!-- <div class="col-lg-6 col-xl-3" href="/home"> -->
      <router-link
        tag="div"
        :to="{ name: 'ventas' }"
        class=" col-lg-6 col-xl-3"
      >
        <div class="cardx widget-rounded-circle card-box">
          <div class="row">
            <div class="col-6">
              <div
                class="avatar-lg rounded-circle bg-soft-success border-success border"
              >
                <i
                  class="fe-shopping-cart font-24 avatar-title text-success"
                ></i>
              </div>
            </div>
            <div class="col-6">
              <div class="text-right">
                <h3 class="text-dark mt-1"
                  ><span data-plugin="counterup">Ventas</span></h3
                >
                <p class="text-muted mb-1 text-truncate">Modulo de Ventas </p>
              </div>
              <!-- </div> -->
            </div>
            <!-- end row-->
          </div>
          <!-- end widget-rounded-circle-->
        </div>
      </router-link>
      <!-- end col-->

      <router-link
        tag="div"
        :to="{ name: 'mainProd' }"
        class=" col-lg-6 col-xl-3"
      >
        <div class="cardx widget-rounded-circle card-box">
          <div class="row">
            <div class="col-6">
              <div
                class="avatar-lg rounded-circle bg-soft-primary border-primary border"
              >
                <i
                  class="fe-shopping-cart font-24 avatar-title text-primary"
                ></i>
              </div>
            </div>
            <div class="col-6">
              <div class="text-right">
                <h3 class="text-dark mt-1"
                  ><span data-plugin="counterup">Productos</span></h3
                >
                <p class="text-muted mb-1 text-truncate"
                  >Modulo de Productos
                </p>
              </div>
              <!-- </div> -->
            </div>
            <!-- end row-->
          </div>
          <!-- end widget-rounded-circle-->
        </div>
      </router-link>

      <router-link
        tag="div"
        :to="{ name: 'clientes' }"
        class=" col-lg-6 col-xl-3"
      >
        <div class="cardx widget-rounded-circle card-box">
          <div class="row">
            <div class="col-6">
              <div
                class="avatar-lg rounded-circle bg-soft-warning border-warning border"
              >
                <i
                  class="fe-shopping-cart font-24 avatar-title text-warning"
                ></i>
              </div>
            </div>
            <div class="col-6">
              <div class="text-right">
                <h3 class="text-dark mt-1"
                  ><span data-plugin="counterup">Clientes</span></h3
                >
                <p class="text-muted mb-1 text-truncate">Modulo de Clientes </p>
              </div>
              <!-- </div> -->
            </div>
            <!-- end row-->
          </div>
          <!-- end widget-rounded-circle-->
        </div>
      </router-link>
      <!-- end col-->

      <!-- end col-->
    </div>
  </div>
</template>
