<template>
  <div v-if="club" :class="backgroundColour">
    <h1>{{ club }}</h1>
    <div class="charts">
      <div class="charts--bar">
        <h4>Top Scorers</h4>
        <Bar v-if="goalsLabels.length" :dataLabels="goalsLabels" :dataValues="goalsValues"/>
      </div>
    </div>
  </div>
</template>

<script>
import Bar from "@/components/charts/Bar.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  props: ["club"],
  data() {
    return {
      formattedPlayers: [],
      goalsLabels: [],
      goalsValues: []
    };
  },
  methods: {
    ...mapActions(["getPlayersForClub"])
  },
  computed: {
    ...mapGetters(["playersForClub"]),
    backgroundColour() {
      if (this.club === "Liverpool") {
        return "liverpool";
      }
      if (this.club === "Manchester City") {
        return "mancity";
      }
    }
  },
  watch: {
    playersForClub(players) {
      players.forEach(player => {
        let formattedPlayer = {};
        formattedPlayer.name = player.details.name;
        formattedPlayer.goals = player["team-play"].goals;
        formattedPlayer.assists = player["team-play"].assists;
        this.formattedPlayers.push(formattedPlayer);

        const sortedByGoals = this.formattedPlayers.sort((a, b) => b.goals - a.goals);
        const top5Goals = sortedByGoals.slice(0, 5);
        this.goalsLabels = top5Goals.map(player => player.name);
        this.goalsValues = top5Goals.map(player => player.goals);
      });
    }
  },
  components: {
    Bar
  },
  mounted() {
    this.getPlayersForClub(this.club);
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

.charts {
  display: flex;
  &--bar {
    align-self: center;
    position: relative;
    height: 200px;
    width: 360px;
  }

}
</style>