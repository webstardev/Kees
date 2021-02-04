import Info from "@/views/pages/Info/index";

const routes = [
  {
    path: "/",
    name: "info",
    component: Info,
    meta: {
      title: "Kees Info",
      requiresAuth: true,
    },
  },
];

export default routes;
