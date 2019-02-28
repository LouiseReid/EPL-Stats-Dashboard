<template>
  <div v-if="player.details" :class="backgroundColour" class="wrapper">
    <div class="element--1">
      <PlayerDetail :details="player.details"/>
      <DisciplineStats :stats="player.discipline"/>
    </div>

    <div class="element--2">
      <DefenceStats
        v-if="player.details.position === 'Defender' || player.details.position === 'Midfielder'"
        :stats="player.defence"
      />
    </div>

    <div class="element--3">
      <RadarWrapper header="Team Play" :stats="player['team-play']"/>
      <RadarWrapper
        v-if="player.details.position === 'Forward' || player.details.position === 'Midfielder'"
        header="Attack"
        :stats="player.attack"
      />
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
.wrapper {
  display: flex;
  justify-content: space-evenly; 
}
.element--1 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 22%;
  height: 100vh;
}
.element--2 {
  display: flex;
  justify-content: flex-start;
  width: 35%;
}

.element--3 {
  display: flex;
  flex-direction: column;
  width: 35%;
}

.liverpool {
  background-color: $liverpool;
}

.mancity {
  background-color: $mancity;
}
</style>