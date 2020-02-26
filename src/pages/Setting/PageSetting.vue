<template>
  <div>
    <div class="box">
      <a-form>
        <a-row class="function-margin">
          <a-col :span="20">
            <span class="mainfunction">Set operating hour</span>
          </a-col>
          <a-col :span="3">
            <a-switch
              size="small"
              :style="{ marginRight: '0' }"
              checkedChildren="ON"
              unCheckedChildren="OFF"
              defaultChecked
            />
          </a-col>
        </a-row>
        <a-row class="function-margin">
          <a-col :span="11">
            <a-form-item
              class="subfunction"
              label="Open"
              :label-col="{ span: 5 }"
              :wrapper-col="{ span: 19 }"
            >
              <a-time-picker
                placeholder="Enter time"
                size="large"
                :defaultOpenValue="moment('00:00', 'HH:mm')"
                format="HH:mm"
                style="width: 100%"
              />
            </a-form-item>
          </a-col>
          <a-col :span="2"></a-col>
          <a-col :span="11">
            <a-form-item
              class="subfunction"
              label="Close"
              :label-col="{ span: 5 }"
              :wrapper-col="{ span: 19 }"
            >
              <a-time-picker
                placeholder="Enter time"
                size="large"
                :defaultOpenValue="moment('00:00', 'HH:mm')"
                format="HH:mm"
                style="width: 100%"
              />
            </a-form-item>
          </a-col>
        </a-row>

        <a-row class="function-margin">
          <a-col :span="20">
            <span class="mainfunction">Set break</span>
          </a-col>
          <a-col :span="3">
            <a-switch
              size="small"
              :style="{ marginRight: '0' }"
              checkedChildren="ON"
              unCheckedChildren="OFF"
              defaultChecked
            />
          </a-col>
        </a-row>
        <a-row class="function-margin">
          <a-col :span="11">
            <a-form-item
              class="subfunction"
              label="Open"
              :label-col="{ span: 5 }"
              :wrapper-col="{ span: 19 }"
            >
              <a-time-picker
                placeholder="Enter time"
                size="large"
                :defaultOpenValue="moment('00:00', 'HH:mm')"
                format="HH:mm"
                style="width: 100%"
                @change="onChange"
              />
            </a-form-item>
          </a-col>
          <a-col :span="2"></a-col>
          <a-col :span="11">
            <a-form-item
              class="subfunction"
              label="Close"
              :label-col="{ span: 5 }"
              :wrapper-col="{ span: 19 }"
            >
              <a-time-picker
                placeholder="Enter Time"
                size="large"
                :defaultOpenValue="moment('00:00', 'HH:mm')"
                format="HH:mm"
                style="width: 100%"
              />
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
              <input type="checkbox" id="checkbox_1" />
              <label for="checkbox_1" class="text-caption">SUN</label>
            </div>
          </a-col>
          <a-col :span="3">
            <div class="checkbox checkdate_margin">
              <input type="checkbox" id="checkbox_2" />
              <label for="checkbox_2" class="text-caption">MON</label>
            </div>
          </a-col>
          <a-col :span="3">
            <div class="checkbox checkdate_margin">
              <input type="checkbox" id="checkbox_3" />
              <label for="checkbox_3" class="text-caption">TUE</label>
            </div>
          </a-col>
          <a-col :span="3">
            <div class="checkbox checkdate_margin">
              <input type="checkbox" id="checkbox_4" />
              <label for="checkbox_4" class="text-caption">WED</label>
            </div>
          </a-col>
          <a-col :span="3">
            <div class="checkbox checkdate_margin">
              <input type="checkbox" id="checkbox_5" />
              <label for="checkbox_5" class="text-caption">THU</label>
            </div>
          </a-col>
          <a-col :span="3">
            <div class="checkbox checkdate_margin">
              <input type="checkbox" id="checkbox_6" />
              <label for="checkbox_6" class="text-caption">FRI</label>
            </div>
          </a-col>
          <a-col :span="3">
            <div class="checkbox checkdate_margin">
              <input type="checkbox" id="checkbox_7" />
              <label for="checkbox_7" class="text-caption">SAT</label>
            </div>
          </a-col>
        </a-row>
      </a-form>
    </div>
    <a-row class="setting_button_layout">
      <a-col :span="7">
        <!-- <MainButton text="Back" color="purple"></MainButton> -->
        <button class="main_button purple_button">Back</button>
      </a-col>
      <a-col :span="10"></a-col>
      <a-col :span="7">
        <button class="main_button yellow_button">Next</button>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import moment from "moment";
import api from "@/api";

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
    onChange(timeString) {
      console.log(timeString);
    },
    getPage() {
      api.page
        .getPage("110030743746925")
        .then(res => {
          // console.log(res.data);
          this.page = res.data;

          console.log(this.page);
        })
        .catch(err => {
          console.log(err);
          console.log("error");
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
