<template>
  <div>
    <div class="webview_title">Enter name and surname</div>
    <input type="text" id="name" name="name" placeholder="Enter name and surname" />
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
