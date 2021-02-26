import Vue from "vue";
import VueRouter from "vue-router";
import MainComponent from "../views/MainComponent.vue";
import SecondComponent from "../views/SecondComponent.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Main",
    component: MainComponent,
  },
  {
    path: "/second",
    name: "Second",
    component: SecondComponent,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
