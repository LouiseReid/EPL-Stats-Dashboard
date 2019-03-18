<template>
  <div v-if="player.details" :class="backgroundColour" class="wrapper">
    <slot name="nav"/>
    <div class="element--1">
      <PlayerDetail :details="player.details"/>
      <DisciplineStats :stats="player.discipline"/>
    </div>

    <div class="element--2">
      <DefenceStats
        v-if="player.details.position === 'Defender' || player.details.position === 'Midfielder'"
        :stats="player.defence"
      />
      <AttackStats v-if="player.details.position === 'Forward'" :stats="player.attack"/>
      <GoalkeeperStats v-if="player.details.position === 'Goalkeeper'" :stats="player.defence"/>
    </div>

    <div class="element--3">
      <RadarWrapper header="Team Play" :stats="player['team-play']"/>
      <RadarWrapper
        v-if=" player.details.position === 'Midfielder'"
        header="Attack"
        :stats="player.attack"
      />
    </div>
  </div>
</template>

<script>
import PlayerService from "@/services/PlayerService.js";
import PlayerDetail from "@/components/PlayerDetail.vue";
import DefenceStats from "@/components/DefenceStats.vue";
import AttackStats from "@/components/AttackStats.vue";
import DisciplineStats from "@/components/DisciplineStats.vue";
import GoalkeeperStats from "@/components/GoalkeeperStats.vue";
import RadarWrapper from "@/components/RadarWrapper.vue";

export default {
  props: ["id"],
  data() {
    return {
      player: {}
    };
  },
  mounted() {
    PlayerService.getPlayer(this.id).then(res => (this.player = res.data[0]));
  },
  components: {
    PlayerDetail,
    DefenceStats,
    AttackStats,
    DisciplineStats,
    RadarWrapper,
    GoalkeeperStats
  },
  computed: {
    backgroundColour() {
      switch (this.player.details.club) {
        case "Liverpool":
          return "liverpool";
          break;
        case "Manchester City":
          return "mancity";
          break;
        case "Chelsea":
          return "chelsea";
          break;
        case "Arsenal":
          return "arsenal";
          break;
        case "Manchester United":
          return "manutd";
          break;
        case "Tottenham Hotspur":
          return "tottenham";
          break;
        default:
          null;
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: space-evenly;
  height: 100vh;
  overflow: scroll;
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

.arsenal {
  background-color: $arsenal;
}
.liverpool {
  background-color: $liverpool;
}

.mancity {
  background-color: $mancity;
}

.manutd {
  background-color: $manutd;
}

.chelsea {
  background-color: $chelsea;
}

.tottenham {
  background-color: $tottenham;
}

@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (orientation: portrait) {
  .wrapper {
    flex-direction: column;
    border: 1px solid;
    height: fit-content;
  }

  .element--1 {
    flex-direction: row;
    width: 100%;
    height: fit-content;
  }

  .element--2 {
    width: 100%;
  }

  .element--3 {
    width: 100%;
    height: fit-content;
  }
}
</style>