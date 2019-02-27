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
import { mapActions, mapGetters } from "vuex";

export default {
  methods: {
    ...mapActions(["getPlayers"])
  },
  computed: {
    ...mapGetters(["clubs", "playersForClub"])
  },
  created() {
    this.getPlayers();
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
  background: #2b3136;
  margin: 0;
 }

 .view {
   width: 90vw;
   height: 100vh;
 }
</style>
