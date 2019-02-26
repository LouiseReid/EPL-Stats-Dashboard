<template>
  <div v-if="player.details" :class="backgroundColour">
    <PlayerDetail :details="player.details"/>
  </div>
</template>

<script>
import EventService from "@/services/EventService.js";
import PlayerDetail from "@/components/PlayerDetail.vue";

export default {
  props: ["id"],
  data() {
    return {
      player: {}
    };
  },
  mounted() {
    EventService.getPlayer(this.id).then(res => (this.player = res.data[0]));
  },
  components: {
    PlayerDetail
  },
  computed: {
    backgroundColour() {
      if (this.player.details.club === "Liverpool") {
        return "liverpool";
      }
      if (this.player.details.club === "Manchester City") {
        return "mancity";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.liverpool {
  background-color: $liverpool;
}

.mancity {
  background-color: $mancity;
}
</style>