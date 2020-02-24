<template>
  <div>
    <a-spin :spinning="loading">
      <div class="container">
        <div class="flex-item">
          <a-row>
            <a-col class="checkbox" v-for="slot in slots" :key="slot">
              <input type="checkbox" :id="'checkbox_'+slot" />
              <label :for="'checkbox_'+slot" class="text-caption">{{slot}}</label>
            </a-col>
          </a-row>
        </div>
        <div class="flex-item"></div>
        <div class="flex-item"></div>
      </div>
    </a-spin>
  </div>
</template>
<script>
import api from "@/api";

export default {
  data() {
    return {
      loading: false,
      visible: false,
      slots: []
    };
  },
  created() {
    this.getServiceSlots();
  },
  methods: {
    getServiceSlots() {
      this.loading = true;
      api.service.serviceSlots("5e52540376348adc430f15fc").then(res => {
        this.slots = res.data;
        this.loading = false;
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import "~ant-design-vue/lib/style/themes/default.less";

.container {
  display: flex;
  justify-content: center;
}

.flex-item {
  flex-grow: 2;
  text-align: center;
}

.checkbox {
  margin: 1em;
  input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    // left: -9999px;

    &:checked + label {
      border-color: @primary-color;
      color: @primary-color;
    }
    &:disabled + label {
      background-color: #f0f0f0;
      border-color: #f0f0f0;
      color: grey;
    }
  }
  label {
    position: relative;
    cursor: pointer;
    color: grey;
    border: 2px solid #f0f0f0;
    border-radius: 5px;
    text-align: center;
    padding: 0.5em 1em 0.5em 1em;
    display: inline-block;
  }
}
</style>
