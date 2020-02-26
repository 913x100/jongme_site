<template>
  <div>
    <div class="webview_title">Enter phone number</div>
    <input type="text" id="pnumber" name="phonenumber" placeholder="Enter phone number" />
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
<style>
</style>
