<template>
  <div class="wrapper--attack-stats">
    <h2>Attack</h2>
    <div class="charts">
      <div class="charts--polar">
        <Polar/>
      </div>
      <div class="charts--radar">
        <Radar
          v-if="labels.length"
          :dataValues="[ 
        this.stats['freekicks-scored'],
        this.stats['penalties-scored'], 
        this.stats.shots, 
        this.stats['shots-OT'], 
        this.stats['shooting-acc-perc']
        ]"
          :dataLabels="labels"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Radar from "@/components/charts/Radar.vue";
import Polar from "@/components/charts/Polar.vue";

export default {
  props: ["stats"],
  data() {
    return {
      labels: []
    };
  },
  components: {
    Radar,
    Polar
  },
  mounted() {
    const attackingLabels = Object.keys(this.stats);
    const toRemove = [
      "freekicks-scored",
      "penalties-scored",
      "shots",
      "shots-OT",
      "shooting-acc-perc"
    ];
    const radarLabels = attackingLabels.filter(
      label => toRemove.indexOf(label) > -1
    );
    this.labels = radarLabels.map(label =>
      label.replace(/-/g, " ").replace("perc", "%")
    );
  }
};
</script>

<style lang="scss" scoped>
.wrapper--attack-stats {
  @include wrapper;
  display: flex;
  flex-direction: column;
  width: 100%;
}

h2 {
  @include statHeader;
}

.charts {
  display: flex;
  flex-direction: column;
  &--polar {
    align-self: center;
    position: relative;
    height: 300px;
    width: 280px;
  }
  &--radar {
    @include radar;
      margin-top: -60px;

  }
}
</style>