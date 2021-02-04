<template>
  <v-footer
    class="info-footer mt-auto d-flex flex-column align-items-center"
    padless
    :color="$vuetify.theme.themes.light.backgroundPrimary"
  >
    <router-link :to="{ name: 'info' }">
      <v-img src="@/assets/logo.svg" width="230px" height="60px" />
    </router-link>
    <v-card-text class="d-flex flex-row justify-center pb-0 pt-6">
      <v-btn v-for="icon in icons" :key="icon" class="mx-4 white--text" icon>
        <v-icon size="30px">
          {{ icon }}
        </v-icon>
      </v-btn>
    </v-card-text>
  </v-footer>
</template>

<script>
export default {
  name: "info-footer",
  data: () => ({
    icons: ["mdi-linkedin", "mdi-youtube", "mdi-facebook"],
  }),
};
</script>

<style scoped lang="scss">
.info-footer {
  padding-top: 49px;
  padding-bottom: 45.6px;
}
</style>
