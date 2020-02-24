<template>
  <div class="container">
    <a-card style="width: 500px" :bordered="false">
      <a-row>
        <a-col>Operating Hour</a-col>
      </a-row>
      <a-row>
        <a-col :span="12">
          <a-form-item label="Start" style="margin-bottom:0;">
            <a-time-picker
              placeholder="end"
              size="large"
              :defaultOpenValue="moment('00:00', 'HH:mm')"
              format="HH:mm"
            />
          </a-form-item>
        </a-col>
        <a-col :span="12">
          <a-form-item label="Start" style="margin-bottom:0;">
            <a-time-picker
              placeholder="end"
              size="large"
              :defaultOpenValue="moment('00:00', 'HH:mm')"
              format="HH:mm"
            />
          </a-form-item>
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>
<script>
import moment from "moment";

export default {
  methods: {
    moment
  }
};
</script>

<style lang="less">
@import "~ant-design-vue/lib/style/themes/default.less";

.container {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  justify-content: center;
}

.ant-row {
  .ant-form-item {
    display: flex;
  }

  .ant-form-item-control-wrapper {
    flex: 1;
  }
}

@media screen and (max-width: @screen-sm) {
  .ant-card {
    width: 100%;
  }
}
</style>
