<template>
  <div id="app">
    <div id="nav">
      <NavBar :clubs="clubs" :players="playersForClub"/>
    </div>
    <router-view :key="$route.fullPath"/>
  </div>
</template>

<script>
import EventService from "@/services/EventService";
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
#app {
  display: flex;
}
 #nav {
  height: 100vh;
  width: 15vw;
  background: #84baf0;
  margin: 0;
 }
</style>
