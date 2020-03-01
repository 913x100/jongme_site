<template>
  <div>
    <a-row class="first">
      <!-- image -->
      <a-col :span="4">
        <img src="@/assets/test_pic.jpg" class="user_image" />
      </a-col>
      <!-- Name -->
      <a-col :span="19" :offset="1" class="enduser_name">{{book.name}}</a-col>
    </a-row>
    <!-- Date and time -->
    <div class="info_title">Date and time</div>
    <a-row class="card_date">
      <a-col
        :span="16"
      >{{moment(book.year+"-"+book.month+"-"+book.day).format("dddd[,] D MMM YYYY")}}</a-col>
      <a-col :span="8" class="card_right">{{book.time.substring(0,5)}}</a-col>
    </a-row>
    <!-- Service Type -->
    <div class="info_title">Service Type</div>
    <div>
      <!-- Service Unit -->
      <a-row class="service_type_info">
        <a-col :span="18">Service Unit</a-col>
        <a-col :span="6" class="card_right">1</a-col>
      </a-row>
      <div class="line"></div>
      <!-- optional -->
      <a-row class="service_type_info">
        <a-col :span="18">Phone number</a-col>
        <a-col :span="6" class="card_right">{{book.phone}}</a-col>
      </a-row>
      <div class="line"></div>
      <!-- optional -->
      <a-row class="service_type_info">
        <a-col :span="12">Name Surname</a-col>
        <a-col :span="12" class="card_right">{{book.username}}</a-col>
      </a-row>
      <div class="line"></div>

      <a-row type="flex" justify="space-around" class="btn">
        <a-button v-if="book.status == 1" @click="absent" class="absent">Absent</a-button>
        <a-button v-if="book.status == 0" @click="approve" class="approve">Approve</a-button>
        <a-button @click="cancel" class="cancel">Cancel</a-button>
        <!-- <a-col :span="11">
          <CardButton text="Absent" color="purple"></CardButton>
        </a-col>
        <a-col :span="2"></a-col>
        <a-col :span="11">
          <CardButton text="Cancle booking" color="red"></CardButton>
        </a-col>-->
      </a-row>
    </div>
  </div>
</template>

<script>
// import CardButton from "@/components/Dashboard/Badge_info/CardButton.vue";
import moment from "moment";
import api from "@/api";

export default {
  props: ["visible", "book"],
  data() {
    return {};
  },
  components: {
    // CardButton
  },
  methods: {
    moment,
    approve() {
      this.book.status = 1;
      // console.log("update");
      api.booking.updateBooking(this.book._id, this.book).then(res => {
        console.log(res);
        location.reload();
      });
    },
    absent() {
      this.book.status = 2;
      // console.log("update");
      api.booking.updateBooking(this.book._id, this.book).then(res => {
        console.log(res);
        location.reload();
      });
    },
    cancel() {
      api.booking.deleteBooking(this.book._id).then(res => {
        console.log(res);
        location.reload();
      });
    }
  }
};
</script>

<style lang="less">
@import "~ant-design-vue/lib/style/themes/default.less";

.btn {
  .ant-btn {
    height: 40px;
    color: white;
  }
  .absent {
    background-color: #f5575d;
  }
  .cancel {
    background-color: #c06ff2;
  }
  .approve {
    background-color: #62cc60;
  }
}

.info_title {
  color: black;
  /* font-size: 4vw; */
  font-weight: 500;
  margin-bottom: 1.97vh;
}
.card_right {
  text-align: right;
  font-weight: 500;
}
.card_date {
  /* font-size: 3.73vw; */
  letter-spacing: 0.075em;

  color: #7e7e7e;
  margin-bottom: 3.2vh;
  font-weight: 500;
}
.service_type_info {
  margin-bottom: 1.23vh;
  /* font-size: 3.2vw; */
  color: #6c6c6c;
}
.service_type_info_unit {
  font-weight: 500;
}
.line {
  border: 1px solid #e5e5e5;
  margin-bottom: 2.46vh;
}
.first {
  margin-bottom: 3.21vh;
  position: relative;
}
.enduser_name {
  margin-top: 16px;
  margin-bottom: 16px;
  font-weight: 500;
  font-size: 16px;
  color: black;
}
.user_image {
  /* width: 14.27vw; */
  /* height: 14.27vw; */
  width: 51px;
  height: 51px;
  border-radius: 100%;
  object-fit: cover;
}
.card {
  /* padding: 4.8vw; */
  background-color: white;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
</style>