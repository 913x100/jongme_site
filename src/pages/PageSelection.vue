<template>
  <div v-bind:class="{ test: selected }">
    <NavBar></NavBar>
    <div class="title_margin">
      <div class="title">SELECT PAGE</div>
      <div class="subtitle">select page for managing with Jongme</div>
    </div>
    <ul class="choice_button">
      <li>
        <input type="radio" id="s1" name="service" />
        <label for="s1">Fortune teller</label>
      </li>
      <li>
        <input type="radio" id="s2" name="service" />
        <label for="s2">Kingston Sport Club</label>
      </li>
    </ul>
    <MainButton text="Next" color="yellow"></MainButton>

    <Alert
      title="Warning"
      subtitle="Please select at least one page for managing with Jongme first"
      v-if="selected==false"
    ></Alert>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar";
import MainButton from "@/components/Button";
import Alert from "@/components/Alert";
export default {
  data: function() {
    return {
      // selected: false
      selected: true
    };
  },
  components: {
    Alert,
    MainButton,
    NavBar
  }
};
</script>
<style>
.title {
  color: black;
  font-size: 5.6vw;
  font-weight: 700;
}
.subtitle {
  color: #7e7e7e;
  font-size: 3.73vw;
  font-weight: 500;
  margin-top: 0.97vh;
}
.title_margin {
  margin-top: 3.82vh;
  margin-bottom: 3.82vh;
  text-align: center;
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.choice_button li {
  width: 100%;
  padding-left: 2.46vh;
  padding-right: 2.46vh;
  text-align: center;

  border-radius: 15vw;
  background-color: white;
}
.choice_button label {
  display: block;
  /* position: relative; */
  font-size: 4.53vw;
  font-weight: 400;
  color: #c4c4c4;
  padding-top: 1.23vh;
  padding-bottom: 1.23vh;
  padding-left: 2.46vh;
  padding-right: 2.46vh;
  border: 2px solid#c4c4c4;

  border-radius: 15vw;
  width: 90%;

  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  /* height: 80px; */
}
.choice_button li {
  margin-bottom: 0.99vh;
}
.choice_button input[type="radio"]:checked + label,
.choice_button label:hover {
  border: 2px solid #ffc633;
  color: #ffc633;
}

input[type="radio"] {
  position: absolute;
  z-index: -100;
  /* opacity: 0%; */
  visibility: hidden;
}
ul {
  margin-left: 0;
  padding: 0;
}
li {
  /* display: block; */
  list-style-type: none;
}
.booking_button_margin {
  margin-top: 3.82vh;
  margin-bottom: 4.43vh;
  margin-left: auto;
  margin-right: auto;
}
.yellow_button {
  background: #ffc633;
}
.main_button {
  display: block;
  text-decoration: none;
  border: none;
  border-radius: 10vh;
  padding-top: 1.35vh;
  padding-bottom: 1.35vh;
  padding-left: 8.27vw;
  padding-right: 8.27vw;
  font-size: 3.2vw;
  font-weight: 500;
  color: white;
}
</style>