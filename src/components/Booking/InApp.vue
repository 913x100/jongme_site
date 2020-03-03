<template>
  <div>
    <a-spin :spinning="loading">
      <div class="container">
        <a-card style="width: 375px; height:auto" :bordered="false">
          <a-steps :current="current">
            <a-step v-for="item in steps" :key="item.content" />
          </a-steps>
          <div class="steps-content">
            <div v-if="current == 0">
              <div class="function_head">Which service do you want ?</div>
              <a-button
                v-for="service in services"
                :key="service._id"
                :style="{ marginBottom: '10px' }"
                style="border-radius:50vw;border: 1.5px solid #C4C4C4;
box-sizing: border-box;box-shadow:none;font-size: 17px;color: #B3B3B3;"
                v-on:click="setService(service)"
                block
              >{{ service.name }}</a-button>
            </div>
            <div v-if="current == 1">
              <div class="function_head">Pick a date</div>
              <a-row type="flex" justify="center" style="marginBottom: 20px;">
                <a-date-picker
                  format="YYYY-MM-DD"
                  :disabledDate="disabledDate"
                  @change="onSelectDate"
                />
              </a-row>
            </div>
            <div v-if="current == 2">
              <a-row class="function_head">Choose booking time</a-row>
              <div class="flex">
                <div class="flex-item">
                  <a-row>
                    <a-col class="function_date">{{day1}} / {{month1}}</a-col>
                    <a-col
                      class="slot-checkbox"
                      v-for="slot in serviceSlots(year1, month1, day1,bookings1)"
                      :key="slot.time"
                    >
                      <input
                        type="checkbox"
                        name="checkbox1"
                        :id="'checkbox1_'+slot.time"
                        :disabled="slot.disabled"
                        :value="slot.value"
                        v-model="choose_slot1"
                      />
                      <label :for="'checkbox1_'+slot.time" class="text-caption">{{slot.time}}</label>
                    </a-col>
                  </a-row>
                </div>
                <div class="flex-item">
                  <a-row>
                    <a-col class="function_date">{{day2}} / {{month2}}</a-col>
                    <a-col
                      class="slot-checkbox"
                      v-for="slot in serviceSlots(year2, month2, day2, bookings2)"
                      :key="slot.time"
                    >
                      <input
                        type="checkbox"
                        name="checkbox2"
                        :id="'checkbox2_'+slot.time"
                        :disabled="slot.disabled"
                        :value="slot.value"
                        v-model="choose_slot2"
                      />
                      <label :for="'checkbox2_'+slot.time" class="text-caption">{{slot.time}}</label>
                    </a-col>
                  </a-row>
                </div>
                <div class="flex-item">
                  <a-row>
                    <a-col class="function_date">{{day3}} / {{month3}}</a-col>
                    <a-col
                      class="slot-checkbox"
                      v-for="slot in serviceSlots(year3, month3, day3, bookings3)"
                      :key="slot.time"
                    >
                      <input
                        type="checkbox"
                        name="checkbox3"
                        :id="'checkbox3_'+slot.time"
                        :disabled="slot.disabled"
                        :value="slot.value"
                        v-model="choose_slot3"
                      />
                      <label :for="'checkbox3_'+slot.time" class="text-caption">{{slot.time}}</label>
                    </a-col>
                  </a-row>
                </div>
              </div>
            </div>
            <div v-if="current == 3">
              <div class="function_head">Enter your information</div>

              <a-row>
                <a-col style="marginBottom: 20px">
                  <a-input placeholder="Enter your name" size="large" v-model="username" />
                </a-col>
                <a-col style="marginBottom: 20px">
                  <a-input placeholder="Enter your phone number" size="large" v-model="phone" />
                </a-col>
              </a-row>
            </div>
          </div>
          <div class="steps-action">
            <a-row class="pageBtn" type="flex" justify="space-between">
              <a-button
                class="back"
                style="height: 36px;border-radius:50px;"
                v-if="current>0"
                @click="prev"
              >Previous</a-button>

              <a-button
                class="next"
                style="height: 36px;border-radius:50px;"
                v-if="current < steps.length - 1 && current != 0"
                type="primary"
                @click="next"
              >Next</a-button>
              <a-button
                class="next"
                style="height: 36px;border-radius:50px;"
                v-if="current == steps.length - 1"
                type="primary"
                @click="book"
              >Done</a-button>
            </a-row>
          </div>
        </a-card>
      </div>
    </a-spin>
  </div>
