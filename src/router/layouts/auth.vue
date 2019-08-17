<script>
export default {
  components: {},
  created: () => {
    document.body.classList.add('authentication-bg');
    document.body.classList.add('authentication-bg-pattern');
  }
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
            2016 - 2019 © Ubold theme by <a href="" class="text-muted">Coderthxemes</a>
        </footer>
</div>
</template>
