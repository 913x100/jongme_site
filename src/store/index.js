import Vue from "vue";
import Vuex from "vuex";

import auth from "./modules/auth";
import page from "./modules/page";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    auth,
    page
  }
});

export default store;
