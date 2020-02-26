const state = {
  token: localStorage.getItem("pageToken") || undefined,
  page_name: localStorage.getItem("pageName") || undefined,
  page_id: localStorage.getItem("pageID") || undefined
};

const actions = {};

const mutations = {
  select_success(state, token) {
    localStorage.setItem("pageToken", token);
    state.token = token;
  },
  setPage(state, page) {
    localStorage.setItem("pageName", page.name);
    state.page_name = page.name;
    localStorage.setItem("pageID", page.id);
    state.page_id = page.id;
  }
};

const getters = {
  token: state => state.token,
  page_id: state => state.page_id,
  page_name: state => state.page_name
};

const page = {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};

export default page;
