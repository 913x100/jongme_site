import axios from "axios";
import { config } from "@/config.js";

export default {
  getPage(id) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${config.apiUrl}/page/${id}`)
        .then(res => {
          console.log(res);
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};
