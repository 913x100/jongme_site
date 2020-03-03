<template>
  <a-spin :spinning="loading">
    <div class="page_title">DASHBOARD</div>
    <div class="container">
      <a-card style="width: 375px;padding:0px;" :bordered="false" class="grey-card">
        <a-row>
          <a-button size="large" style="width: 100%" @click="showDrawer">
            <a-icon type="plus" />
          </a-button>
        </a-row>
        <a-tabs defaultActiveKey="1" @change="onTab">
          <a-tab-pane key="1">
            <span slot="tab">
              Approved
              <a-badge :count="t1" />
            </span>

            <a-row type="flex" justify="center" align="middle">
              <a-col :span="8" style="textAlign: left;fontSize: 20px">
                <a-icon type="left" @click="subMonth(1)" />
              </a-col>
              <a-col
                :span="8"
                style="textAlign: center;fontSize: 20px"
                class="month"
              >{{monthText}} {{year}}</a-col>
              <a-col :span="8" style="textAlign: right;fontSize: 20px">
                <a-icon type="right" @click="addMonth(1)" />
              </a-col>
            </a-row>

            <a-row>
              <a-col v-for="book in booking" :key="book.id">
                <booking-card @click="showDrawer" :book="book"></booking-card>
              </a-col>
            </a-row>
          </a-tab-pane>
          <a-tab-pane key="2">
            <span slot="tab">
              Waiting
              <a-badge :count="t2" />
            </span>
            <a-row type="flex" justify="center" align="middle">
              <a-col :span="8" style="textAlign: left;fontSize: 20px">
                <a-icon type="left" @click="subMonth(0)" />
              </a-col>
              <a-col :span="8" style="textAlign: center;fontSize: 15px">{{monthText}} {{year}}</a-col>
              <a-col :span="8" style="textAlign: right;fontSize: 20px">
                <a-icon type="right" @click="addMonth(0)" />
              </a-col>
            </a-row>
            <a-row>
              <a-col v-for="book in booking" :key="book.id">
                <booking-card @click="showDrawer" :book="book"></booking-card>
              </a-col>
            </a-row>
          </a-tab-pane>
        </a-tabs>
      </a-card>
    </div>
    <a-drawer placement="bottom" :closable="false" @close="onClose" :visible="visible" height="80%">
      <time-drawer @drawerVisible="onClose" />
    </a-drawer>
  </a-spin>
</template>

<script>
import api from "@/api";
import store from "@/store";
import BookingCard from "@/components/Dashboard/BookingCard/BookingCard";
import TimeDrawer from "@/components/Booking/InApp";
import moment from "moment";

export default {
  data() {
    return {
      loading: false,
      visible: false,
      booking: [],
      t1: 0,
      t2: 0,
      year: "",
      month: "",
      day: "",
      now: "",
      monthText: ""
    };
  },
  components: {
    BookingCard,
    TimeDrawer
  },
  created() {
    this.now = moment().format("YYYY-MM-DD");
    this.monthText = moment().format("MMMM");
    this.formatTime();
    console.log(this.year, this.month, this.day);

    this.getBooking(this.year, this.month, 0);
  },
  methods: {
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    },
    formatTime() {
      let m = this.now.split("-");
      this.year = m[0];
      this.month = m[1];
      this.day = m[2];
    },
    addMonth(status) {
      let t = moment(this.year + "-" + this.month + "-" + this.day).add(
        1,
        "month"
      );
      this.monthText = t.format("MMMM");
      let m = t.format("YYYY-MM-DD").split("-");
      this.year = m[0];
      this.month = m[1];
      this.day = m[2];

      this.getBooking(this.year, this.month, status);
      // console.log(t);
    },
    subMonth(status) {
      let t = moment(this.year + "-" + this.month + "-" + this.day).add(
        -1,
        "month"
      );
      this.monthText = t.format("MMMM");
      let m = t.format("YYYY-MM-DD").split("-");
      this.year = m[0];
      this.month = m[1];
      this.day = m[2];

      this.getBooking(this.year, this.month, status);
      // console.log(t);
    },
    getBooking(year, month, status) {
      this.loading = true;
      const page_id = store.getters["page/page_id"];
      api.booking
        .getBookingByStatus(page_id, year, month, status)
        .then(res => {
          console.log(res.data);
          this.booking = res.data;
          this.loading = false;
          if (status == 0) {
            if (res.data != null) {
              this.t2 = res.data.length;
            } else {
              this.t2 = 0;
            }
          } else if (status == 1) {
            if (res.data != null) {
              this.t1 = res.data.length;
            } else {
              this.t1 = 0;
            }
          }
        })
        .catch(err => {
          this.loading = false;
          console.log(err);
        });
    },
    onTab(key) {
      this.formatTime();
      if (key == 1) {
        this.getBooking(this.year, this.month, 1);
      } else if (key == 2) {
        this.getBooking(this.year, this.month, 0);
      }
    }
  }
};
</script>

<style lang="less">
@import "~ant-design-vue/lib/style/themes/default.less";
.month {
  // color: #a7a7a7;
  // margin-bottom: 1.23vh;
  font-weight: 500;
  font-size: 20px;
}

.grey-card {
  background-color: #fafafa;
  .ant-card-body {
    padding: 0;
  }
}
.add_text {
  font-size: 12.53vw;
  line-height: 7.53vw;
  color: #b2b2b2;
}
.ant-btn {
  border: none;
  height: 57px;
  // padding-top: 18px;
  // padding-bottom: 18px;
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.07);
  border-radius: 4px;
}
.add {
  width: 100%;
  background-color: white;
  border: none;
}
.container {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  justify-content: center;
}

.ant-tabs-bar {
  border-bottom: 0;
}

.ant-tabs-ink-bar {
  display: none;
  height: 0;
}

.ant-tabs-nav {
  font-size: smaller;
  background-color: @primary-color;
  border-radius: 20px;
  padding: 3px;
  .ant-tabs-tab {
    margin: 0;
    padding: 2px 5px 2px 5px;
    color: white;
    // background-color: white;
  }
  .ant-badge-count {
    background-color: white;
    color: @primary-color;
  }
  .ant-tabs-tab-active {
    color: @primary-color;
    background-color: white;
    border-radius: 20px;

    .ant-badge-count {
      background-color: @primary-color;
      color: white;
    }
  }
}
.ant-row {
  margin-bottom: 10px;
}
#badge_date {
  /* margin-top: 2.03vh; */
  /* font-size: 5.07vw; */
  font-weight: 500;
  color: #6c6c6c;
  text-align: right;
}
.time {
  /* font-size: 3.47vw; */
  font-weight: 500;
  color: #6c6c6c;
  text-align: right;
  /* bottom: 0; */
}
.username {
  /* margin-top: 0.53vh; */
  /* font-size: 3.2vw; */
  font-weight: 500;
  color: #a7a7a7;
}
.service_name {
  /* font-size: 3.2vw; */
  font-weight: 500;
  color: #000000;
}
.detail_margin {
  margin: 12px;
}

.hid-box {
  background: (rgba(0, 0, 0, 0.04));
  position: absolute;
  z-index: 2;
  bottom: 0;
  left: 0;
  width: 100vw;
  /* top: 100%;
  position: relative;
  transition: all 0.3s ease-out;
  height: 100%; */
}
</style>