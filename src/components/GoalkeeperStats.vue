<template>
  <div class="wrapper--goalkeeper-stats">
    <h2>Defence</h2>
    <div class="bar">
      <Bar
        v-if="barLabels.length"
        :dataLabels="barLabels"
        :dataValues="[stats['clean-sheets'], stats['goals-conceded'], stats['errors-goals-conceded'], stats['own-goals']]"
      />
    </div>
  </div>
</template>

<script>
import Bar from "@/components/charts/Bar.vue";

export default {
  props: ["stats"],
  data() {
    return {
      barLabels: []
    };
  },
  components: {
    Bar
  },
  mounted() {
    const goalkeeperLabels = Object.keys(this.stats);

    const barToRemove = [
      "clean-sheets",
      "goals-conceded",
      "errors-goals-conceded",
      "own-goals"
    ];
    const barLabels = goalkeeperLabels.filter(
      label => barToRemove.indexOf(label) > -1
    );
    this.barLabels = barLabels.map(label => {
      if (label === "errors-goals-conceded") {
        return label
          .replace(/-/g, " ")
          .replace("perc", "%")
          .match(/.{1,12}/g);
      }
      return label.replace(/-/g, " ").replace("perc", "%");
    });
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

.bar {
  align-self: center;
  position: relative;
  height: 300px;
  width: 380px;
}
</style>