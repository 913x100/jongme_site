import api from "@/api";

const state = {
  token: localStorage.getItem("userToken") || undefined
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
  selectPage({ commit }, page) {
    return new Promise((resolve, reject) => {
      api.auth
        .selectPage(page.id)
        .then(res => {
          const token = res.data.token;
          commit("page/select_success", token, { root: true });
          commit("page/setPage", page, { root: true });
          resolve(token);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  logout({ commit }) {
    commit("auth/logout", { root: true });
    commit("page/logout", { root: true });
  }
};

const mutations = {
  auth_success(state, token) {
    localStorage.setItem("userToken", token);
    state.token = token;
  },
  logout(state) {
    localStorage.removeItem("userToken");
    state.token = "";
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
