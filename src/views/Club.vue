<template>
  <div v-if="club" :class="backgroundColour">
    <h2>{{ club }}</h2>
    <div class="charts">
      <div class="element top-scorers">
        <h4>Top Scorers</h4>
        <div class="charts--bar">
          <Bar v-if="goalsLabels.length" :dataLabels="goalsLabels" :dataValues="goalsValues"/>
        </div>
      </div>
      <div class="element top-assists">
        <h4>Top Assists</h4>
        <div class="charts--bar">
          <Bar v-if="assistsLabels.length" :dataLabels="assistsLabels" :dataValues="assistsValues"/>
        </div>
      </div>
      <div class="element clean-sheets">
        <h4>Clean Sheets</h4>
        <div class="charts--bar">
          <Bar v-if="csLabels.length" :dataLabels="csLabels" :dataValues="csValues"/>
        </div>
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
      goalsValues: [],
      assistsLabels: [],
      assistsValues: [],
      csLabels: [],
      csValues: []
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

        if (player.defence) {
          if (player.defence["clean-sheets"]) {
            formattedPlayer["clean-sheets"] = player.defence["clean-sheets"];
          } else {
            formattedPlayer["clean-sheets"] = 0;
          }
        } else {
          formattedPlayer["clean-sheets"] = 0;
        }
        this.formattedPlayers.push(formattedPlayer);

        const sortedByGoals = this.formattedPlayers.sort(
          (a, b) => b.goals - a.goals
        );
        const top5Goals = sortedByGoals.slice(0, 5);
        this.goalsLabels = top5Goals.map(player => player.name);
        this.goalsValues = top5Goals.map(player => player.goals);

        const sortedByAssists = this.formattedPlayers.sort(
          (a, b) => b.assists - a.assists
        );
        const top5Assists = sortedByAssists.slice(0, 5);
        this.assistsLabels = top5Assists.map(player => player.name);
        this.assistsValues = top5Assists.map(player => player.assists);

        const sortedByCleanSheets = this.formattedPlayers.sort(
          (a, b) => b["clean-sheets"] - a["clean-sheets"]
        );
        const top5cs = sortedByCleanSheets.slice(0, 5);
        this.csLabels = top5cs.map(player => player.name);
        this.csValues = top5cs.map(player => player["clean-sheets"]);
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

h2 {
  @include statHeader;
  font-size: 30px;
}

.charts {
  display: flex;
  &--bar {
    @include bar;
  }
}

.element {
  @include wrapper;
  & h4 {
    text-align: center;
  }
}

.top-scorers,
.top-assists {
  padding: 15px;
  height: 50vh;
}
</style>