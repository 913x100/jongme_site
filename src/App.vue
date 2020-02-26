<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  components: {}
};
</script>
<style>
body {
  background-color: #fafafa;
}
button {
  outline: none;
}
.mainfunction {
  font-size: 1.71vh;
  color: #6c6c6c;
  font-weight: 500;
}
.subfunction {
  font-size: 1.47vh;
  color: #7e7e7e;
  font-weight: 500;
}
.subfunction label {
  font-size: 1.47vh;

  color: #7e7e7e;
  /* color: #c4c4c4; */
  font-weight: 500;
}
</style>

