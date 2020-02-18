<template>
  <div>
    <Timeslot></Timeslot>
    <SelectService></SelectService>
    <SelectUnit></SelectUnit>
    <PhoneNumber></PhoneNumber>
  </div>
</template>

<script>
import Timeslot from "@/components/Booking/Timeslot";
import SelectService from "@/components/Booking/SelectService";
import SelectUnit from "@/components/Booking/SelectUnit";
import PhoneNumber from "@/components/Booking/PhoneNumber";
export default {
  components: {
    Timeslot,
    SelectService,
    SelectUnit,
    PhoneNumber
  }
};
</script>

<style>
.choice_button li {
  width: 100%;
  padding-left: 2.46vh;
  padding-right: 2.46vh;
  text-align: center;

  border-radius: 15vw;
  background-color: white;
}
.choice_button label {
  display: block;
  /* position: relative; */
  font-size: 4.53vw;
  font-weight: 400;
  color: #c4c4c4;
  padding-top: 1.23vh;
  padding-bottom: 1.23vh;
  padding-left: 2.46vh;
  padding-right: 2.46vh;
  border: 2px solid#c4c4c4;

  border-radius: 15vw;
  width: 90%;

  margin-left: auto;
  margin-right: auto;
}
.choice_button li {
  margin-bottom: 0.99vh;
}
.choice_button input[type="radio"]:checked + label,
.choice_button label:hover {
  border: 2px solid #ffc633;
  color: #ffc633;
}

input[type="radio"] {
  position: absolute;
  z-index: -100;
  /* opacity: 0%; */
  visibility: hidden;
}
ul {
  margin-left: 0;
  padding: 0;
}
li {
  /* display: block; */
  list-style-type: none;
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
.main_button {
  display: block;
  text-decoration: none;
  border: none;
  border-radius: 10vh;
  padding-top: 1.35vh;
  padding-bottom: 1.35vh;
  padding-left: 8.27vw;
  padding-right: 8.27vw;
  font-size: 3.2vw;
  font-weight: 500;
  color: white;
}
.webview_title {
  font-size: 4.8vw;
  color: #6c6c6c;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-align: center;
  margin-top: 4.43vh;
  margin-bottom: 3.82vh;
}
</style>
