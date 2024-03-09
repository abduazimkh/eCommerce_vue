import { createRouter, createWebHistory } from 'vue-router';
import Home from "../pages/home/Home.vue";
import Single from "../pages/single-product/SingleProducts.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/single/:id",
    name: "single",
    component: Single,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router