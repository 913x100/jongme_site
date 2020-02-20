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
    <MainButton text="Next" color="yellow"></MainButton>
  </div>
</template>
<script>
import MainButton from "@/components/Button";
export default {
  unit: "Court",
  components: {
    MainButton
  }
};
</script>
<style></style>
