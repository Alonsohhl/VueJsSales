<script>
export default {
  components: {},
  created: () => {
    document.body.classList.add('authentication-bg')
    document.body.classList.add('authentication-bg-pattern')
  },
}
</script>

<template>
  <div>
    <div class="account-pages mt-5 mb-5">
      <div class="container">
        <slot />
      </div>
    </div>
    <footer class="footer footer-alt">
      2019 <a href="" class="text-muted">Sistema de Ventas</a>
    </footer>
  </div>
</template>
