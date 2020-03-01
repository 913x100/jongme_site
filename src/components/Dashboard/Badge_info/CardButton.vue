<template>
  <div>
    <button
      class="m_button card_button_margin"
      v-bind:class="[{yellow_button:color=='yellow'},{purple_button:color=='purple'},{green_button:color=='green'},{red_button:color=='red'}]"
    >{{text}}</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Approve: true,
      Confirm: false,
      Waiting: false
    };
  },
  props: ["text", "color"]
};
</script>
<style>
.card_button_margin {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.yellow_button {
  background: #ffc633;
}

.purple_button {
  background: #c06ff2;
}
.green_button {
  background: #62cc60;
}
.red_button {
  background: #f5575d;
}
.m_button {
  display: block;
  text-decoration: none;
  border: none;
  border-radius: 10vh;
  padding-top: 1.35vh;
  padding-bottom: 1.35vh;
  /* padding-left: 6.9vw; */
  /* padding-right: 6.9vw; */
  font-size: 3.2vw;
  font-weight: 500;
  color: white;
  width: 36vw;
}
</style>