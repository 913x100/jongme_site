<template>
  <div class="container">
    <a-card style="width: 500px" :bordered="false">
      <a-button
        v-for="page in pages"
        :key="page.id"
        :style="{ marginBottom: '10px' }"
        v-on:click="setPage(page.id)"
        block
      >
        {{ page.name }}
      </a-button>
    </a-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pages: []
    };
  },
  mounted() {
    this.getPages();
  },
  methods: {
    getPages() {
      this.$store.dispatch("auth/pages").then(res => {
        this.pages = res;
      });
    },
    setPage(id) {
      this.$store.dispatch("auth/selectPage", id).then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style lang="less" scope>
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

.ant-row,
.ant-row-flex {
  margin-bottom: 5px;
}
@media screen and (max-width: @screen-sm) {
  .ant-card {
    width: 100%;
  }
}
</style>
