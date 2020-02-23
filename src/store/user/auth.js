import api from "@/api";

const state = {
  token: localStorage.getItem("userToken") || undefined,
  pages: []
};

const actions = {
  login({ commit }, code) {
    return new Promise((resolve, reject) => {
      api.auth
        .fb(code)
        .then(res => {
          const token = res.data.token;
          commit("auth_success", token);
          resolve(token);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  pages() {
    return new Promise((resolve, reject) => {
      api.auth
        .pages()
        .then(res => {
          resolve(res.data);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  selectPage({ commit }, id) {
    return new Promise((resolve, reject) => {
      console.log(id);
      api.auth
        .selectPage(id)
        .then(res => {
          commit();
          const token = res.data.token;
          resolve(token);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};

const mutations = {
  auth_success(state, token) {
    localStorage.setItem("userToken", token);
    state.token = token;
  }
};

const getters = {
  token: state => state.token
};

const auth = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};

export default auth;
