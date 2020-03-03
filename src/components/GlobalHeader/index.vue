<template>
  <div class="header">
    <a-row style="margin: 0">
      <a-col :span="8">
        <div class="mini_icon">
          <router-link :to="{path: '/'}" replace>JM</router-link>
        </div>
      </a-col>
      <a-col :span="16" class="right" v-if="isLoggedIn">
        <a-dropdown>
          <a class="ant-dropdown-link" href="#">
            {{page_name}}
            <a-icon type="down" />
          </a>

          <a-menu slot="overlay">
            <a-menu-item>
              <router-link :to="{path: '/select'}" replace>Select page</router-link>
            </a-menu-item>
            <a-menu-item>
              <router-link :to="{path: '/setting/page'}" replace>Setting</router-link>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;" @click="logout">Logout</a>
            </a-menu-item>
          </a-menu>
        </a-dropdown>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      isLoggedIn: "page/isLoggedIn",
      page_name: "page/page_name"
    })
  },
  methods: {
    logout() {
      this.$store.dispatch("auth/logout");
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="less">
@import "./index.less";
</style>
