<template>
  <div v-if="club" :class="[backgroundColour, 'wrapper']">
    <h2>{{ club }}</h2>
    <div class="charts">
      <div class="element">
        <h4>Top Scorers</h4>
        <div class="charts--bar">
          <Bar
            v-if="goalsLabels.length"
            :dataLabels="goalsLabels"
            :dataValues="goalsValues"
            colour="#4eb7b6"
          />
        </div>
      </div>
      <div class="element">
        <h4>Top Assists</h4>
        <div class="charts--bar">
          <Bar
            v-if="assistsLabels.length"
            :dataLabels="assistsLabels"
            :dataValues="assistsValues"
            colour="#f48794"
          />
        </div>
      </div>
      <div class="element">
        <h4>Clean Sheets</h4>
        <div class="charts--bar">
          <Bar
            v-if="csLabels.length"
            :dataLabels="csLabels"
            :dataValues="csValues"
            colour="#d7c887"
          />
        </div>
      </div>
      <div class="element">
        <h4>Matches Won/Lost</h4>
        <div class="charts--bar">
          <GroupedBar
            v-if="wlLabels.length"
            :dataLabels="wlLabels"
            :wonDataValues="wonValues"
            :lostDataValues="lostValues"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bar from "@/components/charts/Bar.vue";
import GroupedBar from "@/components/charts/GroupedBar.vue";
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
      csValues: [],
      wlLabels: [],
      wonValues: [],
      lostValues: []
    };
  },
  methods: {
    ...mapActions(["getPlayersForClub"])
  },
  computed: {
    ...mapGetters(["playersForClub"]),
    backgroundColour() {
      switch (this.club) {
        case "Liverpool":
          return "liverpool"
          break;
        case "Manchester City":
          return "mancity"
          break;
        case "Chelsea":
          return "chelsea"
          break;
        case "Arsenal":
          return "arsenal"
          break;
        case "Manchester United":
          return "manutd"
          break;
        case "Tottenham Hotspur":
          return "tottenham"
          break;
        default: null
          break;
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
        formattedPlayer.wins = player.details.wins;
        formattedPlayer.losses = player.details.losses;

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
        this.goalsLabels = top5Goals.map(player => player.name.split(' '));
        this.goalsValues = top5Goals.map(player => player.goals);

        const sortedByAssists = this.formattedPlayers.sort(
          (a, b) => b.assists - a.assists
        );
        const top5Assists = sortedByAssists.slice(0, 5);
        this.assistsLabels = top5Assists.map(player => player.name.split(' '));
        this.assistsValues = top5Assists.map(player => player.assists);

        const sortedByCleanSheets = this.formattedPlayers.sort(
          (a, b) => b["clean-sheets"] - a["clean-sheets"]
        );
        const top5cs = sortedByCleanSheets.slice(0, 5);
        this.csLabels = top5cs.map(player => player.name.split(' '));
        this.csValues = top5cs.map(player => player["clean-sheets"]);

        const sortedByWins = this.formattedPlayers.sort(
          (a, b) => b.wins - b.losses
        );

        const top5Wins = sortedByWins.slice(0, 5);
        this.wlLabels = top5Wins.map(player => player.name.split(' '));
        this.wonValues = top5Wins.map(player => player.wins);
        this.lostValues = top5Wins.map(player => player.losses);
      });
    }
  },
  components: {
    Bar,
    GroupedBar
  },
  mounted() {
    this.getPlayersForClub(this.club);
  }
};
</script>

<style lang="scss" scoped>
.arsenal {
  background-color: $arsenal
}
.liverpool {
  background-color: $liverpool;
}

.mancity {
  background-color: $mancity;
}

.manutd {
  background-color: $manutd
}

.chelsea {
  background-color: $chelsea
}

.tottenham {
  background-color: $tottenham
}

.wrapper {
  height: 100vh;
  margin: 1px solid black;
}

h2 {
  text-align: center;
  letter-spacing: 2.5px;
  font-size: 25px;
}

.charts {
  display: grid;
  grid-template-columns: auto auto;
  height: 95%;
  &--bar {
    display: inline-block;
    margin: 0 auto;
    position: relative;
    height: 180px;
    width: 285px;
  }
}

.element {
  @include wrapper;
  text-align: center;
  margin: 0 auto;
  padding: 27px;
  height: 82%;
  width: 60%;
  & h4 {
    text-align: center;
  }
}
</style>