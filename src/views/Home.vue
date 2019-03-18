<template>
  <div id="wrapper">
    <slot name="nav"/>
    <section id="header">
      <h1>English Premier League Player Stats 2018-19</h1>
      <p>All stats correct as of game week 30</p>
    </section>
    <div v-if="allPlayers.length === 0" id="loading">
      <v-progress-circular indeterminate color="#b387cf"/>
    </div>
    <div class="charts" >
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
    </div>
  </div>
</template>

<script>
import Bar from "@/components/charts/Bar.vue";
import { mapActions, mapGetters } from "vuex";

export default {
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
  components: {
    Bar
  },
  methods: {
    ...mapActions(["getPlayers"])
  },
  computed: {
    ...mapGetters(["allPlayers"])
  },
  watch: {
    allPlayers(players) {
      players.forEach(player => {
        let formattedPlayer = {};
        formattedPlayer.name = player.details.name;
        formattedPlayer.goals = player["team-play"].goals;
        formattedPlayer.assists = player["team-play"].assists;
        if (player.details.position === "Goalkeeper") {
          formattedPlayer["clean-sheets"] = player.defence["clean-sheets"];
        } else {
          formattedPlayer["clean-sheets"] = 0;
        }
        this.formattedPlayers.push(formattedPlayer);
        const sortedByGoals = this.formattedPlayers.sort(
          (a, b) => b.goals - a.goals
        );
        const top5Goals = sortedByGoals.slice(0, 5);
        this.goalsLabels = top5Goals.map(player => player.name.split(" "));
        this.goalsValues = top5Goals.map(player => player.goals);
        const sortedByAssists = this.formattedPlayers.sort(
          (a, b) => b.assists - a.assists
        );
        const top5Assists = sortedByAssists.slice(0, 5);
        this.assistsLabels = top5Assists.map(player => player.name.split(" "));
        this.assistsValues = top5Assists.map(player => player.assists);
        const sortedByCleanSheets = this.formattedPlayers.sort(
          (a, b) => b["clean-sheets"] - a["clean-sheets"]
        );
        const top5cs = sortedByCleanSheets.slice(0, 5);
        this.csLabels = top5cs.map(player => player.name.split(" "));
        this.csValues = top5cs.map(player => player["clean-sheets"]);
      });
    }
  },
  created() {
    this.getPlayers();
  }
};
</script>

<style lang="scss" scoped>
#wrapper {
  display: flex;
  flex-direction: column;
  background: linear-gradient(rgba(178, 166, 219, 0.75)),
  url("../assets/stadium.jpg");
  background-size: cover;
  overflow: scroll;
}

#loading {
  width: fit-content;
  margin: 0 auto
}

h1,
p {
  text-align: center;
}

.charts {
  display: flex;
  align-items: center;
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
  padding: 10px;
  height: 50%;
  width: 30%;
  & h4 {
    text-align: center;
    padding-bottom: 20px;
  }
}

@media only screen
and (min-device-width : 375px)
and (max-device-width : 667px)
and (orientation : portrait) {
  .charts {
    flex-direction: column;
    &--bar {
      height: 180px;
      width: 215px;
    }
  }

  .element {
    width: 68%;
    margin: 10px 0;
  }
}
</style>
