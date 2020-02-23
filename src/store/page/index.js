const state = {
  token: localStorage.getItem("pageToken") || undefined
};

const actions = {};

const mutations = {
  select_success(state, token) {
    localStorage.setItem("pageToken", token);
    state.token = token;
  }
};

const getters = {
  token: state => state.token
};

const page = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};

export default page;
