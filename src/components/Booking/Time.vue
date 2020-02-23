<template>
  <div>
    <div class="container">
      <div class="flex-item">
        <a-checkbox-group :defaultValue="['Apple']">
          <a-row>
            <a-col>
              <a-checkbox>asdas</a-checkbox>
            </a-col>
            <a-col>
              <a-checkbox>asdas</a-checkbox>
            </a-col>
            <a-col>
              <a-checkbox>asdas</a-checkbox>
            </a-col>
            <a-col>
              <a-checkbox>asdas</a-checkbox>
            </a-col>
            <a-col>
              <a-checkbox>asdas</a-checkbox>
            </a-col>
            <a-col>
              <a-checkbox>asdas</a-checkbox>
            </a-col>
          </a-row>
        </a-checkbox-group>
      </div>
      <div class="flex-item">
        <a-checkbox-group :defaultValue="['Apple']">
          <a-row>
            <a-col>
              <a-checkbox>asdas</a-checkbox>
            </a-col>
            <a-col>
              <a-checkbox>asdas</a-checkbox>
            </a-col>
            <a-col>
              <a-checkbox>asdas</a-checkbox>
            </a-col>
            <a-col>
              <a-checkbox>asdas</a-checkbox>
            </a-col>
            <a-col>
              <a-checkbox>asdas</a-checkbox>
            </a-col>
            <a-col>
              <a-checkbox>asdas</a-checkbox>
            </a-col>
          </a-row>
        </a-checkbox-group>
      </div>
      <div class="flex-item">
        <a-checkbox-group :defaultValue="['Apple']">
          <a-row>
            <a-col>
              <a-checkbox>asdas</a-checkbox>
            </a-col>
            <a-col>
              <a-checkbox>asdas</a-checkbox>
            </a-col>
            <a-col>
              <a-checkbox>asdas</a-checkbox>
            </a-col>
            <a-col>
              <a-checkbox>asdas</a-checkbox>
            </a-col>
            <a-col>
              <a-checkbox>asdas</a-checkbox>
            </a-col>
            <a-col>
              <a-checkbox>asdas</a-checkbox>
            </a-col>
          </a-row>
        </a-checkbox-group>
      </div>
    </div>
    <div
      :style="{
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #e9e9e9',
          padding: '10px 16px',
          background: '#fff',
          textAlign: 'right',
        }"
    >
      <a-button :style="{marginRight: '8px'}" @click="onClose">Cancel</a-button>
      <a-button @click="onClose" type="primary">Submit</a-button>
    </div>
  </div>
</template>
<script>
const optionsWithDisabled = [
  { label: "Apple", value: "Apple", disabled: true },
  { label: "Pear", value: "Pear" },
  { label: "Orange", value: "Orange", disabled: false }
];

export default {
  data() {
    return {
      optionsWithDisabled,
      form: this.$form.createForm(this),
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
</style>