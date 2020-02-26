<template>
  <div class="status_box">
    <div v-if="status=='Absent'" id="absent">Absent</div>
    <div v-if="status=='Approve'" id="approve">Approve</div>
    <div v-if="status=='Confirm'" id="confirm">Confirm</div>
    <div v-if="status=='Waiting'" id="waiting">Waiting</div>
    <div v-if="status=='Cancel'" id="cancel">Cancel</div>
  </div>
</template>

<script>
export default {
  props: ["status"]
};
</script>

<style>
.status_box {
  width: 100%;
  font-size: 11px;
  /* font-size: 2.13vw; */
  font-weight: 500;
  /* padding: 4px; */
  color: white;
  /* letter-spacing: 0.075em; */
  text-align: center;
  /* display: inline-block; */
  /* margin-top: auto; */
  /* margin-bottom: auto; */
}
#absent {
  background: #c06ff2;
  /* padding: 4px; */
  /* padding-top: 0.37vh; */
  /* padding-bottom: 0.37vh; */
  /* border-radius: 2px; */
}
#approve {
  background: #62cc60;
  /* padding-top: 0.37vh; */
  /* padding-bottom: 0.37vh; */
  padding-top: 2px;
  padding-bottom: 2px;
  border-radius: 2px;
}
#confirm {
  background: #00d1ff;
  /* padding-top: 0.37vh; */
  /* padding-bottom: 0.37vh; */
  border-radius: 2px;
}
#waiting {
  background: #ffc633;
  /* padding-top: 0.37vh; */
  /* padding-bottom: 0.37vh; */
  border-radius: 2px;
}
#cancel {
  background: #f5575d;
  /* padding-top: 0.37vh; */
  /* padding-bottom: 0.37vh; */
  border-radius: 2px;
}
</style>