<template>
  <div class="booking-card">
    <a-card class="booking-card" @click="showDrawer">
      <a-row type="flex">
        <a-col :span="9">
          <div class="booking-img">
            <img src="@/assets/test_pic.jpg" />
          </div>
        </a-col>
        <a-col :span="15">
          <a-row class="detail_margin">
            <a-col :span="7" :push="17">
              <div v-if="book.status == 0">
                <StatusBadge status="Waiting" />
              </div>
              <div v-if="book.status == 1">
                <StatusBadge status="Approve"></StatusBadge>
              </div>
            </a-col>
            <a-col :span="17" :pull="7">
              <div class="service_name">{{book.name}}</div>
            </a-col>
            <div class="username">End-user name</div>
            <div class="badge_date">{{checkDate(book.year+"-"+book.month+"-"+book.day)}}</div>
            <div class="time">{{time}}</div>
          </a-row>
        </a-col>

        <!-- <a-col :xs="{span: 14}" :span="15" class="booking-detail">
          <a-row>
            <a-col :span="17">
              <a-row>
                <a-col class="title">Service Name</a-col>
                <a-col class="subtitle">asdasd</a-col>
              </a-row>
            </a-col>
            <a-col :span="7">
              <div class="badge approve" style="textAlign:center">Approve</div>
            </a-col>
          </a-row>
          <a-row>
            <a-col :span="10" :offset="14" style="textAlign:right;marginBotton:0">
              <a-row>
                <a-col class="date">Today</a-col>
                <a-col class="time">10:00</a-col>
              </a-row>
            </a-col>
          </a-row>
        </a-col>-->
      </a-row>
    </a-card>
    <a-drawer
      placement="bottom"
      :closable="false"
      @close="onClose"
      :visible="visible"
      height="auto"
    >
      <Drawer :book="book" />
    </a-drawer>
  </div>
</template>

<script>
import StatusBadge from "@/components/Dashboard/Badges/StatusBadge";
import Drawer from "@/components/Dashboard/BookingCard/Drawer";
import moment from "moment";

export default {
  props: ["book"],
  components: {
    Drawer,
    StatusBadge
  },
  data() {
    return {
      visible: false
    };
  },
  created() {
    // console.log(this.year, this.month, this.day);
  },
  computed: {
    getMonth() {
      return moment(
        this.book.year + "-" + this.book.month + "-" + this.book.day
      ).format("MMMM");
    },
    time() {
      return this.book.time.substring(0, 5);
    }
  },
  methods: {
    checkDate(date) {
      // console.log(moment().format("YYYY-MM-DD"));
      let r = "";
      if (
        moment()
          .endOf("day")
          .format("MMM Do YY") ==
        moment(date)
          .endOf("day")
          .format("MMM Do YY")
      ) {
        r = "Today";
      } else if (
        moment()
          .add(1, "days")
          .endOf("day")
          .format("MMM Do YY") ==
        moment(date)
          .endOf("day")
          .format("MMM Do YY")
      ) {
        r = "Tomorrow";
      } else if (
        moment()
          .add(-1, "days")
          .endOf("day")
          .format("MMM Do YY") ==
        moment(date)
          .endOf("day")
          .format("MMM Do YY")
      ) {
        r = "Yesterday";
      } else {
        r = date;
      }
      return r;
    },
    showDrawer() {
      this.visible = true;
    },
    onClose() {
      this.visible = false;
    }
  }
};
</script>

<style lang="less">
.booking-card {
  margin-top: 10px;
  border-radius: 4px;
  border: none;
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.07);
  .booking-img {
    img {
      display: block;
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
  }
  .ant-row {
    margin-bottom: 0;
  }
  .ant-card-body {
    padding: 0;
  }
  // .booking-detail {
  //   // padding: 10px;
  //   .badge {
  //     width: 100%;
  //     font-weight: 500;
  //     color: white;
  //     padding-top: 1px;
  //     padding-bottom: 1px;
  //     border-radius: 3px;
  //     // padding: 3px 10px 3px 0;
  //     font-size: 10px;
  //   }
  //   .title {
  //     font-size: 14px;
  //   }
  //   .subtitle {
  //     font-size: 12px;
  //     // font-weight: 500;
  //     color: #a7a7a7;
  //   }
  //   .date {
  //     font-size: 16px;
  //   }
  //   .time {
  //     font-size: 14px;
  //   }
  // }

  .approve {
    background: #62cc60;
  }
}

.badge_date {
  // margin-top: 2.03vh;
  padding-top: 1.35vh;
  font-size: 19px;
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
</style>