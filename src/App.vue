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
<style >
@import url("https://fonts.googleapis.com/css?family=Kanit:300,400,500,600,700,800,900|Roboto:300,400,500,700,900&display=swap&subset=thai");
.page_title {
  color: #b2b2b2;
  /* font-size: 9.6vw; */
  font-size: 30px;
  font-weight: 700;
  letter-spacing: 0.075em;
  /* margin-top: 2.83vh; */
  margin-bottom: 2.83vh;
  text-align: center;
}

body {
  max-width: 375px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  background-color: #fafafa;
  font-family: "Roboto", "Kanit", sans-serif;
}
button {
  outline: none;
}
.mainfunction {
  font-size: 14px;
  color: #6c6c6c;
  font-weight: 500;

  letter-spacing: 0.04em;
}
.subfunction {
  font-size: 1.47vh;
  color: #7e7e7e;
  font-weight: 500;

  letter-spacing: 0.075em;
}
.subfunction label {
  font-size: 1.47vh;

  color: #7e7e7e;
  /* color: #c4c4c4; */
  font-weight: 500;
}
.booking_button_margin {
  margin-top: 3.82vh;
  margin-bottom: 4.43vh;
  margin-left: auto;
  margin-right: auto;
}
.yellow_button {
  background: #ffc633;
}

.purple_button {
  background: #c06ff2;
}
.main_button {
  display: block;
  text-decoration: none;
  border: none;
  border-radius: 10vh;
  /* padding-top: 1.35vh;
  padding-bottom: 1.35vh;
  padding-left: 8.27vw;
  padding-right: 8.27vw; */
  padding: 11px 26px;
  width: 89px;
  font-size: 12px;
  font-weight: 500;
  color: white;
  /* width: 23.73vw; */
}
.inner_layout {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 90%;
}
/* setting */
.box {
  background: white;
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.07);
  /* width: 90%; */
  padding: 2.22vh;
  border-radius: 4px;
  width: 100%;
}

.back {
  margin-top: 40px;

  width: 95px;
  height: 36px;
  color: white;
  background: #be78e9;
  border-radius: 20px;
  border: none;
}

.next {
  margin-top: 40px;

  width: 95px;
  height: 36px;
  color: white;
  background: #ffc633;
  border-radius: 20px;
  border: none;
}

.function-margin {
  margin-bottom: 1.48vh;
}
.setting_button_layout {
  width: 90%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
}
.middle {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>

