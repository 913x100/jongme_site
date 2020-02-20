<template>
  <div class="header">
    <a-icon
      class="trigger"
      :type="collapsed ? 'menu-unfold' : 'menu-fold'"
      @click="toggle"
    />
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>
