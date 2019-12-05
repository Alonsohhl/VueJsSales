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
    var links = document.getElementsByClassName('side-nav-link-ref')
    var matchingMenuItem = null
    for (var i = 0; i < links.length; i++) {
      if (window.location.pathname === links[i].pathname) {
        matchingMenuItem = links[i]
        break
      }
    }
    if (matchingMenuItem) {
      matchingMenuItem.classList.add('active')
      var parent = matchingMenuItem.parentElement

      /**
       * TODO: This is hard coded way of expading/activating parent menu dropdown and working till level 3.
       * We should come up with non hard coded approach
       */
      if (parent) {
        parent.classList.add('active')
        const parent2 = parent.parentElement
        if (parent2) {
          parent2.classList.add('in')
        }
        const parent3 = parent2.parentElement
        if (parent3) {
          parent3.classList.add('active')
          var childAnchor = parent3.querySelector('.has-dropdown')
          if (childAnchor) childAnchor.classList.add('active')
        }

        const parent4 = parent3.parentElement
        if (parent4) parent4.classList.add('in')
        const parent5 = parent4.parentElement
        if (parent5) parent5.classList.add('active')
      }
    }
  },
  methods: {
    /**
     * small sidebar
     */
    smallSidebar() {
      document.body.classList.add('left-side-menu-sm')
      document.body.classList.remove('left-side-menu-dark')
      document.body.classList.remove('topbar-light')
      document.body.classList.remove('boxed-layout')
      document.body.classList.remove('enlarged')
    },

    /**
     * Dark sidebar
     */
    darkSidebar() {
      document.body.classList.remove('left-side-menu-sm')
      document.body.classList.add('left-side-menu-dark')
      document.body.classList.remove('topbar-light')
      document.body.classList.remove('boxed-layout')
    },

    /**
     * Light Topbar
     */
    lightTopbar() {
      document.body.classList.add('topbar-light')
      document.body.classList.remove('left-side-menu-dark')
      document.body.classList.remove('left-side-menu-sm')
      document.body.classList.remove('boxed-layout')
    },

    /**
     * Sidebar collapsed
     */
    sidebarCollapsed() {
      document.body.classList.remove('left-side-menu-dark')
      document.body.classList.remove('left-side-menu-sm')
      document.body.classList.toggle('enlarged')
      document.body.classList.remove('boxed-layout')
      document.body.classList.remove('topbar-light')
    },

    /**
     * Boxed Layout
     */
    boxedLayout() {
      document.body.classList.add('boxed-layout')
      document.body.classList.remove('left-side-menu-dark')
      document.body.classList.add('enlarged')
      document.body.classList.remove('left-side-menu-sm')
    },
  },
}
</script>

<template>
  <!--- Sidemenu -->
  <div id="sidebar-menu">
    <ul id="side-menu" class="metismenu">
      <li class="menu-title">Opciones</li>

      <li class="active">
        <a
          href="javascript: void(0);"
          aria-expanded="false"
          class="has-dropdown"
        >
          <i class="fe-airplay"></i>
          <span class="badge badge-success badge-pill float-right">2</span>
          <span>Dashboard</span>
        </a>
        <ul class="nav-second-level" aria-expanded="false">
          <li>
            <!-- <a href="javascript: void(0);" class="waves-effect">

              <span>Ventas</span>
              <span class="menu-arrow"></span>
            </a> -->

            <a href="javascript: void(0);" aria-expanded="false">
              <i class="fe-shopping-cart"></i>
              <span> Ventas </span>
              <span class="menu-arrow"></span>
            </a>

            <ul class="nav-second-level collapse" aria-expanded="false">
              <li>
                <!-- <a href="ecommerce-dashboard.html">Realizar Venta</a> -->
                <router-link
                  tag="a"
                  :to="{ name: 'insVenta' }"
                  class="side-nav-link-ref"
                  >Realizar Venta</router-link
                >
              </li>
              <!-- <li>
                  <a href="ecommerce-products.html">Products</a>
              </li>
              <li>
                  <a href="ecommerce-prduct-detail.html">Product Detail</a>
              </li>
              <li>
                  <a href="ecommerce-product-edit.html">Product Edit</a>
              </li>
              <li>
                  <a href="ecommerce-orders.html">Orders</a>
              </li>
              <li>
                  <a href="ecommerce-sellers.html">Sellers</a>
              </li> -->
            </ul>

            <!-- <router-link tag="a" to="/dashboard">Ventas</router-link> -->
          </li>
          <li>
            <a href="javascript: void(0);" class="has-dropdown">
              <i class="fe-package" style="margin: 0 10px 0 3px"></i>
              <span>Productos</span>
              <span class="menu-arrow"></span>
            </a>

            <ul class="nav-third-level nav collapse" aria-expanded="true">
              <li>
                <router-link
                  tag="a"
                  :to="{ name: 'mainProd' }"
                  class="side-nav-link-ref"
                  >productos</router-link
                >
              </li>
              <li>
                <router-link
                  tag="a"
                  :to="{ name: 'insertarProd' }"
                  class="side-nav-link-ref"
                  >Ingresar Productos</router-link
                >
              </li>
              <li>
                <router-link
                  tag="a"
                  :to="{ name: 'mainCategories' }"
                  class="side-nav-link-ref"
                  >Categorias</router-link
                >
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
        <a
          href="javascript: void(0);"
          aria-expanded="false"
          class="has-dropdown"
        >
          <i class="fe-airplay"></i>
          <span class="badge badge-success badge-pill float-right">4</span>
          <span>Administración</span>
        </a>
        <ul class="nav-second-level" aria-expanded="false">
          <li>
            <router-link tag="a" to="/" class="side-nav-link-ref"
              >Dashboard 1</router-link
            >
          </li>
          <li>
            <router-link
              tag="a"
              to="/dashboards/dashboard2"
              class="side-nav-link-ref"
              >Dashboard 2</router-link
            >
          </li>
          <li>
            <router-link
              tag="a"
              to="/dashboards/dashboard3"
              class="side-nav-link-ref"
              >Dashboard 3</router-link
            >
          </li>
          <li>
            <router-link
              tag="a"
              to="/dashboards/dashboard4"
              class="side-nav-link-ref"
              >Dashboard 4</router-link
            >
          </li>
        </ul>
      </li>

      <li>
        <a href="javascript: void(0);" class="has-dropdown">
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
