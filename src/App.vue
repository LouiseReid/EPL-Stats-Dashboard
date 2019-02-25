<template>
  <div id="app">
    <div id="nav">
      <NavBar :clubs="clubs" :players="playersForClub"/>
    </div>
    <router-view/>
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
</style>
