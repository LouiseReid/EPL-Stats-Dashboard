<template>
  <div class="wrapper--goalkeeper-stats">
    <h2>Defence</h2>
    <div class="charts">
      <div class="charts--bar">
        <Bar
          v-if="barLabels.length"
          :dataLabels="barLabels"
          :dataValues="[stats['penalties-saved'],stats['clean-sheets'], stats['goals-conceded'], stats['errors-goals-conceded'], stats['own-goals']]"
        />
      </div>
      <div class="charts--polar">
        <h4>
          Save Styles
        </h4>
        <Polar
          v-if="polarLabels.length"
          :dataLabels="polarLabels"
          :dataValues="[stats.punches, stats['high-claims'], stats.catches, stats['sweeper-clearances']]"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Bar from "@/components/charts/Bar.vue";
import Polar from "@/components/charts/Polar.vue";

export default {
  props: ["stats"],
  data() {
    return {
      barLabels: [],
      polarLabels: []
    };
  },
  components: {
    Bar,
    Polar
  },
  mounted() {
    const goalkeeperLabels = Object.keys(this.stats);

    const barToRemove = [
      "clean-sheets",
      "goals-conceded",
      "errors-goals-conceded",
      "own-goals",
      "penalties-saved"
    ];
    const barLabels = goalkeeperLabels.filter(
      label => barToRemove.indexOf(label) > -1
    );
    this.barLabels = barLabels.map(label => {
      if (label === "errors-goals-conceded") {
        return label.replace(/-/g, " ").match(/.{1,12}/g);
      }
      return label.replace(/-/g, " ");
    });

    const polarToRemove = [
      "punches",
      "high-claims",
      "catches",
      "sweeper-clearances"
    ];

    const polarLabels = goalkeeperLabels.filter(
      label => polarToRemove.indexOf(label) > -1
    );
    this.polarLabels = polarLabels.map(label => label.replace((/-/g, " ")));
  }
};
</script>

<style lang="scss" scoped>
.wrapper--goalkeeper-stats {
  @include wrapper;
  display: flex;
  flex-direction: column;
  width: 100%;
}

h2 {
  @include statHeader;
  margin-bottom: 14px;
}

h4 {
    font-weight: lighter;
    float: left;
}

.charts {
  display: flex;
  flex-direction: column;
  &--polar {
    align-self: center;
    position: relative;
    height: 280px;
    width: 230px;
    margin-top: 155px;
  }
  &--bar {
      @include bar
  }
}
</style>