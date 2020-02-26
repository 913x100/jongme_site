import axios from "axios";

import store from "@/store";

import auth from "./auth";
import booking from "./booking";
import service from "./service";
import page from "./page";

axios.interceptors.request.use(config => {
  const token = store.getters["page/token"] || store.getters["auth/token"];

  config.headers["Access-Control-Allow-Origin"] = "*";
  config.headers["Authorization"] = `Bearer ${token}`;
  config.timeout = 5000;
  return config;
});

export default { auth, booking, service, page };
