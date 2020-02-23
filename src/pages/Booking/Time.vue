<template>
  <div>
    <a-button type="primary" @click="showDrawer">
      <a-icon type="plus" />New account
    </a-button>
    <a-drawer
      title="Choose booking time"
      placement="bottom"
      height="80%"
      @close="onClose"
      :visible="visible"
      :wrapStyle="{height: 'calc(100% - 108px)',overflow: 'auto',paddingBottom: '108px'}"
    >
      <time-drawer></time-drawer>
    </a-drawer>
  </div>
</template>
<script>
import TimeDrawer from "@/components/Booking/Time";

export default {
  components: {
    TimeDrawer
  },
  data() {
    return {
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