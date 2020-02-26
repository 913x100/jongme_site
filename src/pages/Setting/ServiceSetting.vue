<template>
  <div class="container">
    <a-card style="width: 375px" :bordered="false">
      <div v-for="service in services" :key="service._id">
        <Service :service="service"></Service>
        <a-divider />
      </div>
      <a-button
        size="large"
        style="width: 100%"
        @click="createService"
        :loading="btnLoading"
      >create new service</a-button>
      <a-button @click="update">update</a-button>
    </a-card>
  </div>
</template>
<script>
import api from "@/api";
import store from "@/store";
import axios from "axios";
import { config } from "@/config.js";

import Service from "@/components/Setting/Service";

export default {
  components: {
    Service
  },
  created() {
    // this.page = store.getter["page/page"];
    this.getPage();
    this.getService();
  },
  data() {
    return {
      btnLoading: false,
      loading: false,
      imageUrl: "",
      services: [],
      newService: {},
      page: {}
    };
  },
  computed: {},
  methods: {
    getService() {
      const page_id = store.getters["page/page_id"];
      api.service
        .getServiceByPage(page_id)
        .then(res => {
          if (res.data != null) {
            this.services = res.data;
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    getPage() {
      const page_id = store.getters["page/page_id"];
      api.page
        .getPage(page_id)
        .then(res => {
          this.page = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    },
    createService() {
      this.btnLoading = true;
      const page_id = store.getters["page/page_id"];
      api.service
        .createService()
        .then(res => {
          this.newService = res.data;
          this.newService.page_id = page_id;
          this.newService.start_time = this.page.start_time;
          this.newService.end_time = this.page.end_time;
          console.log(this.newService);
          this.services.push(this.newService);
          this.btnLoading = false;
        })
        .catch(err => {
          this.btnLoading = false;
          console.log(err);
        });
    },
    async update() {
      let services = this.services.map(async service => {
        await axios.put(`${config.apiUrl}/service/${service._id}`, service);
      });

      await Promise.all(services);
    }
  }
};
</script>

<style lang="less">
.container {
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  justify-content: center;
}
</style>
