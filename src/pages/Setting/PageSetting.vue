<template>
  <div class="inner_layout">
    <div class="page_title">AVAILABILITY</div>
    <div class="box">
      <a-form>
        <a-row class="function-margin">
          <a-col :span="22">
            <span class="mainfunction">Set operating hour</span>
          </a-col>
          <a-col :span="2">
            <a-switch
              size="small"
              :style="{ marginRight: '0'}"
              defaultChecked
              v-model="page.is_active"
            />
          </a-col>
        </a-row>
        <a-row class="function-margin">
          <a-col :span="11">
            <a-form-item
              class="subfunction"
              label="Open"
              :label-col="{ span: 24 }"
              :wrapper-col="{ span: 24 }"
            >
              <a-time-picker
                placeholder="HH:MM"
                size="medium"
                :defaultValue="getMoment(page.start_time)"
                format="HH:mm"
                style="width: 100%"
                :disabled="!page.is_active"
                @change="pickStartTime"
              >
                <!-- <a-button slot="addon" size="small" type="primary" @click="handleClose">Ok</a-button> -->
              </a-time-picker>
            </a-form-item>
          </a-col>
          <a-col :span="2"></a-col>
          <a-col :span="11">
            <a-form-item
              class="subfunction"
              label="Close"
              :label-col="{ span: 24 }"
              :wrapper-col="{ span: 24 }"
            >
              <a-time-picker
                placeholder="HH:MM"
                size="medium"
                :disabled="!page.is_active"
                :defaultValue="getMoment(page.end_time)"
                format="HH:mm"
                style="width: 100%"
                @change="pickEndTime"
              >
                <!-- <a-button slot="addon" size="small" type="primary" @click="handleClose">Ok</a-button> -->
              </a-time-picker>
            </a-form-item>
          </a-col>
        </a-row>

        <a-row class="function-margin">
          <a-col :span="22">
            <span class="mainfunction">Set break</span>
          </a-col>
          <a-col :span="2">
            <a-switch
              size="small"
              :style="{ marginRight: '0' }"
              defaultChecked
              v-model="page.is_break"
              :disabled="!page.is_active"
            />
          </a-col>
        </a-row>
        <a-row class="function-margin">
          <a-col :span="11">
            <a-form-item
              class="subfunction"
              label="Open"
              :label-col="{ span: 24 }"
              :wrapper-col="{ span: 24 }"
            >
              <a-time-picker
                placeholder="HH:MM"
                size="medium"
                :defaultValue="getMoment(page.break_start)"
                format="HH:mm"
                style="width: 100%"
                :disabled="!page.is_break"
                @change="pickBreakStart"
              >
                <!-- <a-button slot="addon" size="small" type="primary" @click="handleClose">Ok</a-button> -->
              </a-time-picker>
            </a-form-item>
          </a-col>
          <a-col :span="2"></a-col>
          <a-col :span="11">
            <a-form-item
              class="subfunction"
              label="Close"
              :label-col="{ span: 24 }"
              :wrapper-col="{ span: 24 }"
            >
              <a-time-picker
                placeholder="HH:MM"
                size="medium"
                :defaultValue="getMoment(page.break_end)"
                format="HH:mm"
                style="width: 100%"
                :disabled="!page.is_break"
                @change="pickBreakEnd"
              >
                <!-- <a-button slot="addon" size="small" type="primary" @click="handleClose">Ok</a-button> -->
              </a-time-picker>
            </a-form-item>
          </a-col>
        </a-row>

        <a-row class="function-margin">
          <a-col>
            <span class="mainfunction">Set operating day</span>
          </a-col>
        </a-row>
        <a-row type="flex" justify="space-between">
          <a-col :span="3">
            <div class="checkbox checkdate_margin">
              <input :disabled="!page.is_active" type="checkbox" id="checkbox_1" v-model="page.sun" />
              <label for="checkbox_1" class="text-caption">SUN</label>
            </div>
          </a-col>
          <a-col :span="3">
            <div class="checkbox checkdate_margin">
              <input :disabled="!page.is_active" type="checkbox" id="checkbox_2" v-model="page.mon" />
              <label for="checkbox_2" class="text-caption">MON</label>
            </div>
          </a-col>
          <a-col :span="3">
            <div class="checkbox checkdate_margin">
              <input :disabled="!page.is_active" type="checkbox" id="checkbox_3" v-model="page.tue" />
              <label for="checkbox_3" class="text-caption">TUE</label>
            </div>
          </a-col>
          <a-col :span="3">
            <div class="checkbox checkdate_margin">
              <input :disabled="!page.is_active" type="checkbox" id="checkbox_4" v-model="page.wed" />
              <label for="checkbox_4" class="text-caption">WED</label>
            </div>
          </a-col>
          <a-col :span="3">
            <div class="checkbox checkdate_margin">
              <input :disabled="!page.is_active" type="checkbox" id="checkbox_5" v-model="page.thu" />
              <label for="checkbox_5" class="text-caption">THU</label>
            </div>
          </a-col>
          <a-col :span="3">
            <div class="checkbox checkdate_margin">
              <input :disabled="!page.is_active" type="checkbox" id="checkbox_6" v-model="page.fri" />
              <label for="checkbox_6" class="text-caption">FRI</label>
            </div>
          </a-col>
          <a-col :span="3">
            <div class="checkbox checkdate_margin">
              <input :disabled="!page.is_active" type="checkbox" id="checkbox_7" v-model="page.sat" />
              <label for="checkbox_7" class="text-caption">SAT</label>
            </div>
          </a-col>
        </a-row>
      </a-form>
    </div>

    <a-row class="pageBtn" type="flex" justify="space-between">
      <a-col>
        <a-button class="back" @click="previous">Back</a-button>
      </a-col>
      <a-col>
        <a-button class="next" @click="next">Next</a-button>
      </a-col>
    </a-row>
    <!-- <a-row class="pageBtn" type="flex" justify="space-around">
    </a-row>-->
  </div>
