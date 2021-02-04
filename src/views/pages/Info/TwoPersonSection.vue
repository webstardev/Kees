<template>
  <section class="two-person-section">
    <h1 class="section-title text-center">Over de trainers</h1>
    <v-container class="main-container py-0">
      <v-row>
        <v-col md="6" class="person-col px-0 py-0 person-col-second">
          <v-img
            src="@/assets/person-4.jpg"
            width="100%"
            height="100%"
            aspect-ratio="1"
          ></v-img>
        </v-col>
        <v-col md="6" class="person-col px-0 py-0">
          <v-img
            src="@/assets/person-5.jpg"
            width="100%"
            height="100%"
            aspect-ratio="1"
          ></v-img>
        </v-col>
        <v-col md="12" class="d-flex flex-column align-center">
          <h1 class="timer mt-8">{{ curDate }}</h1>
          <h1 class="mt-3">Your journey starts now</h1>
          <v-btn class="btn-outline-secondary mt-15 mb-16" color="#070000"
            >Geef je code door
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "two-person-section",
  data: () => ({
    curDate: new Date(),
  }),
  methods: {
    todo: function() {
      const self = this;
      this.intervalid1 = setInterval(function() {
        self.curDate = require("moment")(new Date()).format("HH:mm:ss");
      }, 1000);
    },
  },
  mounted() {
    this.todo();
  },
};
</script>

<style lang="scss" scoped>
.two-person-section {
  .section-title {
    width: 100%;
    padding: 121px 0;
    background-color: #fcfafa;
  }
  .main-container {
    max-width: 1400px;
  }
  .person-col {
    &.person-col-second {
      background-color: var(--backgroundGreen);
    }
  }

  h1 {
    color: #011014;
  }
  .timer {
    font-size: 90px;
    font-weight: bold;
  }
}
</style>
