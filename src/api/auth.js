import axios from "axios";
import { config } from "@/config.js";

export default {
  fb(code) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${config.apiUrl}/auth/fb?code=${code}`)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
          reject(err);
        });
    });
  },

  pages() {
    return new Promise((resolve, reject) => {
      axios
        .get(`${config.apiUrl}/auth/pages`)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
          reject(err);
        });
    });
  },

  selectPage(id) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${config.apiUrl}/auth/page/${id}`)
        .then(res => {
          // console.log(res);
          resolve(res);
        })
        .catch(err => {
          console.log(err);
          reject(err);
        });
    });
  }
};
