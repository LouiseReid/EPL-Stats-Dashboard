<template>
  <div v-if="player.details" :class="backgroundColour">
    <PlayerDetail :details="player.details"/>
    <DefenceStats :stats="player.defence"/>
  </div>
</template>

<script>
import EventService from "@/services/EventService.js";
import PlayerDetail from "@/components/PlayerDetail.vue";
import DefenceStats from "@/components/DefenceStats.vue";

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
    PlayerDetail,
    DefenceStats
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