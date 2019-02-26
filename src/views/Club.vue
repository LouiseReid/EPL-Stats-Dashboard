<template>
  <div v-if="club" :class="backgroundColour">{{ club }}</div>
</template>

<script>
import EventService from "@/services/EventService";
import { mapActions, mapGetters } from "vuex";

export default {
  props: ['club'],
  methods: {
    ...mapActions(["getPlayersForClub"])
  },
  computed: {
    ...mapGetters(["playersForClub"]),
          backgroundColour(){
          if(this.club === 'Liverpool'){
              return 'liverpool'
          }
          if(this.club === 'Manchester City'){
              return 'mancity'
          }
      }
  },
  created() {
    this.getPlayersForClub(this.club);
  }
};
</script>

<style lang="scss" scoped>
.liverpool {
    background-color: $liverpool
}

.mancity {
    background-color: $mancity
}
</style>