</template>
<script>
import moment from "moment";
import api from "@/api";
import store from "@/store";

function changeTime(time) {
  return time + ":00";
}

export default {
  created() {
    this.getPage();
  },
  data() {
    return {
      page: {}
    };
  },
  methods: {
    moment,
    // onChange(time, timeString) {
    //   console.log(time, timeString);
    // },
    pickStartTime(time, timeString) {
      // console.log(time, timeString);

      this.page.start_time = changeTime(timeString);
    },
    pickEndTime(time, timeString) {
      this.page.end_time = changeTime(timeString);
    },
    pickBreakStart(time, timeString) {
      this.page.break_start = changeTime(timeString);
    },
    pickBreakEnd(time, timeString) {
      this.page.break_end = changeTime(timeString);
    },
    getMoment(time) {
      let r = "09:00:00";
      if (time == "" || time == undefined || time == null) {
        r = "09:00:00";
      }
      r = time.substring(0, 5);
      return moment(r, "HH:mm");
    },
    getPage() {
      const page_id = store.getters["page/page_id"];
      api.page
        .getPage(page_id)
        .then(res => {
          console.log(res.data);
          this.page = res.data;

          console.log(this.page);
        })
        .catch(err => {
          console.log(err);
          console.log("error");
        });
    },
    previous() {
      const page_id = store.getters["page/page_id"];
      api.page.updatePage(page_id, this.page).then(() => {
        this.$router.push("/select");
        // console.log(res);
      });
    },
    next() {
      const page_id = store.getters["page/page_id"];
      api.page.updatePage(page_id, this.page).then(() => {
        this.$router.push("/setting/service");
        // console.log(res);
      });
    }
  }
};
</script>

<style lang="less" scope>
@import "~ant-design-vue/lib/style/themes/default.less";

.checkbox {
  input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    // left: -9999px;

    &:checked + label {
      border-color: @primary-color;
      color: @primary-color;
    }
  }
  label {
    position: relative;
    font-size: x-small;
    width: 100%;

    // height: 30px;
    min-width: 28px;
    // display: inline-block;
    display: block;
    cursor: pointer;
    color: #c4c4c4;
    border: 1px solid #c4c4c4;
    border-radius: 50%;
    overflow: none;
    text-align: center;
    // margin: 10px;
    // padding: 0.5px 0.5px 5px 5px;

    &::before {
      content: "";
      display: inline-block;
      vertical-align: middle;
      padding-top: 100%;
    }
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

.ant-row span {
  font-size: large;
}

.ant-row:last-child {
  margin-bottom: 10px;
}
@media screen and (max-width: @screen-sm) {
  .ant-card {
    width: 100%;
  }
}
</style>
