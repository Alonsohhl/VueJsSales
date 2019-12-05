<template>
  <ul id="vueAlerts">
    <li v-for="item in alerts" :key="item.index" class="list-inline">
      <!-- {{ item.mensaje }} - {{ item.type }} -->
      <b-alert :show="dismissCountDown" dismissible fade variant="warning">
        {{ item.mensaje }}
      </b-alert>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['alerts'],
  data() {
    return {
      dismissCountDown: 5,

      alertTimer: 6,
    }
  },
  methods: {},
}
</script>
