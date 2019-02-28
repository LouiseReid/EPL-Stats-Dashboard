<template>
  <div class="wrapper">
    <h2>Defence</h2>
    <div class="charts">
      <div class="charts--donut" v-if="this.stats['aerial-battles-won']">
        <h3>Arial Battles</h3>
        <Donut :won="this.stats['aerial-battles-won']" :lost="this.stats['aerial-battles-lost']"/>
      </div>
      <div class="charts--donut" v-if="this.stats['duels-won']">
        <h3>Duels</h3>
        <Donut :won="this.stats['duels-won']" :lost="this.stats['duels-lost']"/>
      </div>
      <div class="charts--radar">
        <Radar
          v-if="defensiveLabels.length"
          :dataValues="[
            this.stats.tackles, 
            this.stats['tackle-success-perc'], 
            this.stats.interceptions, 
            this.stats.clearances, 
            this.stats.recoveries, 
            this.stats['successful-5050s']
          ]"
          :dataLabels="defensiveLabels"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Donut from "@/components/charts/Donut.vue";
import Radar from "@/components/charts/Radar.vue";

export default {
  props: ["stats"],
  data() {
    return {
      defensiveLabels: []
    };
  },
  components: {
    Donut,
    Radar
  },
  mounted() {
    const defensiveLabels = Object.keys(this.stats);
    const toRemove = [
      "tackles",
      "tackle-success-perc",
      "interceptions",
      "clearances",
      "recoveries",
      "successful-5050s"
    ];
    const radarLabels = defensiveLabels.filter(
      label => toRemove.indexOf(label) > -1
    );
    this.defensiveLabels = radarLabels.map(label =>
      label.replace(/-/g, " ").replace("perc", "%")
    );
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  @include wrapper;
  height: 75vh;
  width: 27%;
}

.charts {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  &--donut {
    width: 50%;
  }
  &--radar {
    @include radar;
    width: 340px;
    margin-top: -40px;
  }
}
h2 {
  @include statHeader;
}

h3 {
  text-align: center;
}
</style>