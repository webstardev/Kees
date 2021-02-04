<template>
  <v-app class="kees-app">
    <router-view />
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Neuton:wght@200;300;400;700;800&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap");

.kees-app.v-application {
  // font-family: "Neuton", serif;
  font-family: "Roboto", sans-serif;
  background-color: white !important;
  min-height: 100vh;
}
</style>
