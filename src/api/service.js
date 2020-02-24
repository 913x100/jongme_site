import axios from "axios";
import { config } from "@/config.js";

export default {
  serviceSlots(id) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${config.apiUrl}/service/slots/${id}`)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
          reject(err);
        });
    });
  },
  getServiceByPage(page_id) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${config.apiUrl}/service/?page_id=${page_id}`)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
          reject(err);
        });
    });
  }
};
