import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader
import Vue from "vue";
import Vuetify from "vuetify/lib";
import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "mdi", // default - only for display purposes
  },
  theme: {
    light: true,
    options: { customProperties: true },
    themes: {
      light: {
        primary: "white",
        secondary: "#091f24",
        accent: colors.shades.black,
        error: colors.red.accent3,
        backgroundPrimary: "#141414",
        color: "white",
      },
    },
  },
});
