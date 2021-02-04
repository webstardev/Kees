<template>
  <v-app-bar
    class="kees-navbar"
    :color="$vuetify.theme.themes.light.backgroundPrimary"
  >
    <router-link :to="{ name: 'info' }">
      <v-img src="@/assets/logo.svg" width="140px" height="40px" />
    </router-link>
    <h3 class="username ml-auto primary--text">MARCEL</h3>
    <v-avatar class="user-avatar" color="white" size="57px"></v-avatar>
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
  height: var(--navbarHeight) !important;
  flex: 0 0 var(--navbarHeight);
  position: fixed;
  top: 0;

  .v-toolbar__content {
    padding: 0;
  }
  .username {
    font-size: 20px;
  }
  .user-avatar {
    margin-left: 38px;
  }
}
</style>
