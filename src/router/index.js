import InfoOne from "@/views/pages/Info/InfoOne";
import InfoTwo from "@/views/pages/Info/InfoTwo";

const routes = [
  {
    path: "/",
    name: "info",
    component: InfoOne,
    meta: {
      title: "Kees Info",
      requiresAuth: true,
    },
  },
  {
    path: "/info-two",
    name: "info-two",
    component: InfoTwo,
    meta: {
      title: "Kees Info",
      requiresAuth: true,
    },
  },
];

export default routes;
