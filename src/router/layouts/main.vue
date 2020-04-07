<script>
import NavBar from '@components/nav-bar'
import SideBar from '@components/side-bar'
import RightBar from '@components/right-bar'

export default {
  components: { NavBar, SideBar, RightBar },
  data() {
    return {
      isMenuCondensed: false,
      user: this.$store ? this.$store.state.auth.currentUser : {} || {},
    }
  },
  created: () => {
    document.body.classList.remove('authentication-bg')
    document.body.classList.remove('authentication-bg-pattern')
  },
  methods: {
    toggleMenu() {
      this.isMenuCondensed = !this.isMenuCondensed
      document.body.classList.toggle('sidebar-enable')
      if (
        !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile|CriOS/i.test(navigator.userAgent)
      )
        document.body.classList.toggle('enlarged')
    },
    toggleRightSidebar() {
      document.body.classList.toggle('right-bar-enabled')
    },
  },
}
</script>

<template>
  <div id="wrapper">
    <NavBar :user="user" />
    <SideBar :is-condensed="isMenuCondensed" />
    <!-- ============================================================== -->
    <!-- Start Page Content here -->
    <!-- ============================================================== -->

    <div class="content-page">
      <div class="content">
        <!-- Start Content-->
        <div class="container-fluid">
          <slot />
        </div>
      </div>
    </div>
    <RightBar />
  </div>
</template>
