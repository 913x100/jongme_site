<template>
  <a-row class="month_margin">
    <a-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10">
      <img src="@/assets/left-arrow.png" class="arrow" />
    </a-col>
    <a-col :xs="20" :sm="16" :md="12" :lg="8" :xl="4" class="month">July 2019</a-col>
    <a-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10">
      <img class="arrow" src="@/assets/right-arrow.png" alt />
    </a-col>
  </a-row>
</template>

<script>
export default {};
</script>

<style>
.month_margin {
  margin-top: 1.85vh;
  margin-bottom: 1.85vh;
}
.arrow {
  /* border: 1px solid green; */

  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3px;
  margin-bottom: 3px;

  height: 24px;
}
.month {
  font-size: 5.33vw;
  font-weight: 500;
  text-align: center;
  color: #6c6c6c;
}
</style>