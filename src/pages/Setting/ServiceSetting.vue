<template>
  <div>
    <div class="page_title">SERVICES</div>
    <div class="container">
      <a-card style="width: 375px" :bordered="false">
        <div v-for="service in services" :key="service._id">
          <Service :service="service"></Service>
        </div>
      </a-card>
    </div>

    <a-button
      size="large"
      style="width: 100%"
      @click="createService"
      :loading="btnLoading"
      class="create-button"
    >ADD NEW SERVICE</a-button>
    <a-rol>
      <a-col :span="17"></a-col>
      <a-col :span="7">
        <button @click="update" class="main_button yellow_button setting_button_layout">Next</button>
      </a-col>
    </a-rol>
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
      service: {
        _id: "12312312323",
        page_id: "12345",
        name: "สนามแบดมินตัน",
        unit_type: "คอร์ท",
        minimum_time_length: 0,
        start_time: "09:00:00",
        end_time: "18:00:00"
      },
      newService: {},
      page: {}
    };
  },
  computed: {},
  methods: {
    getService() {
      // const page_id = store.getters["page/page_id"];
      this.services.push(this.service);
      // api.service
      //   .getServiceByPage(page_id)
      //   .then(res => {
      //     if (res.data != null) {
      //       this.services = res.data;
      //     }
      //   })
      //   .catch(err => {
      //     console.log(err);
      //   });
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
.create-button {
  margin-top: 14px;

  // display: block;
  // text-decoration: none;
  border: none;
  border-radius: 10vh;
  /* padding-top: 1.35vh;
  padding-bottom: 1.35vh;
  padding-left: 8.27vw;
  padding-right: 8.27vw; */
  // padding: 11px 26px;
  // width: 89px;

  font-size: 12px;
  font-weight: 500;
  color: #b2b2b2;
  width: 100%;

  padding: 12px;

  background: #ffffff;
  border-radius: 2px;

  box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.07);
}
</style>
