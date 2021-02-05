<template>
  <div class="get-code-dlg">
    <template v-if="curStep === STEPS.GET_CODE">
      <v-card class="step-getcode d-flex flex-column align-center">
        <h2 class="text-center">Geef je code door</h2>
        <p class="description text-center mt-16">
          Om de content van de <b>Leadership Solutions Academy</b> te ontsluiten
          heb je een code ontvangen. <br /><br />Geef deze code hieronder in om
          jouw persoonlijke programma te starten:
          <br />
        </p>
        <v-form class="d-flex">
          <v-text-field
            class="code-input"
            label=""
            placeholder="Code"
            outlined
            height="70px"
          ></v-text-field>
          <v-btn
            class="btn-get ml-8"
            @click="curStep = STEPS.RESULT"
            color="#0d0303"
            elevation="0"
            >Verstuur</v-btn
          >
        </v-form>
        <p class="footer-description mt-16">
          Je gaat straks door een spraakmakend programma op gebied van
          leiderschap. Wij houden je tussentijds op de hoogte van informatie die
          relevant is voor jouw leerervaring. Leadership Solutions gaat
          vertrouwelijk om met jouw informatie in lijn met onze
          <a class="primary--text">privacy policy.</a>
        </p>
      </v-card>
    </template>
    <template v-else>
      <v-card class="step-result d-flex flex-column align-center">
        <v-avatar size="119px">
          <img src="@/assets/person-4.jpg" alt="Person4" />
        </v-avatar>
        <h1 class="mt-1 text-center">Gefeliciteerd!</h1>
        <p class="mb-10">Je gaat aan de slag met het curriculum over:</p>
        <h2 class="mb-10">Zelfleiderschap</h2>
        <p class="mb-10">We hebben 6 modules gekoppeld aan jouw profiel.</p>
        <carousel
          class="person-slider"
          :items="1.5"
          :dots="false"
          :margin="64"
          :loop="true"
          :nav="false"
        >
          <div class="person d-flex align-center mr-8">
            <v-img
              src="@/assets/person-1.jpg"
              alt="person 1"
              width="98px"
              height="98px"
              aspect-ratio="1"
              max-width="98px"
            ></v-img>
            <p class="ml-8">Find your leadership style in 3 steps</p>
          </div>
          <div class="person d-flex align-center mr-8">
            <v-img
              src="@/assets/person-1.jpg"
              alt="person 1"
              width="98px"
              height="98px"
              aspect-ratio="1"
              max-width="98px"
            ></v-img>
            <p class="ml-8">Find your leadership style in 3 steps</p>
          </div>
          <div class="person d-flex align-center mr-8">
            <v-img
              src="@/assets/person-1.jpg"
              alt="person 1"
              width="98px"
              height="98px"
              aspect-ratio="1"
              max-width="98px"
            ></v-img>
            <p class="ml-8">Find your leadership style in 3 steps</p>
          </div>
          <div class="person d-flex align-center mr-8">
            <v-img
              src="@/assets/person-1.jpg"
              alt="person 1"
              width="98px"
              height="98px"
              aspect-ratio="1"
              max-width="98px"
            ></v-img>
            <p class="ml-8">Find your leadership style in 3 steps</p>
          </div>
          <div class="person d-flex align-center mr-8">
            <v-img
              src="@/assets/person-1.jpg"
              alt="person 1"
              width="98px"
              height="98px"
              aspect-ratio="1"
              max-width="98px"
            ></v-img>
            <p class="ml-8">Find your leadership style in 3 steps</p>
          </div>
        </carousel>
        <v-btn class="btn-outline-secondary mt-16" color="#0d0303"
          >Start direct</v-btn
        >
      </v-card>
    </template>
  </div>
</template>

<script>
import carousel from "vue-owl-carousel";

export default {
  name: "get-code-dlg",
  components: { carousel },

  data: () => ({
    STEPS: { GET_CODE: 0, RESULT: 1 },
    curStep: 0,
  }),
};
</script>

<style scoped lang="scss">
$text-field-outlined-fieldset-border-width: 2px;

.get-code-dlg {
  width: 100%;
  max-width: 757px;
}
.step-getcode {
  padding: 59px 35px 41px 49px;
  border: solid 1px #707070;
  border-radius: 0;
  .v-avatar {
    border-radius: 50% !important;
  }
  h2 {
    font-size: 50px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.4;
    color: #011014;
  }
  .description {
    font-size: 25px;
    font-weight: normal;
    line-height: 1.6;
    color: #0d0303;
    max-width: 544px;
  }
  .code-input {
    width: 245px;
  }
  .btn-get {
    width: 146px;
    height: 70px;
    border-radius: 8px;
    border: solid 2px #0d0303;
    background-color: #0d0303;
    color: white;
  }
  .footer-description {
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.31;
  }
}

.step-result {
  padding: 47px 0 53px;
  border: solid 1px #707070;
  background-color: #ffffff;
  border-radius: 0;
  background-image: url("../../../assets/dot-back.svg");
  background-repeat: no-repeat;
  background-position: center 20px;
  .v-avatar {
    border-radius: 50% !important;
  }
  h1 {
    font-size: 60px;
    letter-spacing: 3px;
    color: #000;
    margin-bottom: 100px;
  }
  h2 {
    color: #0d0303;
  }
  p {
    font-size: 20px;
    font-weight: normal;
    font-style: normal;
    line-height: 1.3;
    color: #a8a8a8;
  }
  .btn-outline-secondary {
    border-color: #0d0303 !important;
    width: 245px;
    height: 70px;
  }
  .person-slider {
    width: 540px;
    .person {
      width: 360px;
      height: 100px;
      padding: 1px 38px 1px 1px;
      box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.05);
      border: solid 1px #ebebeb;
      background-color: #ffffff;
      cursor: pointer;

      p {
        color: #091f24;
        max-width: 180px;
      }
    }
  }
}
</style>
