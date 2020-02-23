<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>

<style lang="less">
@import (css) url("https://fonts.googleapis.com/css?family=Kanit&display=swap");
@import "~ant-design-vue/lib/style/themes/default.less";

body {
  font-family: "Kanit", sans-serif;
  background: #f0f2f5;
}
</style>
