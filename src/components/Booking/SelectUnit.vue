<template>
  <div>
    <div class="webview_title">How many {{ unit }} do you want ?</div>
    <ul class="choice_button">
      <li>
        <input type="radio" id="s1" name="service" />
        <label for="s1">1</label>
      </li>
      <li>
        <input type="radio" id="s2" name="service" />
        <label for="s2">2</label>
      </li>
    </ul>
    <button class="main_button yellow_button booking_button_margin">
      Next
    </button>
  </div>
</template>
<script>
export default {
  unit: "Court"
};
</script>
<style></style>
