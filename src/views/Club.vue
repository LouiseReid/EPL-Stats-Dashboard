<template>
  <div>{{ club }}</div>
</template>

<script>
import EventService from "@/services/EventService";
import { mapActions, mapGetters } from "vuex";

export default {
  props: {
    club: {
      type: String
    }
  },
  methods: {
    ...mapActions(["getPlayersForClub"])
  },
  computed: {
    ...mapGetters(["playersForClub"])
  },
  created() {
    this.getPlayersForClub(this.club);
  }
};
</script>

<style scoped>
</style>