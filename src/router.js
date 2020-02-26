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
        },
        {
          path: "/setting/page",
          component: () => import("@/pages/Setting/PageSetting")
        },
        {
          path: "/setting/service",
          component: () => import("@/pages/Setting/ServiceSetting")
        },
        {
          path: "/dashboard",
          component: () => import("@/pages/Dashboard/Dashboard")
        }
      ]
    },
    {
      path: "/login",
      component: () => import("@/pages/Login")
    },
    {
      path: "/select",
      component: () => import("@/pages/SelectPage")
    },
    {
      path: "/booking/time",
      component: () => import("@/pages/Booking/Time")
    },
    {
      path: "/booking/:page_id/:service_id/:user_id",
      component: () => import("@/pages/Booking/Facebook")
    },
    {
      path: "/auth",
      beforeEnter: to => {
        if (to.query.code) {
          store.dispatch("auth/login", to.query.code).then(res => {
            opener.postMessage(res, config.appUrl);
            window.close();
          });
        }
      }
    },
    {
      path: "/booking",
      component: () => import("@/pages/Booking")
    },
    {
      path: "/selectpage",
      component: () => import("@/pages/PageSelection")
    },
    {
      path: "/dashboard",
      component: () => import("@/pages/Dashboard")
    }
  ]
});
