import { createRouter, createWebHistory } from 'vue-router';
import Home from "../pages/home/Home.vue";
import Single from "../pages/single-product/SingleProducts.vue";
import Dashboard from "./dashboard/Dashboard.vue";
import ManageProduct from './dashboard/manage-product/ManageProduct.vue';
import ManageCategory from './dashboard/manage-category/ManageCategory.vue';
import ManageUsers from './dashboard/manage-users/ManageUsers.vue';

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
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    children: [
      {
        path: "",
        component: ManageProduct,
      },
      {
        path: "categories",
        component: ManageCategory,
      },
      {
        path: "users",
        component: ManageUsers,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router