<template>
  <div>
    <div class="landing_nav">
      <div class="mini_icon">JM</div>
    </div>
    <div class="card">
      <div class="selectpage">SELECT PAGE</div>
      <div class="selectpage_minor">select page for managing with Jongme</div>

      <a-button
        v-for="page in pages"
        :key="page.id"
        :style="{ marginBottom: '10px' }"
        @click="setPage(page)"
        block
        class="page_button"
      >{{ page.name }}</a-button>
    </div>
  </div>
  <!-- <div class="container"> -->
  <!-- <a-card style="width: 500px" :bordered="false"> -->

  <!-- </a-card> -->
  <!-- </div> -->
</template>
<script>
// import store from "@/store";

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
    setPage(page) {
      this.$store.dispatch("auth/selectPage", page).then(res => {
        // const page = store.getters["page/page"];
        // console.log(page);
        this.$router.push("/setting/page");
        console.log(res);
      });
    }
  }
};
</script>

<style lang="less" scope>
@import "~ant-design-vue/lib/style/themes/default.less";
.card {
  width: 80%;
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.selectpage {
  font-weight: 700;
  font-size: 21px;
  color: black;
  margin-top: 28px;
}
.selectpage_minor {
  font-size: 14px;
  color: #606770;
  margin-top: 16px;
  margin-bottom: 32px;
}
.page_button {
  border-radius: 200px;
  background-color: transparent;

  color: #b3b3b3;
  // padding-top: 10px;
  // padding-bottom: 10px;
  overflow: hidden;
}
.mini_icon {
  font-weight: 700;
  font-size: 15px;
  background: -webkit-linear-gradient(#ffd666, #fca226);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.landing_nav {
  /* position: fixed; */
  top: 0;
  width: 100%;
  /* max-width: 375px; */
  background: #ffffff;
  box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.07);

  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 15px;
  padding-right: 15px;
}
// .container {
//   display: -webkit-box;
//   display: -moz-box;
//   display: -ms-flexbox;
//   display: -webkit-flex;
//   display: flex;
//   justify-content: center;
// }

// .title {
//   font-size: larger;
// }

// .subtitle {
//   font-size: x-small;
//   color: grey;
//   line-height: 80%;
//   margin-bottom: 10px;
// }

// .ant-row,
// .ant-row-flex {
//   margin-bottom: 5px;
// }
// @media screen and (max-width: @screen-sm) {
//   .ant-card {
//     width: 100%;
//   }
// }
</style>
