import axios from "axios";
import { config } from "@/config.js";

export default {
  getBookingByService(id, year, month, day) {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `${config.apiUrl}/booking/?service_id=${id}&year=${year}&month=${month}&day=${day}`
        )
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  getBookingByStatus(page_id, year, month, status) {
    return new Promise((resolve, reject) => {
      axios
        .get(
          `${config.apiUrl}/booking/filter/?page_id=${page_id}&year=${year}&month=${month}&status=${status}`
        )
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  sendSuccessMessage(booking) {
    return new Promise((resolve, reject) => {
      axios
        .post(`${config.apiUrl}/fb/success`, booking)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          console.log(err);
          reject(err);
        });
    });
  },
  updateBooking(id, data) {
    return new Promise((resolve, reject) => {
      axios
        .put(`${config.apiUrl}/booking/${id}`, data)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  },
  deleteBooking(id) {
    return new Promise((resolve, reject) => {
      axios
        .delete(`${config.apiUrl}/booking/${id}`)
        .then(res => {
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};
