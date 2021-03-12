import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ManageCart from "../views/ManageCart.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/ManageCart",
    name: "ManageCart",
    component: ManageCart
  },
  {
    path: "/ManageProducts",
    name: "ManageProducts",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/ManageProducts.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
