<template>
  <div>
    <div class="webview_title">Enter phone number</div>
    <input
      type="text"
      id="pnumber"
      name="phonenumber"
      placeholder="Enter phone number"
    />
    <button class="main_button yellow_button booking_button_margin">
      Next
    </button>
  </div>
</template>
<script>
export default {};
</script>
<style>
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
