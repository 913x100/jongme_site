<template>
  <div>
    <div class="webview_title">Choose booking time</div>
    <a-row
      type="flex"
      justify="space-around"
      align="middle"
      style="text-align: center"
      class="timeslot_header "
    >
      <a-col :span="6" class="selected">30 Sep</a-col>
      <a-col :span="6">1 Oct</a-col>
      <a-col :span="6">2 Oct</a-col>
    </a-row>
    <a-row
      type="flex"
      justify="space-around"
      align="middle"
      style="text-align: center"
    >
      <!-- timeslot -->
      <a-col :span="6">
        <ul class="timeslots">
          <li>
            <input type="radio" id="a1" name="time" />
            <label for="a1">10.00</label>
          </li>
          <li>
            <input type="radio" id="a2" name="time" />
            <label for="a2">11.00</label>
          </li>
          <li>
            <input type="radio" id="a3" name="time" />
            <label for="a3">12.00</label>
          </li>
          <li>
            <input type="radio" id="a4" name="time" />
            <label for="a4">13.00</label>
          </li>
        </ul>
      </a-col>
      <a-col :span="6">
        <ul class="timeslots">
          <li>
            <input type="radio" id="b1" name="time" />
            <label for="b1">10.00</label>
          </li>
          <li>
            <input type="radio" id="b2" name="time" />
            <label for="b2">11.00</label>
          </li>
          <li>
            <input type="radio" id="b3" name="time" />
            <label for="b3">12.00</label>
          </li>
          <li>
            <input type="radio" id="b4" name="time" />
            <label for="b4">13.00</label>
          </li>
        </ul>
      </a-col>
      <a-col :span="6">
        <ul class="timeslots">
          <li>
            <input type="radio" id="c1" name="time" />
            <label for="c1">10.00</label>
          </li>
          <li>
            <input type="radio" id="c2" name="time" />
            <label for="c2">11.00</label>
          </li>
          <li>
            <input type="radio" id="c3" name="time" />
            <label for="c3">12.00</label>
          </li>
          <li>
            <input type="radio" id="c4" name="time" />
            <label for="c4">13.00</label>
          </li>
        </ul>
      </a-col>
    </a-row>
    <!-- button -->
    <button class="main_button yellow_button booking_button_margin">
      Next
    </button>
  </div>
</template>
<script>
export default {};
</script>
<style>
.disable_button {
  border: 0.53vw solid #c4c4c4;
  color: #c4c4c4;
}
.timeslot_header_border {
  border: 0.53vw solid #c4c4c4;
  color: #c4c4c4;
}
.timeslot_header {
  /* margin-top: 5.91vh; */
  padding-top: 1.48vh;
  /* padding-bottom: 1.48vh; */
  font-weight: 500;
  font-size: 4.53vw;
  color: #c4c4c4;
}
.selected {
  color: #ffc633;
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
.timeslots {
  list-style-type: none;
}

.timeslots input[type="radio"] {
  opacity: 0;
}

.timeslots li {
  display: block;
  margin-top: 5.34vh;
}

.timeslots input[type="radio"]:checked + label,
.timeslots label:hover {
  border: 0.53vw solid #ffc633;
  color: #ffc633;
}

.timeslots label {
  /* position: relative; */
  /* display: inline-block; */
  border-radius: 0.7vh;
  padding-top: 1.48vh;
  padding-bottom: 1.48vh;
  padding-left: 5.6vw;
  padding-right: 5.6vw;
  font-weight: 500;
  font-size: 4.53vw;
  border: 0.53vw solid #c4c4c4;
  background: none;
  color: #c4c4c4;
}
ul {
  margin-left: 0;
  padding: 0;
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
</style>
