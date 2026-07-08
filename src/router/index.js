import { createRouter, createWebHistory } from "vue-router";

import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import AdminDashboard from "@/views/admin/AdminDashboard.vue";
import MovieManagement from "@/views/admin/MovieManagement.vue";
import AddMovie from "@/views/admin/AddMovie.vue";
import EditMovie from "@/views/admin/EditMovie.vue";
import { useAuthStore } from "@/stores/authStore";

import Home from "../views/Home.vue";
import Detail from "../views/Detail.vue";
import MyList from "../views/MyList.vue";
import About from "../views/About.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
  {
    path:"/admin",
    component:AdminDashboard
  },
  {
    path: "/admin/movies",
    component: MovieManagement,
  },
  {
    path: "/admin/movie/add",
    component: AddMovie,
  },
  {
  path: "/admin/movie/edit/:id",
  component: EditMovie,
  },
  {
  path: "/admin",
  component: AdminDashboard,
  meta: {
    requiresAdmin: true,
  },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
      path: "/",
      name: "home",
      component: Home,
  },
  {
      path: "/movie/:id",
      name: "detail",
      component: Detail,
  },
  {
    path: "/my-list",
    name: "MyList",
    component: MyList,
  },
  {
    path: "/about",
    name: "about",
    component: About,
  },
],
});

export default router;

router.beforeEach((to, from, next) => {

  const authStore = useAuthStore();

  if (to.meta.requiresAdmin) {

    if (!authStore.user) {
      return next("/login");
    }

    if (authStore.user.role !== "admin") {
      return next("/");
    }

  }

  next();

});
