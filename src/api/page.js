import axios from "axios";
import { config } from "@/config.js";

export default {
  getPage(id) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${config.apiUrl}/page/${id}`)
        .then(res => {
          // console.log(res);
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  updatePage(id, data) {
    return new Promise((resolve, reject) => {
      axios
        .put(`${config.apiUrl}/page/${id}`, data)
        .then(res => {
          // console.log(res);
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};
