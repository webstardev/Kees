<template>
  <section class="two-person-section">
    <h1 class="section-title text-center">Over de trainers</h1>
    <v-container class="main-container py-0">
      <v-row>
        <template v-if="personOne.onlyImg">
          <v-col md="6" class="person-col px-0 py-0">
            <v-img
              src="@/assets/person-4.jpg"
              width="100%"
              height="100%"
              aspect-ratio="1"
            ></v-img>
          </v-col>
        </template>
        <template v-else>
          <v-col
            md="6"
            class="person-one background-green d-flex flex-column justify-center align-center"
          >
            <v-avatar size="144px" class="mt-10">
              <img src="@/assets/person-4.jpg" alt="person" />
            </v-avatar>
            <h2 class="mt-6 white--text text-center">{{ personOne.name }}</h2>
            <p class="mt-14 white--text text-center">
              {{ personOne.description }}
            </p>
          </v-col>
        </template>
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
  props: {
    personOne: {
      type: Object,
      default: function() {
        return {
          onlyImg: true,
          imgSrc: "",
          name: "",
          description: "",
        };
      },
    },
  },
  data: () => ({
    curDate: require("moment")(new Date()).format("HH:mm:ss"),
    test: "",
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

  .person-one {
    padding: 54px 100px;

    .v-avatar {
      cursor: pointer;
    }
    h2 {
      font-size: 49px;
    }
    p {
      font-size: 40px;
      font-weight: normal;
      line-height: 1.5;
    }
  }
}
</style>
