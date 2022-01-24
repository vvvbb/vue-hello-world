<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" hidden />
    <GoogleMap />
    <HelloWorld msg="Welcome to Your Vue.js App" hidden />
    <SectionText />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import GoogleMap from "./components/GoogleMap.vue";
import SectionText from "./components/SectionText.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    GoogleMap,
    SectionText,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
  padding: 0;
  margin: 0;
}
body {
  margin: 0px;
}
</style>
