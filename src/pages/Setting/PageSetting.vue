<template>
  <div class="container">
    <a-card style="width: 375px" :bordered="false">
      <a-form>
        <a-row>
          <a-col :span="20">
            <span>เวลาทำการ</span>
          </a-col>
          <a-col :span="3">
            <a-switch
              size="small"
              :style="{ marginRight: '0' }"
              checkedChildren="เปิด"
              unCheckedChildren="ปิด"
              defaultChecked
            />
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-item label="เปิด" :label-col="{ span: 5 }" :wrapper-col="{ span: 19 }">
              <a-time-picker
                placeholder="กรุณาระบุเวลา"
                size="large"
                :defaultOpenValue="moment('00:00', 'HH:mm')"
                format="HH:mm"
                style="width: 100%"
              />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="ปิด" :label-col="{ span: 5 }" :wrapper-col="{ span: 19 }">
              <a-time-picker
                placeholder="กรุณาระบุเวลา"
                size="large"
                :defaultOpenValue="moment('00:00', 'HH:mm')"
                format="HH:mm"
                style="width: 100%"
              />
            </a-form-item>
          </a-col>
        </a-row>

        <a-row>
          <a-col :span="20">
            <span>เวลาพัก</span>
          </a-col>
          <a-col :span="3">
            <a-switch
              size="small"
              :style="{ marginRight: '0' }"
              checkedChildren="เปิด"
              unCheckedChildren="ปิด"
              defaultChecked
            />
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <a-form-item label="เปิด" :label-col="{ span: 5 }" :wrapper-col="{ span: 19 }">
              <a-time-picker
                placeholder="กรุณาระบุเวลา"
                size="large"
                :defaultOpenValue="moment('00:00', 'HH:mm')"
                format="HH:mm"
                style="width: 100%"
                @change="onChange"
              />
            </a-form-item>
          </a-col>
          <a-col :span="12">
            <a-form-item label="ปิด" :label-col="{ span: 5 }" :wrapper-col="{ span: 19 }">
              <a-time-picker
                placeholder="กรุณาระบุเวลา"
                size="large"
                :defaultOpenValue="moment('00:00', 'HH:mm')"
                format="HH:mm"
                style="width: 100%"
              />
            </a-form-item>
          </a-col>
        </a-row>

        <a-row>
          <a-col>
            <span>วันทำการ</span>
          </a-col>
        </a-row>
        <a-row type="flex" justify="center" :gutter="{xs: 3,sm: 16,md: 16}">
          <a-col>
            <div class="checkbox">
              <input type="checkbox" id="checkbox_1" />
              <label for="checkbox_1" class="text-caption">MON</label>
            </div>
          </a-col>
          <a-col>
            <div class="checkbox">
              <input type="checkbox" id="checkbox_2" />
              <label for="checkbox_2" class="text-caption">MON</label>
            </div>
          </a-col>
          <a-col>
            <div class="checkbox">
              <input type="checkbox" id="checkbox_3" />
              <label for="checkbox_3" class="text-caption">MON</label>
            </div>
          </a-col>
          <a-col>
            <div class="checkbox">
              <input type="checkbox" id="checkbox_4" />
              <label for="checkbox_4" class="text-caption">MON</label>
            </div>
          </a-col>
          <a-col>
            <div class="checkbox">
              <input type="checkbox" id="checkbox_5" />
              <label for="checkbox_5" class="text-caption">MON</label>
            </div>
          </a-col>
          <a-col>
            <div class="checkbox">
              <input type="checkbox" id="checkbox_6" />
              <label for="checkbox_6" class="text-caption">MON</label>
            </div>
          </a-col>
          <a-col>
            <div class="checkbox">
              <input type="checkbox" id="checkbox_7" />
              <label for="checkbox_7" class="text-caption">MON</label>
            </div>
          </a-col>
        </a-row>
      </a-form>
    </a-card>
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
    // width: 100%;
    min-width: 28px;
    display: inline-block;
    cursor: pointer;
    color: grey;
    border: 2px solid grey;
    border-radius: 50%;
    overflow: none;
    text-align: center;
    padding: 0;

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
