import { createRouter, createWebHistory } from "vue-router";
import Login from "./views/Login.vue"; // Import views

const routes = [
  { path: "/", component: Login,
    path: "/investors", component: Investors
   }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
