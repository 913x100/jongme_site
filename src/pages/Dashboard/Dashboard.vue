<template>
  <div>
    <div style="textAlign:center;fontSize:30px;marginBottom:10px;">DASHBOARD</div>
    <div class="container">
      <a-card style="width: 375px;padding:0px;" :bordered="false" class="grey-card">
        <a-tabs defaultActiveKey="1" size="xx-small">
          <a-tab-pane key="1">
            <span slot="tab">
              Approved
              <a-badge count="4" />
            </span>
            <a-row>
              <a-button size="large" style="width: 100%">
                <a-icon type="plus" />
              </a-button>
            </a-row>
            <a-row type="flex" justify="center" align="middle">
              <a-col :span="8" style="textAlign: left;fontSize: 20px">
                <a-icon type="left" />
              </a-col>
              <a-col :span="8" style="textAlign: center;fontSize: 20px">Date</a-col>
              <a-col :span="8" style="textAlign: right;fontSize: 20px">
                <a-icon type="right" />
              </a-col>
            </a-row>

            <a-row>
              <a-col>
                <booking-card @click="showDrawer"></booking-card>
              </a-col>
              <a-col>
                <booking-card></booking-card>
              </a-col>
              <a-col>
                <booking-card></booking-card>
              </a-col>
            </a-row>

            <!-- <a-button type="primary" @click="showDrawer">Open</a-button> -->

            <!-- <Badge></Badge> -->
          </a-tab-pane>
          <a-tab-pane key="2">
            <span slot="tab">
              Waiting
              <a-badge count="5" />
            </span>
            <a-row>
              <a-button size="large" style="width: 100%">
                <a-icon type="plus" />
              </a-button>
            </a-row>
            <a-row type="flex" justify="center" align="middle">
              <a-col :span="8" style="textAlign: left;fontSize: 20px">
                <a-icon type="left" />
              </a-col>
              <a-col :span="8" style="textAlign: center;fontSize: 20px">Date</a-col>
              <a-col :span="8" style="textAlign: right;fontSize: 20px">
                <a-icon type="right" />
              </a-col>
            </a-row>
          </a-tab-pane>
        </a-tabs>
      </a-card>
    </div>
  </div>
</template>

<script>
import BookingCard from "@/components/Dashboard/BookingCard/BookingCard";

export default {
  data() {
    return {
      visible: false
    };
  },
  components: {
    BookingCard
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
@import "~ant-design-vue/lib/style/themes/default.less";

.grey-card {
  background-color: #f0f2f5;
  .ant-card-body {
    padding: 0;
  }
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
/* .alert_bg {
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}

.popup_bg {
  background: (rgba(0, 0, 0, 0.9));
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
}
.add_text {
  font-size: 12.53vw;
  line-height: 7.53vw;
  color: #b2b2b2;
}
.add {
  width: 100%;
  padding-top: 2.16vw;
  padding-bottom: 2.16vw;
  background-color: white;
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.07);
  border-radius: 4px;

  border: none;
}
#date {
  color: #a7a7a7;
  margin-bottom: 1.23vh;
  font-size: 2.67vw;
}
.dash {
  width: 100%;
  padding-left: 2.5%;
  padding-right: 2.5%;
}
.page_title {
  color: #b2b2b2;
  font-size: 9.6vw;
  font-weight: 700;
  letter-spacing: 0.075em;
  margin-top: 2.83vh;
  margin-bottom: 2.83vh;
  text-align: center;
} */
</style>