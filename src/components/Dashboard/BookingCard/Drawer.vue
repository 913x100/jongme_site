<template>
  <div>
    <a-row>
      <a-col>
        <a-icon type="avatar" />Username
      </a-col>
    </a-row>
    <a-row>
      <a-col>Date and time</a-col>
      <a-col :span="12">Monday, 4 July 2019</a-col>
      <a-col :span="12" style="textAlign:right">Monday, 4 July 2019</a-col>
    </a-row>
    <a-row>
      <a-col>Service type</a-col>
      <a-row>
        <a-col :span="12">Service unit</a-col>
        <a-col :span="12" style="textAlign:right">1</a-col>
      </a-row>
      <a-row>
        <a-col :span="12">Phone number</a-col>
        <a-col :span="12" style="textAlign:right">0123456789</a-col>
      </a-row>
      <a-row>
        <a-col :span="12">Name</a-col>
        <a-col :span="12" style="textAlign:right">Kittkit Iamsamarng</a-col>
      </a-row>
    </a-row>
    <a-row type="flex" justify="space-around">
      <a-col :span="7">
        <a-button>Absent</a-button>
      </a-col>
      <a-col :span="7">
        <a-button>Delete</a-button>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  props: ["visible"],
  data() {
    return {};
  },
  components: {}
};
</script>

<style>
</style>