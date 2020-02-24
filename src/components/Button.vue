<template>
  <div>
    <!-- hello -->
    <button
      class="main_button booking_button_margin"
      v-bind:class="[{yellow_button:color=='yellow'},{purple_button:color=='purple'}]"
    >{{text}}</button>
  </div>
</template>
<script>
export default {
  props: ["text", "color"]
};
</script>
<style>
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
  padding-top: 1.35vh;
  padding-bottom: 1.35vh;
  padding-left: 8.27vw;
  padding-right: 8.27vw;
  font-size: 3.2vw;
  font-weight: 500;
  color: white;
  width: 23.73vw;
}
</style>