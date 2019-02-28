<template>
  <div v-if="player.details" :class="backgroundColour">
    <PlayerDetail :details="player.details"/>
    <div class="stats-container">
      <DefenceStats v-if="player.details.position === 'Defender' || player.details.position === 'Midfielder'" :stats="player.defence"/>
      <div class="stats-container--inner">
        <DisciplineStats :stats="player.discipline"/>
        <RadarWrapper header="Team Play" :stats="player['team-play']"/>
        <RadarWrapper v-if="player.details.position === 'Forward' || player.details.position === 'Midfielder'" header="Attack" :stats="player.attack"/>
      </div>
    </div>
  </div>
</template>

<script>
import EventService from "@/services/EventService.js";
import PlayerDetail from "@/components/PlayerDetail.vue";
import DefenceStats from "@/components/DefenceStats.vue";
import DisciplineStats from "@/components/DisciplineStats.vue";
import RadarWrapper from "@/components/RadarWrapper.vue";

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
    DefenceStats,
    DisciplineStats,
    RadarWrapper
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
.stats-container {
  display: flex;
  justify-content: flex-start;

  &--inner {
    width: 65%
  }
}

.liverpool {
  background-color: $liverpool;
}

.mancity {
  background-color: $mancity;
}
</style>