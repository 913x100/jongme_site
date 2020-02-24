<template>
  <div>
    <Service></Service>
    <a-divider />
  </div>
</template>
<script>
import api from "@/api";

import Service from "@/components/Setting/Service";

export default {
  components: {
    Service
  },
  created() {
    this.getService();
  },
  data() {
    return {
      loading: false,
      imageUrl: "",
      newService: {
        _id: "",
        page_id: "",
        name: "",
        image_url: "",
        unit_type: "",
        unit_quantity: 1,
        minimum_time_length: 30,
        is_time_adjust: false,
        start_time: "",
        end_time: ""
      }
    };
  },
  methods: {
    getService() {
      api.service
        .getServiceByPage("110030743746925")
        .then(res => {
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
          console.log("error");
        });
    }
  }
};
</script>

<style lang="less" scope>
</style>
