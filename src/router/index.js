import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import Detail from "../views/Detail.vue";
import MyList from "../views/MyList.vue";
import About from "../views/About.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
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
