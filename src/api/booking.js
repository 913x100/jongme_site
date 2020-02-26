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
          console.log(res);
          resolve(res);
        })
        .catch(err => {
          reject(err);
        });
    });
  }
};
