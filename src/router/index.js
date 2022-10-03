import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    // eslint-disable-next-line prettier/prettier
    component: Home
  },
  {
    path: "/about",
    name: "detail",
    // eslint-disable-next-line prettier/prettier
    component: () => import("../views/Detail/Detail.vue")
  },
  {
    path: "/pokemon/:id",
    name: "pokemon",
    component: () => import("../views/Detail/PokemonDetail.vue"),
    props: (route) => {
      return {
        // eslint-disable-next-line prettier/prettier
        route
      };
      // eslint-disable-next-line prettier/prettier
    }
    // eslint-disable-next-line prettier/prettier
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  // eslint-disable-next-line prettier/prettier
  routes
});

export default router;
