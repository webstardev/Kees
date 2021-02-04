<template>
  <v-container fluid class="info-container d-flex flex-column px-0 pb-0">
    <top-navbar></top-navbar>
    <v-sheet class="banner" color="white"> </v-sheet>
    <info-footer></info-footer>
  </v-container>
</template>

<script>
import TopNavbar from "@/views/components/TopNavbar.vue";
import InfoFooter from "@/views/components/InfoFooter.vue";
export default {
  components: { TopNavbar, InfoFooter },
  name: "info-page",
};
</script>

<style lang="scss" scoped>
.info-container {
  min-height: 100vh;
  padding-top: var(--navbarHeight);
  .banner {
    background: url("../../../assets/info-banner.jpg") no-repeat center center;
    background-size: cover;
    height: 100vh;
  }
}
</style>
