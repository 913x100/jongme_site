import axios from "axios";
import { config } from "@/config.js";

export default {
  serviceSlots(id, page_id) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${config.apiUrl}/service/slots/${id}/${page_id}`)
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
  },
  getServiceByID(id) {
    return new Promise((resolve, reject) => {
      axios
        .get(`${config.apiUrl}/service/?_id=${id}`)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
          reject(err);
        });
    });
  },
  createService() {
    return new Promise((resolve, reject) => {
      axios
        .post(`${config.apiUrl}/service`, {
          is_active: true,
          page_id: "110030743746925"
        })
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
          reject(err);
        });
    });
  },

  updateService(id, data) {
    return axios.post(`${config.apiUrl}/service/${id}`, data);
  }
};
