// Todo Rutas de navegacion
<script>
import { authComputed } from '@state/helpers'

import MetisMenu from 'metismenujs/dist/metismenujs'

export default {
  components: {},
  computed: {
    ...authComputed,
  },
  mounted: function() {
    // eslint-disable-next-line no-unused-vars
    var menuRef = new MetisMenu('#side-menu')
  },
  methods: {},
}
</script>

<template>
  <!--- Sidemenu -->
  <div id="sidebar-menu">
    <ul id="side-menu" class="metismenu">
      <li class="menu-title">Navigation</li>

      <li class="active">
        <a href="javascript: void(0);" aria-expanded="false" class="waves-effect">
          <i class="fe-airplay"></i>
          <span class="badge badge-success badge-pill float-right">2</span>
          <span>Dashboard</span>
        </a>
        <ul class="nav-second-level" aria-expanded="false">
          <li>
            <router-link tag="a" to="/dashboard">Ventas</router-link>
          </li>
          <li>
            <a href="javascript: void(0);" class="waves-effect">
              <!-- <i class="fe-folder-plus"></i> -->
              <span>Productos</span>
              <span class="menu-arrow"></span>
            </a>

            <ul class="nav-third-level nav collapse" aria-expanded="true">
              <li>
                <router-link tag="a" :to="{ name: 'insertarProd' }" >Ingresar Productos</router-link>
              </li>
              <!-- <li>
                <router-link tag="a" to="/productos">Productoss</router-link>
              </li>
              <li>
                <router-link tag="a" to="/dashboard2">Clientes</router-link>
              </li>
              <li>
                <router-link tag="a" to="/dashboard2">Proveedores</router-link>
              </li>-->
            </ul>
          </li>
          <li>
            <router-link tag="a" to="/dashboard2">Clientes</router-link>
          </li>
          <li>
            <router-link tag="a" to="/dashboard2">Proveedores</router-link>
          </li>
        </ul>
      </li>

      <li>
        <a href="javascript: void(0);" class="waves-effect">
          <i class="fe-folder-plus"></i>
          <span>Reportes</span>
          <span class="menu-arrow"></span>
        </a>
        <ul class="nav-second-level nav" aria-expanded="false">
          <li>
            <a href="javascript: void(0);">Level 1.1</a>
          </li>
          <li>
            <a href="javascript: void(0);" aria-expanded="false">
              Level 1.2
              <span class="menu-arrow"></span>
            </a>
            <ul class="nav-third-level nav" aria-expanded="false">
              <li>
                <a href="javascript: void(0);">Level 2.1</a>
              </li>
              <li>
                <a href="javascript: void(0);">Level 2.2</a>
              </li>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
    <div class="clearfix"></div>
  </div>
  <!-- End Sidebar -->
</template>

<style lang="scss">
@import '~metismenujs/scss/metismenujs';
</style>
