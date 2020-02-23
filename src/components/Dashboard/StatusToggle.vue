<template>
  <div>
    <a-row>
      <a-col :span="12">
        <a-row class="toggle_background">
          <a-col
            :span="12"
            v-on:click="approve_checked=true,waiting_checked=false,trash=false"
            class="inside_toggle"
            v-bind:class="{bg_white:approve_checked}"
          >
            <a-row>
              <a-col :span="16" v-bind:class="{bg_white:approve_checked}">Approved</a-col>
              <a-col
                :span="8"
                v-bind:class="[{noti_checked:approve_checked},{noti_unchecked:approve_checked==false}]"
              >12</a-col>
            </a-row>
          </a-col>

          <a-col
            :span="12"
            v-on:click="approve_checked=false,waiting_checked=true,trash=false"
            class="inside_toggle"
            v-bind:class="{bg_white:waiting_checked}"
          >
            <a-row>
              <a-col :span="16" v-bind:class="{bg_white:checked}">Waiting</a-col>
              <a-col
                :span="8"
                v-bind:class="[{noti_checked:waiting_checked},{noti_unchecked:waiting_checked==false}]"
              >12</a-col>
            </a-row>
          </a-col>
        </a-row>
      </a-col>
      <a-col :span="11"></a-col>
      <!-- delete -->
      <a-col :span="1">
        <div v-on:click="approve_checked=false,waiting_checked=false,trash=true">
          <img v-if="trash==false" src="@/assets/trash.png" class="trash" />
          <img v-if="trash==true" src="@/assets/trash_clicked.png" class="trash" />
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      approve_checked: true,
      waiting_checked: false,
      trash: false
    };
  }
};
</script>

<style>
.trash {
  /* border: 1px solid green; */
  width: 80%;
  /* margin-left: 3vw; */
  margin-top: 0.5vh;
}

.bg_white {
  background: white;
  color: #ffc633;
}
.bg_yellow {
  background: #ffc633;
  color: white;
}
.noti_checked {
  width: 4vw;
  height: 4vw;
  background: #ffc633;
  color: white;
  border-radius: 100vw;
}
.noti_unchecked {
  width: 4vw;
  height: 4vw;
  background: white;
  color: #ffc633;
  border-radius: 100vw;
}
.inside_toggle {
  padding: 0.49vh;
  border-radius: 50vw;
}
.toggle_background {
  background-color: #ffc633;
  border-radius: 50vw;
  text-align: center;
  color: white;
  font-weight: 500;
  font-size: 2.4vw;
  padding: 0.49vh;
}
</style>