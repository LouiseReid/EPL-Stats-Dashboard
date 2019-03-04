<template>
  <div id="app">
    <div id="nav">
      <NavBar :clubs="clubs" :players="playersForClub"/>
    </div>
    <router-view :key="$route.fullPath" class="view"/>
  </div>
</template>

<script>
import NavBar from "@/components/Nav.vue";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["clubs", "playersForClub"])
  },
  components: {
    NavBar
  }
};
</script>

<style lang="scss">

* {
  margin: 0;
  padding: 0;
}
#app {
  display: flex;
  font-family: 'Padauk', sans-serif;
}
 #nav {
  height: 100vh;
  width: 10vw;
  background: $primary;
  margin: 0;
 }

 .view {
   width: 90vw;
   height: 100vh;
 }
</style>
