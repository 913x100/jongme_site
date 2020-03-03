<template>
  <div>
    <div style=" ">
      <!-- Nav bar -->
      <div class="landing_nav">
        <div class="mini_icon">JM</div>
      </div>
      <!-- logo -->
      <img class="main_logo" alt="Jongme logo" src="../assets/Jongme_logo.png" />
      <!-- main content -->
      <div class="main_content align_center">
        สร้างระบบ
        <span class="orange_content">‘จอง’</span> ได้ง่ายๆด้วย
        <span class="orange_content">‘จองมี’</span>
      </div>
      <!-- facebook button -->
      <button href="#" @click.prevent="fbConnect" class="button_fb">เข้าใช้งานผ่าน FACEBOOK</button>
      <a-row class="content">
        <a-col :span="8">
          <img class="props" src="../assets/left_landing.png" />
        </a-col>
        <a-col :span="15" style="text-align:right ">
          <div class="main_content">
            ระบบ
            <span class="orange_content">‘จอง’</span> ที่รองรับุรกิจที่หลากหลาย
          </div>
          <div class="minor_content">
            ไม่ว่าคุณจะธุรกิจลักษณะไหน
            <div>ก็สามารถสร้างระบบจองกับจองมีได้</div>
          </div>
        </a-col>
      </a-row>
      <a-row class="content">
        <a-col :span="1"></a-col>
        <a-col :span="15" style="text-align:left ">
          <div class="main_content">
            แชทบอทที่ช่วยดูแลการ
            <span class="orange_content">‘จอง’</span>
          </div>
          <div class="minor_content">
            มีผู้ช่วยเป็นแชทบอท
            <div>ที่ทำให้คุณไม่ต้องมาตอบคำถามซ้ำซาก</div>
            <div>อีกทั้งยังจัดการกับข้อมูลมาให้ที่หลังบ้านอีกด้วย</div>
          </div>
        </a-col>

        <a-col :span="8">
          <img class="props" align="right" alt="right" src="../assets/right_landing.png" />
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import { config } from "@/config";

export default {
  mounted() {
    // console.log(process.env.VUE_APP_URL);
  },
  methods: {
    popupCenter(url, title, w, h) {
      const dualScreenLeft =
        window.screenLeft != undefined ? window.screenLeft : window.screenX;
      const dualScreenTop =
        window.screenTop != undefined ? window.screenTop : window.screenY;

      const width = window.innerWidth
        ? window.innerWidth
        : document.documentElement.clientWidth
        ? document.documentElement.clientWidth
        : screen.width;
      const height = window.innerHeight
        ? window.innerHeight
        : document.documentElement.clientHeight
        ? document.documentElement.clientHeight
        : screen.height;

      const systemZoom = width / window.screen.availWidth;

      const left = (width - w) / 2 / systemZoom + dualScreenLeft;
      const top = (height - h) / 2 / systemZoom + dualScreenTop;

      const newWindow = window.open(
        url,
        title,
        `scrollbars=yes, width=${w}, height=${h}, top=${top}, left=${left}`
      );

      if (window.focus) newWindow.focus();
    },

    fbConnect() {
      this.popupCenter(
        `https://www.facebook.com/v4.0/dialog/oauth?client_id=${config.fb.appId}&redirect_uri=${config.fb.redirectUri}`,
        "Continue with Facebook",
        "600",
        "780"
      );
    }
  }
};
window.addEventListener(
  "message",
  e => {
    if (e.origin !== config.appUrl) return;

    const token = localStorage.getItem("userToken");
    if (e.data !== token) return;
    window.location.href = config.appUrl + "/select";
  },
  false
);
</script>

<style scoped>
.prop2 {
  position: absolute;
  right: 0;
}
.grid-item {
  margin-top: 6.53vh;
}

.props {
  /* height: 21.9vh; */
  /* width: auto; */
  width: 100px;
}

.minor_content {
  /* font-size: 2.93vw; */
  font-size: 12px;
  color: #6c6c6c;
  margin-top: 2.46vh;
}
.align_center {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

.main_content {
  font-size: 15px;
  color: black;
  margin-top: 2.22vh;
}
.orange_content {
  color: #fca226;
}
.main_logo {
  margin-top: 13vh;
  width: 200px;
  height: auto;
  align-items: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.button_fb {
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-color: #4267b2;
  border: none;
  color: white;
  /* padding: 0.985vh 4vw; */
  padding: 5px 15px;
  text-align: center;
  text-decoration: none;
  /* font-size: 2.5vw; */
  font-size: 10px;
  font-weight: 300;
  /* margin-top: 3.079vh; */
  margin-top: 6.53vh;
  /* margin-bottom: 2vh; */
  cursor: pointer;
  border-radius: 5vw;
  letter-spacing: 0.1em;
}
.content {
  margin-top: 8vh;
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
</style>
