<template>
  <div>
    <div class="alert_box">
      <div class="alert_title">{{title}}</div>
      <div class="alert_subtitle">{{subtitle}}</div>
      <MainButton text="Ok" color="yellow"></MainButton>
    </div>
    <div class="alert_bg"></div>
  </div>
</template>
<script>
import MainButton from "@/components/Button";
export default {
  props: ["title", "subtitle"],
  components: {
    MainButton
  }
};
</script>
<style>
.alert_bg {
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}

.alert_title {
  font-size: 4.53vw;
  font-weight: 700;
  color: black;
  margin-top: 4.43vh;
}
.alert_subtitle {
  font-size: 4vw;
  font-weight: 500;
  color: #7e7e7e;
  margin-top: 4.56vh;
}
.alert_box {
  /* border: 1px green solid; */
  border-radius: 5px;
  background-color: white;
  width: 80%;
  display: block;
  /* margin-left: -40%; */
  /* margin-right: ; */
  /* margin: auto; */
  text-align: center;
  padding-left: 5%;
  padding-right: 5%;
  position: absolute;
  z-index: 3;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>