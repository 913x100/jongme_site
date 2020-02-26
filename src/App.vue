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
.page_title {
  color: #b2b2b2;
  /* font-size: 9.6vw; */
  font-size: 36px;
  font-weight: 700;
  letter-spacing: 0.075em;
  /* margin-top: 2.83vh; */
  margin-bottom: 2.83vh;
  text-align: center;
}

body {
  background-color: #fafafa;
}
button {
  outline: none;
}
.mainfunction {
  font-size: 1.71vh;
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

/* setting */
.box {
  display: block;
  margin-left: auto;
  margin-right: auto;
  background: white;
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.07);
  width: 90%;
  padding: 2.22vh;
  border-radius: 4px;
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
</style>

