<template>
  <div>
    <Timeslot></Timeslot>
    <SelectService></SelectService>
    <SelectUnit></SelectUnit>
    <PhoneNumber></PhoneNumber>
    <Name></Name>
  </div>
</template>

<script>
import Timeslot from "@/components/Booking/Timeslot";
import SelectService from "@/components/Booking/SelectService";
import SelectUnit from "@/components/Booking/SelectUnit";
import PhoneNumber from "@/components/Booking/PhoneNumber";

import Name from "@/components/Booking/Name";
export default {
  components: {
    Timeslot,
    SelectService,
    SelectUnit,
    PhoneNumber,
    Name
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
  overflow: hidden;
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
.webview_title {
  font-size: 4.8vw;
  color: #6c6c6c;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-align: center;
  margin-top: 4.43vh;
  margin-bottom: 3.82vh;
}
input[type="text"] {
  width: 80%;
  padding: 12px 20px;
  display: inline-block;
  border: 2px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
input[type="text"]:hover {
  border: 2px solid #ffc633;
}
input[type="text"]:focus {
  outline: none;
  border: 2px solid #ffc633;
}
</style>
