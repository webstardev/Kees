<template>
  <section>
    <v-container class="main-container px-0 py-0">
      <v-row class="person-row">
        <v-col md="6" class="d-flex align-center justify-center">
          <div class="d-flex flex-column person-content pl-2 pr-16 ">
            <h1 class="secondary--text">
              Wat leuk dat we deze<br />
              reis samen aan gaan
            </h1>
            <h4 class="secondary--text mt-16">
              Zoek je de juiste handvatten om echt door te zetten? Ben jij klaar
              voor de volgende stap in je carrière? Ik geloof in jouw succes!
              Samen gaan we aan de slag met ingrediënten voor persoonlijke
              groei.
            </h4>
            <p class="mt-14">
              <b>Angelien Landstra</b> – Founder Leadership Solutions
            </p>
          </div>
        </v-col>
        <v-col class="px-0 py-0 person-img-div">
          <v-img
            class="right-img"
            src="@/assets/person1.jpg"
            width="50vw"
            max-width="50vw"
            height="50vw"
            aspect-ratio="1"
          />
        </v-col>
      </v-row>
      <v-row class="person-row">
        <v-col class="px-0 py-0 person-img-div">
          <v-img
            class="left-img"
            src="@/assets/person2.jpg"
            width="50vw"
            max-width="50vw"
            height="50vw"
            aspect-ratio="1"
          />
        </v-col>
        <v-col md="6" class="d-flex align-center justify-center">
          <div class="hover-div"></div>
          <div class="d-flex flex-column person-content pl-16  pr-2">
            <h1 class="primary--text">
              Ieder deel van de training heeft een werkboek
            </h1>
            <h4 class="primary--text mt-16">
              Zo verdiep je de materie en krijg je praktische opdrachten om het
              geleerde meteen in de praktijk te brengen.
            </h4>
            <v-btn outlined class="mt-14 btn-primary-outline" color="white">
              Download het eerste werkboek
            </v-btn>
          </div>
        </v-col>
      </v-row>
      <v-row class="person-row">
        <v-col md="6" class="d-flex align-center justify-center">
          <div class="d-flex flex-column person-content pl-2 pr-16 ">
            <h1 class="secondary--text">
              Spraakmakende<br />webinars & events
            </h1>
            <h4 class="secondary--text mt-16">
              In het programma wordt je geregeld uitgenodigd voor webinars,
              ask-me-anything calls en live events. Heb je gerichte vragen of
              uitdagingen? Stel ze in de webinars en je krijgt persoonlijk
              advies.
            </h4>
          </div>
        </v-col>
        <v-col class="px-0 py-0 person-img-div">
          <v-img
            class="right-img"
            src="@/assets/person_stock.jpg"
            width="50vw"
            max-width="50vw"
            height="50vw"
            aspect-ratio="1"
          />
        </v-col>
      </v-row>
      <v-row class="person-row">
        <v-col class="px-0 py-0 person-img-div">
          <v-img
            class="left-img"
            src="@/assets/person2.jpg"
            width="50vw"
            max-width="50vw"
            height="50vw"
            aspect-ratio="1"
          />
        </v-col>
        <v-col md="6" class="d-flex align-center justify-center">
          <div class="hover-div"></div>
          <div class="d-flex flex-column person-content pl-16  pr-2">
            <h1 class="primary--text">
              Leer met iedere device, waar je ook bent op eigen tempo
            </h1>
            <h4 class="primary--text mt-16">
              Wisselen van laptop naar tablet of mobiel? Geen enkel probleem!
              Log in met je andere device en je kunt meteen verder waar je
              gebleven was. Wel zo handig.
            </h4>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
<script>
export default {
  name: "person-row",
};
</script>

<style scoped lang="scss">
.person-row {
  height: 50vw;
  position: relative;
  .hover-div {
    position: absolute;
    left: 50%;
    top: 0;
    width: 50vw;
    height: 50vw;
    background-color: #256d7e;
  }
}

.person-content {
  position: relative;
  h1 {
    font-size: 70px;
    line-height: 1;
    font-family: "Neuton", serif;
    font-weight: bold;
  }
  h4 {
    font-size: 35px;
    line-height: 1.57;
    font-weight: normal;
  }
  p {
    font-size: 28px;
    line-height: 1.79;
    font-weight: normal;
  }
}
.person-img-div {
  position: relative;
  height: 50vw;
  .v-image {
    position: absolute;
    top: 0;
    &.left-img {
      right: 0;
    }

    &.right-img {
      left: 0;
    }
  }
}
</style>
