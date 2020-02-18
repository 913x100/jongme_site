import Vue from "vue";
import Vuex from "vuex";

import Auth from "./User/auth";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    Auth
  }
});

export default store;
