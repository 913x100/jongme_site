<template>
  <div>
    <div class="webview_title">Which service do you want ?</div>
    <ul class="choice_button">
      <li>
        <input type="radio" id="s1" name="service" />
        <label for="s1">Basketball Court</label>
      </li>
      <li>
        <input type="radio" id="s2" name="service" />
        <label for="s2">Badminton Court</label>
      </li>
    </ul>
    <MainButton text="Next" color="yellow"></MainButton>
  </div>
</template>
<script>
import MainButton from "@/components/Button";
export default {
  components: {
    MainButton
  }
};
</script>
<style></style>
