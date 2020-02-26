<template>
  <div class="booking-card">
    <a-card class="booking-card" @click="showDrawer">
      <a-row type="flex">
        <a-col :span="10">
          <div class="booking-img">
            <img src="@/assets/test_pic.jpg" />
          </div>
          <!-- <img src="@/assets/test_pic.jpg" class="booking-img" /> -->
        </a-col>
        <a-col :xs="{span: 14}" :span="15" class="booking-detail">
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
        </a-col>
      </a-row>
    </a-card>
    <a-drawer placement="bottom" :closable="false" @close="onClose" :visible="visible" height="50%">
      <Drawer />
    </a-drawer>
  </div>
</template>

<script>
import Drawer from "@/components/Dashboard/BookingCard/Drawer";

export default {
  components: {
    Drawer
  },
  data() {
    return {
      visible: false
    };
  },
  methods: {
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
  .booking-img {
    // height: 100%;
    // width: 100%;'
    // display: block;
    border-top-left-radius: 1px;
    border-bottom-left-radius: 1px;

    img {
      display: block;
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
    }
  }
  .ant-row {
    margin-bottom: 0;
  }
  .ant-card-body {
    padding: 0;
  }
  .booking-detail {
    padding: 10px;
    .badge {
      width: 100%;
      font-weight: 500;
      color: white;
      padding-top: 1px;
      padding-bottom: 1px;
      border-radius: 3px;
      // padding: 3px 10px 3px 0;
      font-size: 10px;
    }
    .title {
      font-size: 14px;
    }
    .subtitle {
      font-size: 12px;
      // font-weight: 500;
      color: #a7a7a7;
    }
    .date {
      font-size: 16px;
    }
    .time {
      font-size: 14px;
    }
  }

  .approve {
    background: #62cc60;
  }
}
</style>