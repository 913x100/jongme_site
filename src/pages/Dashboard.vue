<template>
  <div class="dash">
    <div>NavBar</div>
    <div class="page_title">DASHBOARD</div>
    <div style="margin-bottom: 1.85vh">
      <StatusToggle></StatusToggle>
    </div>
    <button class="add">
      <span class="add_text">+</span>
    </button>
    <MonthToggle></MonthToggle>
    <div id="date">Monday, 4 July 2019</div>
    <div v-on:click="badge_clicked=true">
      <Badge></Badge>
    </div>

    <div v-if="badge_clicked" class="outter">
      <InfoCard status="Approve" class="hid-box"></InfoCard>
      <div class="popup_bg"></div>
    </div>
  </div>
</template>

<script>
import InfoCard from "@/components/Dashboard/Badge_info/InfoCard";
import Badge from "@/components/Dashboard/Badge";
import MonthToggle from "@/components/Dashboard/MonthToggle";
import StatusToggle from "@/components/Dashboard/StatusToggle";
export default {
  data() {
    return {
      badge_clicked: false,
      badge_status: "Approve"
    };
  },

  components: {
    Badge,
    MonthToggle,
    StatusToggle,
    InfoCard
  }
};
</script>
<style>
.hid-box {
  background: (rgba(0, 0, 0, 0.04));
  position: absolute;
  z-index: 2;
  bottom: 0;
  left: 0;
  width: 100vw;
  /* top: 100%;
  position: relative;
  transition: all 0.3s ease-out;
  height: 100%; */
}
.popup_bg {
  background: (rgba(0, 0, 0, 0.9));
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
}
.add_text {
  font-size: 12.53vw;
  line-height: 7.53vw;
  color: #b2b2b2;
}
.add {
  width: 100%;
  padding-top: 2.16vw;
  padding-bottom: 2.16vw;
  background-color: white;
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.07);
  border-radius: 4px;

  border: none;
}
#date {
  color: #a7a7a7;
  margin-bottom: 1.23vh;
  font-size: 2.67vw;
}
.dash {
  width: 100%;
  padding-left: 2.5%;
  padding-right: 2.5%;
}
.page_title {
  color: #b2b2b2;
  font-size: 9.6vw;
  font-weight: 700;
  letter-spacing: 0.075em;
  margin-top: 2.83vh;
  margin-bottom: 2.83vh;
  text-align: center;
}
</style>