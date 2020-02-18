<template>
  <div class="DashbaordLayout">
    <a-layout class="ant-layout">
      <a-layout>
        <a-layout-header background-color="primary">Jongme</a-layout-header>
        <a-layout-content style="margin: 24px 24px 0; height: 100%">
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
export default {
  name: "DashboardLayout",
  components: {}
};
</script>
