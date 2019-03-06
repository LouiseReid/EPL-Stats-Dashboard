<template>
  <div class="wrapper--defence-stats">
    <h2>Defence</h2>
    <div class="charts">
      <div class="charts--donut" v-if="this.stats['aerial-battles-won']">
        <h4>Arial Battles</h4>
        <Donut :won="this.stats['aerial-battles-won']" :lost="this.stats['aerial-battles-lost']"/>
      </div>
      <div class="charts--donut" v-if="this.stats['duels-won']">
        <h4>Duels</h4>
        <Donut :won="this.stats['duels-won']" :lost="this.stats['duels-lost']"/>
      </div>
      <div class="charts--radar">
        <Radar
          v-if="defensiveLabels.length"
          :dataValues="[
            stats.tackles, 
            stats['tackle-success-perc'], 
            stats.interceptions, 
            stats.clearances, 
            stats.recoveries, 
            stats['successful-5050s']
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
.wrapper--defence-stats {
  @include wrapper;
  display: flex;
  flex-direction: column;
  width: 100%;
}

.charts {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  height: 80%;
  &--donut {
    width: 50%;
  }
  &--radar {
    @include radar;
  }
}
h2 {
  @include statHeader;
}

h4 {
  text-align: center;
}

@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (orientation: portrait) {
  .wrapper--defence-stats {
    margin: 10px 7px;
    padding-bottom: 18px;
  }
  
  h2 {
    margin: 10px 0;
    font-size: 20px;
  }

  h4 {
    font-size: 13px;
  }

  .charts {
    &--donut {
      width: 40%;
    }
    &--radar {
      height: 270px;
      width: 325px;
      margin-top: -50px;
    }
  }
}
</style>