const state = {
  token: localStorage.getItem("userToken") || undefined
};

const actions = {
  login({ commit }, code) {
    return new Promise((resolve, reject) => {});
  }
};

const mutations = {};

const getters = {};

export default {
  state,
  actions,
  mutations,
  getters
};
