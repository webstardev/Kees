<template>
  <v-container fluid class="info-container d-flex flex-column px-0 py-0">
    <top-navbar></top-navbar>
    <section class="banner d-flex justify-center align-center">
      <div
        class="section-content d-flex flex-column justify-center align-center"
      >
        <h1 class="text-center white--text">
          Hi {{ personName }}, <br /><br />Welkom bij Leadership Solutions!
        </h1>
        <h3 class="text-center white--text mt-8">
          Het platform waar jij kunt ontdekken hoe je succesvol kunt zijn op het
          gebied van leiderschap.
        </h3>
        <v-btn
          class="btn-get mt-16 mb-2 btn-primary-outline"
          outlined
          color="#fff"
          @click="showGetCodeDlg"
          >Geef je code door</v-btn
        >
      </div>
      <v-container class="main-container banner-footer px-0 py-0">
        <v-row class="px-0 py-0">
          <v-col md="3">
            <div class="footer-item d-flex flex-row">
              <v-img
                contain
                src="@/assets/check-circle.svg"
                max-width="20px"
                width="20px"
                height="20px"
                alt="check circle"
              />
              <p class="white--text py-0 my-0 ml-3">
                24 lessen over<br />
                persoonlijk leiderschap
              </p>
            </div>
          </v-col>
          <v-col md="3">
            <div class="footer-item d-flex flex-row">
              <v-img
                contain
                src="@/assets/check-circle.svg"
                width="20px"
                max-width="20px"
                height="20px"
                alt="check circle"
              />
              <p class="white--text py-0 my-0 ml-3">
                Ga verder waar je <br />gebleven bent.
              </p>
            </div>
          </v-col>
          <v-col md="3">
            <div class="footer-item d-flex flex-row">
              <v-img
                contain
                src="@/assets/check-circle.svg"
                width="20px"
                max-width="20px"
                height="20px"
                alt="check circle"
              />
              <p class="white--text py-0 my-0 ml-3">
                Spraakmakende<br />
                webinars en live events
              </p>
            </div>
          </v-col>
          <v-col md="3">
            <div class="footer-item d-flex flex-row">
              <v-img
                contain
                src="@/assets/check-circle.svg"
                width="20px"
                max-width="20px"
                height="20px"
                alt="check circle"
              />
              <p class="white--text py-0 my-0 ml-3">
                Inclusief werkboeken om<br />
                verder te verdiepeIn
              </p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </section>
    <person-section></person-section>
    <two-person-section></two-person-section>
    <info-footer> </info-footer>
  </v-container>
</template>

<script>
import TopNavbar from "@/views/components/TopNavbar.vue";
import InfoFooter from "@/views/components/InfoFooter.vue";
import PersonSection from "./PersonSection.vue";
import TwoPersonSection from "./TwoPersonSection.vue";
import GetCodeDlg from "./GetCodeDlg.vue";

export default {
  components: {
    TopNavbar,
    InfoFooter,
    PersonSection,
    TwoPersonSection,
    GetCodeDlg,
  },
  name: "info-page",
  data: () => ({
    personName: "Marcel",
  }),
  methods: {
    showGetCodeDlg() {
      this.$dialog.show(GetCodeDlg, {
        width: "757px",
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.info-container {
  min-height: 100vh;
  .banner {
    position: relative;
    background: url("../../../assets/info-banner.jpg") no-repeat center center;
    background-size: cover;
    height: calc(100vh - var(--navbarHeight));
    margin-top: var(--navbarHeight);
    min-height: 680px;

    .section-content {
      max-width: 900px;

      h1 {
        line-height: 70px;
        font-size: 60px;
        font-family: "Neuton", serif;
        font-weight: bold;
      }
      h3 {
        font-size: 30px;
        line-height: 1.67;
        font-weight: normal;
      }
    }
    .banner-footer {
      position: absolute;
      bottom: 20px;
      width: 100%;

      @media screen and (max-width: 1900px) {
        bottom: 0;
      }

      .footer-item {
        position: relative;
        .v-image {
          position: absolute;
          left: -20px;
          top: 4px;
        }
        p {
          font-size: 20px;
        }
      }
    }
  }
}
</style>
