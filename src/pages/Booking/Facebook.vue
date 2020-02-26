<template>
  <div>
    <Time></Time>
  </div>
</template>
<script>
import Time from "@/components/Booking/Time";

export default {
  components: {
    Time
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