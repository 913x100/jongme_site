<template>
  <div>
    <a-form>
      <a-row type="flex" align="middle">
        <a-col :span="20">
          <div class="title">What is this booking service for?</div>
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
      <a-row>
        <a-col>
          <a-form-item>
            <a-input placeholder="Enter service type" />
          </a-form-item>
        </a-col>
      </a-row>
      <a-row>
        <a-col>
          <div class="title">Service type picture</div>
        </a-col>
        <a-col>
          <div class="subtitle">Edit service picture to make you sense service type easier</div>
        </a-col>
      </a-row>
      <a-row>
        <a-upload
          name="avatar"
          listType="picture-card"
          class="avatar-uploader"
          :showUploadList="false"
          action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          :beforeUpload="beforeUpload"
          @change="handleChange"
        >
          <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
          <div v-else>
            <a-icon :type="loading ? 'loading' : 'plus'" />
            <div class="ant-upload-text">Upload</div>
          </div>
        </a-upload>
      </a-row>
      <a-row type="flex">
        <a-col :span="16">
          <div class="title">Enter service unit</div>
        </a-col>
        <a-col :span="7">
          <a-input placeholder="Unit" width="100%"></a-input>
        </a-col>
      </a-row>
      <a-row type="flex">
        <a-col :span="16">
          <div class="title">How many unit do you have?</div>
        </a-col>
        <a-col :span="7">
          <a-input-number :min="1" :max="10" :defaultValue="1" @change="onChange" width="100%" />
        </a-col>
      </a-row>
      <a-row
        type="flex"
        justify="center"
        :gutter="{xs: 4,sm: 16,md: 16}"
        :style="{marginBottom: '10px'}"
      >
        <a-col :span="24">
          <div class="title">Minimum booking time length</div>
        </a-col>
        <a-col>
          <div class="radio">
            <input type="radio" id="radio_1" name="time" />
            <label for="radio_1" class="text-caption">15 min</label>
          </div>
        </a-col>
        <a-col>
          <div class="radio">
            <input type="radio" id="radio_2" name="time" />
            <label for="radio_2" class="text-caption">30 min</label>
          </div>
        </a-col>
        <a-col>
          <div class="radio">
            <input type="radio" id="radio_3" name="time" />
            <label for="radio_3" class="text-caption">1 hr</label>
          </div>
        </a-col>
        <a-col>
          <div class="radio">
            <input type="radio" id="radio_4" name="time" />
            <label for="radio_4" class="text-caption">more than 1 hr</label>
          </div>
        </a-col>
      </a-row>
      <a-row type="flex">
        <a-col :span="16">
          <div class="title">How many hour?</div>
        </a-col>
        <a-col :span="7">
          <a-input-number :min="1" :max="10" :defaultValue="1" @change="onChange" width="100%" />
        </a-col>
      </a-row>
      <!-- <a-row type="flex" align="middle">
        <a-col :span="20">
          <div class="title">Allow user to book more than 1 slot</div>
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
      </a-row>-->
      <!-- <a-row>
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
      </a-row>-->
    </a-form>
  </div>
</template>
<script>
import moment from "moment";
import api from "@/api";

function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
}

const plainOptions = ["Apple", "Pear", "Orange"];

export default {
  created() {
    // this.getService();
  },
  data() {
    return {
      loading: false,
      imageUrl: "",
      plainOptions
    };
  },
  methods: {
    moment,
    handleChange(info) {
      if (info.file.status === "uploading") {
        this.loading = true;
        return;
      }
      if (info.file.status === "done") {
        // Get this url from response in real world.
        getBase64(info.file.originFileObj, imageUrl => {
          this.imageUrl = imageUrl;
          this.loading = false;
        });
      }
    },
    beforeUpload(file) {
      const isJPG = file.type === "image/jpeg";
      if (!isJPG) {
        this.$message.error("You can only upload JPG file!");
      }
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.$message.error("Image must smaller than 2MB!");
      }
      return isJPG && isLt2M;
    },
    getService() {
      api.service
        .getServiceByPage("110030743746925")
        .then(res => {
          console.log(res.data);
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

.radio {
  margin-top: 10px;
  margin-bottom: 10px;
  input[type="radio"] {
    position: absolute;
    opacity: 0;
    // left: -9999px;

    &:checked + label {
      border-color: @primary-color;
      color: @primary-color;
    }
  }
  label {
    // position: relative;
    font-size: x-small;
    // width: 100%;
    // min-width: 28px;
    cursor: pointer;
    // color: @primary-color;
    border: 2px solid grey;
    padding: 5px;
    border-radius: 10px;
    text-align: center;

    &::before {
      content: "";
      display: inline-block;
      vertical-align: middle;
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

.title {
  font-size: larger;
}

.subtitle {
  font-size: x-small;
  color: grey;
  line-height: 80%;
  margin-bottom: 10px;
}

.ant-row,
.ant-row-flex {
  margin-bottom: 5px;
}

.avatar-uploader > .ant-upload {
  width: 128px;
  height: 128px;
}
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}

.ant-radio-button label {
  font-size: x-small;
}

@media screen and (max-width: @screen-sm) {
  .ant-card {
    width: 100%;
  }
}
</style>
