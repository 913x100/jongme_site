<template>
  <div class="card">
    <a-row class="first">
      <!-- image -->
      <a-col :span="4">
        <img src="@/assets/test_pic.jpg" class="user_image" />
      </a-col>
      <a-col :span="1"></a-col>
      <!-- Name -->
      <a-col :span="19" class="enduser_name">End-user Name</a-col>
    </a-row>
    <!-- Date and time -->
    <div class="info_title">Date and time</div>
    <a-row class="card_date">
      <a-col :span="16">Monday, 4 July 2019</a-col>
      <a-col :span="8" class="card_right">9.00 - 10.00</a-col>
    </a-row>
    <!-- Service Type -->
    <div class="info_title">Service Type</div>
    <div>
      <!-- Service Unit -->
      <a-row class="service_type_info">
        <a-col :span="18">Service Unit</a-col>
        <a-col :span="6" class="card_right">1</a-col>
      </a-row>
      <div class="line"></div>
      <!-- optional -->
      <a-row class="service_type_info">
        <a-col :span="18">Phone number</a-col>
        <a-col :span="6" class="card_right">0984561238</a-col>
      </a-row>
      <div class="line"></div>
      <!-- optional -->
      <a-row class="service_type_info">
        <a-col :span="12">Name Surname</a-col>
        <a-col :span="12" class="card_right">Chotiga Tuntragul</a-col>
      </a-row>
      <div class="line"></div>

      <!-- Button -->
      <a-row>
        <a-col :span="11">
          <CardButton text="Absent" color="purple"></CardButton>
        </a-col>
        <a-col :span="2"></a-col>
        <a-col :span="11">
          <CardButton text="Cancle booking" color="red"></CardButton>
        </a-col>
      </a-row>

      <a-row v-if="Waiting|Confirm">
        <a-col :span="11">
          <CardButton text="Approve" color="green"></CardButton>
        </a-col>
        <a-col :span="2"></a-col>
        <a-col :span="11">
          <CardButton text="Cancle booking" color="red"></CardButton>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
import CardButton from "@/components/Dashboard/Badge_info/CardButton.vue";
export default {
  props: ["status"],
  components: {
    CardButton
  }
};
</script>

<style>
.info_title {
  color: black;
  /* font-size: 4vw; */
  font-weight: 500;
  /* margin-bottom: 1.97vh; */
}
.card_right {
  text-align: right;
  font-weight: 500;
}
.card_date {
  /* font-size: 3.73vw; */
  letter-spacing: 0.075em;

  color: #7e7e7e;
  /* margin-bottom: 3.2vh; */
  font-weight: 500;
}
.service_type_info {
  /* margin-bottom: 1.23vh; */
  /* font-size: 3.2vw; */
  color: #6c6c6c;
}
.service_type_info_unit {
  font-weight: 500;
}
.line {
  border: 1px solid #e5e5e5;
  /* margin-bottom: 2.46vh; */
}
.first {
  /* margin-bottom: 3.21vh; */
  position: relative;
}
.enduser_name {
  /* margin-top: 5vw; */
  /* margin-bottom: 5vw; */
  font-weight: 500;
  /* font-size: 4.27vw; */
  color: black;
}
.user_image {
  /* width: 14.27vw; */
  /* height: 14.27vw; */
  border-radius: 100%;
  object-fit: cover;
}
.card {
  /* padding: 4.8vw; */
  background-color: white;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
</style>