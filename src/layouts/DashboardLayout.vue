<template>
  <div class="DashbaordLayout">
    <a-layout class="ant-layout">
      <a-layout>
        <a-layout-header style="padding: 0; margin 0">
          <GlobalHeader></GlobalHeader>
        </a-layout-header>
        <a-layout-content style="margin: 24px 10px 0; height: 100%">
          <!-- <div class="container"> -->
          <router-view></router-view>
          <!-- </div> -->
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import GlobalHeader from "@/components/GlobalHeader";

export default {
  name: "DashboardLayout",
  components: {
    GlobalHeader
  }
};
</script>

<style lang="less">
@import "~ant-design-vue/lib/style/themes/default.less";

.ant-layout {
  background-color: #fafafa;
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

@media screen and (max-width: @screen-sm) {
  .ant-card {
    width: 100%;
  }
}
</style>
