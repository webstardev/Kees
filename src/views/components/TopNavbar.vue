<template>
  <v-app-bar
    class="kees-navbar"
    :color="$vuetify.theme.themes.light.background"
  >
    <router-link :to="{ name: 'info' }">
      <v-img src="@/assets/logo.svg" width="140" height="40" />
    </router-link>
    <h3 class="username ml-auto">MARCEL</h3>
    <v-avatar class="user-avatar" color="white" size="57"></v-avatar>
  </v-app-bar>
</template>

<script>
export default {
  name: "kee-top-navbar",
};
</script>

<style lang="scss">
.kees-navbar {
  padding: 18px 42px 18px 34px;
  height: auto !important;
  .v-toolbar__content {
    padding: 0;
  }
  .username {
    color: white;
  }
  .user-avatar {
    margin-left: 38px;
  }
}
</style>
