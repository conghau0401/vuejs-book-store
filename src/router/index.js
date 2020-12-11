import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/product-detail",
    name: "ProductDetail",
    component: () => import("../views/ProductDetail.vue")
  },
  {
    path: "/list-product",
    name: "ListProduct",
    component: () => import("../views/ListProduct.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
