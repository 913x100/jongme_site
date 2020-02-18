import Vue from "vue";
import Router from "vue-router";

import store from "@/store";

import DashboardLayout from "@/layouts/DashboardLayout";

import { config } from "@/config";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      component: DashboardLayout,
      children: [
        {
          path: "",
          component: () => import("@/pages/Index")
        }
      ]
    },
    {
      path: "/login",
      component: () => import("@/pages/Login")
    },
    {
      path: "/auth",
      beforeEnter: to => {
        if (to.query.code) {
          store.dispatch("login", to.query.code).then(res => {
            opener.postMessage(res, config.appUrl);
            window.close();
          });
        }
      }
    }
  ]
});