</template>
<script>
import api from "@/api";
import axios from "axios";
import moment from "moment";
import { config } from "@/config.js";
import store from "@/store";

export default {
  components: {},
  data() {
    return {
      loading: false,
      visible: false,
      services: [],
      slots: [],
      service: {},
      page: {},
      bookings1: [],
      bookings2: [],
      bookings3: [],
      current: 0,
      steps: [
        {
          title: "",
          content: "First-content"
        },
        {
          title: "",
          content: "Second-content"
        },
        {
          title: "",
          content: "Last-content"
        },
        {
          title: "",
          content: "aa"
        }
      ],
      choose_slot1: [],
      choose_slot2: [],
      choose_slot3: [],
      year1: "",
      year2: "",
      year3: "",
      month1: "",
      month2: "",
      month3: "",
      day1: "",
      day2: "",
      day3: "",
      page_id: "",
      service_id: "",
      user_id: "",
      phone: ""
    };
  },
  computed: {},
  created() {
    this.page_id = store.getters["page/page_id"];
    this.getService();
    this.getPage();
    // this.page_id = this.$route.params.page_id;
    // this.service_id = this.$route.params.service_id;
    // this.user_id = this.$route.params.user_id;
  },
  methods: {
    moment,
    range(start, end) {
      const result = [];
      for (let i = start; i <= end; i++) {
        result.push(i);
      }
      return result;
    },
    getPage() {
      const page_id = store.getters["page/page_id"];
      api.page
        .getPage(page_id)
        .then(res => {
          // console.log(res.data);
          this.page = res.data;

          // console.log(this.page);
        })
        .catch(err => {
          console.log(err);
          console.log("error");
        });
    },
    disabledDate(current) {
      // Can not select days before today and today
      return (
        current <
          moment()
            .add(-1, "day")
            .endOf("day") ||
        (current.day() == 0 && this.page.sun == false) ||
        (current.day() == 1 && this.page.mon == false) ||
        (current.day() == 2 && this.page.tue == false) ||
        (current.day() == 3 && this.page.wed == false) ||
        (current.day() == 4 && this.page.thu == false) ||
        (current.day() == 5 && this.page.fri == false) ||
        (current.day() == 6 && this.page.sat == false)
      );
    },

    onSelectDate(date, dateString) {
      const r1 = moment(dateString)
        .add(-1, "day")
        .format("YYYY-MM-DD")
        .split("-");
      const r2 = dateString.split("-");
      const r3 = moment(dateString)
        .add(1, "day")
        .format("YYYY-MM-DD")
        .split("-");

      this.year1 = r1[0];
      this.month1 = r1[1];
      this.day1 = r1[2];

      this.year2 = r2[0];
      this.month2 = r2[1];
      this.day2 = r2[2];

      this.year3 = r3[0];
      this.month3 = r3[1];
      this.day3 = r3[2];
    },

    getServiceSlots() {
      const page_id = store.getters["page/page_id"];

      this.loading = true;
      api.service.serviceSlots(this.service._id, page_id).then(res => {
        this.slots = res.data || [];
        this.loading = false;
      });
    },

    getBookingByService() {
      api.booking
        .getBookingByService(
          this.service._id,
          this.year1,
          this.month1,
          this.day1
        )
        .then(res => {
          this.bookings1 = res.data;
        });

      api.booking
        .getBookingByService(
          this.service._id,
          this.year2,
          this.month2,
          this.day2
        )
        .then(res => {
          this.bookings2 = res.data;
        });

      api.booking
        .getBookingByService(
          this.service._id,
          this.year3,
          this.month3,
          this.day3
        )
        .then(res => {
          this.bookings3 = res.data;
        });
    },

    getServiceByID() {
      api.service.getServiceByID(this.service._id).then(res => {
        this.service = res.data[0];
      });
    },
    next() {
      if (this.current == 1) {
        this.getServiceSlots();
        // this.getBookingByService();
        // this.getServiceByID();
      }

      this.current++;
    },
    prev() {
      this.current--;
    },
    getService() {
      const page_id = store.getters["page/page_id"];
      api.service
        .getServiceByPage(page_id)
        .then(res => {
          if (res.data != null) {
            this.services = res.data;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    serviceSlots(year, month, day, bookings) {
      let slots = this.slots.map(slot => {
        // console.log(slot);
        let found = undefined;
        if (bookings != null) {
          found = bookings.find(
            book => book._id == slot && book.count >= this.service.unit_quantity
          );
        }

        if (
          found != undefined ||
          moment(year + "-" + month + "-" + day).endOf("day") <
            moment().endOf("day") ||
          (this.page.is_break == true &&
            slot >= this.page.break_start &&
            slot <= this.page.break_end)
        ) {
          return {
            time: slot.slice(0, 5), //00:00
            value: slot,
            disabled: true
          };
        } else {
          return {
            time: slot.slice(0, 5), //00:00
            value: slot,
            disabled: false
          };
        }
      });
      return slots;
    },

    async book() {
      console.log("book");
      let booking1 = this.choose_slot1.map(async slot => {
        console.log("update 1");
        // let book = { ...this.booking };
        // book.time = slot;
        let book = {
          page_id: this.page_id,
          user_id: this.user_id,
          service_id: this.service._id,
          name: this.service.name,
          status: 0,
          year: this.year1,
          month: this.month1,
          day: this.day1,
          time: slot,
          phone: this.phone
        };
        console.log(book);
        return await axios.post(`${config.apiUrl}/booking`, book);
      });
      await Promise.all(booking1).then(() => {
        this.$emit("drawerVisible");
        this.current = 0;
      });

      let booking2 = this.choose_slot2.map(async slot => {
        console.log("update 2");
        // let book = { ...this.booking };
        // book.time = slot;
        let book = {
          page_id: this.page_id,
          user_id: this.user_id,
          service_id: this.service._id,
          name: this.service.name,
          status: 0,
          year: this.year2,
          month: this.month2,
          day: this.day2,
          time: slot,
          phone: this.phone
        };
        console.log(book);
        return await axios.post(`${config.apiUrl}/booking`, book);
      });
      await Promise.all(booking2).then(() => {
        // console.log(res);
        // window.close()
        this.current = 0;
        this.$emit("drawerVisible");
      });

      let booking3 = this.choose_slot3.map(async slot => {
        console.log("update 3");
        // let book = { ...this.booking };
        // book.time = slot;
        let book = {
          page_id: this.page_id,
          user_id: this.user_id,
          service_id: this.service._id,
          name: this.service.name,
          status: 0,
          year: this.year3,
          month: this.month3,
          day: this.day3,
          time: slot,
          phone: this.phone
        };
        console.log(book);
        return await axios.post(`${config.apiUrl}/booking`, book);
      });
      await Promise.all(booking3).then(() => {
        this.$emit("drawerVisible");
        this.current = 0;
        // window.close();
      });
    },
    setService(service) {
      this.service = service;
      this.current++;
      console.log(this.service);
    }
  }
};
</script>

<style lang="less">
@import "~ant-design-vue/lib/style/themes/default.less";
.function_date {
  margin-top: 10px;
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 17px;
  letter-spacing: 0.02em;

  color: #a7a7a7;
}
.function_head {
  text-align: center;
  font-size: 18px;
  letter-spacing: 0.05em;

  color: #6c6c6c;
  margin-bottom: 31px;
}
.service_button {
  border-radius: 50vw;
  border: 1.5px solid #c4c4c4;
  box-sizing: border-box;
  box-shadow: none;
  font-size: 17px;
  color: #b3b3b3;
}
.container {
  display: flex;
  justify-content: center;
  // height: 100%;
  // overflow-y: scroll;
}

.ant-drawer-content {
  height: 100%;
  overflow-y: scroll;
}

.flex-item {
  flex-grow: 2;
  text-align: center;
}

.flex {
  display: flex;
  justify-content: center;
}

.slot-checkbox {
  margin: 1em;
  input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    // left: -9999px;

    &:checked + label {
      border-color: @primary-color;
      color: @primary-color;
    }
    &:disabled + label {
      background-color: #f0f0f0;
      border-color: #f0f0f0;
      color: grey;
    }
  }
  label {
    position: relative;
    cursor: pointer;
    color: grey;
    border: 2px solid #f0f0f0;
    border-radius: 5px;
    text-align: center;
    padding: 0.5em 1em 0.5em 1em;
    display: inline-block;
  }
}

@media (max-width: 480px) {
  .ant-steps-horizontal.ant-steps-label-horizontal {
    display: none;
  }
}
</style>
