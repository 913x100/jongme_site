<template>
  <div>
    <div class="undernav"></div>
    <div class="landing_nav">
      <a-row>
        <a-col :span="3" v-on:click="setting = false">
          <div class="mini_icon">JM</div>
        </a-col>
        <!-- <a-col :span="1"></a-col> -->
        <a-col :span="11"></a-col>
        <a-col :span="10">
          <a-dropdown :placement="bottomRight">
            <a-button class="pagename2">{{pagename}}</a-button>
            <a-menu slot="overlay">
              <a-menu-item>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/selectpage"
                  class="menu-item"
                >select page</a>
              </a-menu-item>
              <a-menu-item>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="/setting/page"
                  class="menu-item"
                >setting</a>
              </a-menu-item>
              <a-menu-item>
                <a target="_blank" rel="noopener noreferrer" href="/login" class="menu-item">logout</a>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      setting: false,
      pagename: "Kingston sport club"
    };
  }
};
</script>
<style>
.menu-item {
  text-align: center;
  font-size: 1.5vh;
}
.pagename2 {
  width: 100%;
  font-size: 1.5vh;
  /* height: 2.6vh; */
  /* align-items: right; */
  border-radius: 11vh;
  color: #ffc633;
  border: 0.2vh solid #ffc633;
  overflow: hidden;
  /* padding-left: 1.2vh; */
  /* padding-right: 1.2vh; */
  padding: 0.5vh;
  text-align: center;
}
.undernav {
  height: 6.5vh;
}
.setting_icon {
  /* width: 4.27vw; */
  width: 70%;
  /* height: 50%; */
  margin-top: 20%;
  margin-bottom: 20%;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.mini_icon {
  font-weight: 900;
  /* font-size: 5.397vw; */
  font-size: 2.6vh;

  background: -webkit-linear-gradient(#ffd666, #fca226);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.landing_nav {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;

  background: #ffffff;
  box-shadow: 0px 4px 7px rgba(0, 0, 0, 0.07);

  padding-top: 1.478vh;
  padding-bottom: 1.478vh;
  padding-left: 1.6vh;
  padding-right: 1.6vh;
}
</style>
