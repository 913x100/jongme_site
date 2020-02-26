<template>
  <div class="DashbaordLayout">
    <a-layout class="ant-layout">
      <a-layout>
        <a-layout-header style="padding: 0; margin 0">
          <!-- <GlobalHeader></GlobalHeader> -->
          <nav-bar></nav-bar>
        </a-layout-header>
        <a-layout-content style="margin: 24px 24px 0; height: 100%">
          <div class="container">
            <a-card style="width: 375px" :bordered="false">
              <router-view></router-view>
            </a-card>
          </div>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
// import GlobalHeader from "@/components/GlobalHeader";

export default {
  name: "DashboardLayout",
  components: {
    // GlobalHeader,
    NavBar
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
