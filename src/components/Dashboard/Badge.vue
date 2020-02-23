<template>
  <div class="badge">
    <a-row>
      <a-col :span="16" :push="8">
        <a-row class="detail_margin">
          <a-col :span="7" :push="17">
            <StatusBadge status="Approve"></StatusBadge>
          </a-col>
          <a-col :span="17" :pull="7">
            <div class="service_name">Service Name</div>
          </a-col>
          <div class="username">End-user name</div>
          <div id="badge_date">Today</div>
          <div class="time">10.00-11.00</div>
        </a-row>
      </a-col>
      <a-col :span="8" :pull="16">
        <img src="@/assets/test_pic.jpg" class="crop_image" />
      </a-col>
    </a-row>
  </div>
</template>

<script>
import StatusBadge from "@/components/Dashboard/Badges/StatusBadge";
export default {
  components: {
    StatusBadge
  }
};
</script>

<style>
body {
  background: #fafafa;
}
#badge_date {
  margin-top: 2.03vh;
  font-size: 5.07vw;
  font-weight: 500;
  color: #6c6c6c;
  text-align: right;
}
.time {
  font-size: 3.47vw;
  font-weight: 500;
  color: #6c6c6c;
  text-align: right;
  /* bottom: 0; */
}
.username {
  /* margin-top: 0.53vh; */
  font-size: 3.2vw;
  font-weight: 500;
  color: #a7a7a7;
}
.service_name {
  font-size: 3.2vw;
  font-weight: 500;
  color: #000000;
}
.detail_margin {
  margin: 12px;
}
.crop_image {
  /* height: 100%; */
  width: 100%;
  height: 33vw;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  object-fit: cover;
}
.badge {
  background: white;
  width: 100%;
  /* width: 100%; */
  display: block;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.07);
  border-radius: 4px;

  margin-bottom: 1.23vh;
}
</style>