<template>
  <v-container fluid class="px-0 py-0">
    <top-navbar></top-navbar>
  </v-container>
</template>

<script>
import TopNavbar from "@/views/components/TopNavbar.vue";
export default {
  components: { TopNavbar },
  name: "info-page",
};
</script>
