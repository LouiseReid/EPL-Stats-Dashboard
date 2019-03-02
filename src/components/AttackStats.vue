<template>
  <div class="wrapper--attack-stats">
    <h2>Attack</h2>
    <div class="charts">
      <div class="charts--polar">
        <h4>
          Goal Origins &
          <span>Expected Goals</span>
        </h4>
        <Polar
          v-if="polarLabels.length"
          :dataLabels="polarLabels"
          :dataValues="[stats.headed, stats['right-foot'], stats['left-foot'], stats['hit-woodwork'], stats['big-chances-missed']]"
        />
      </div>
      <div class="charts--radar">
        <Radar
          v-if="radarLabels.length"
          :dataValues="[stats['freekicks-scored'], stats['penalties-scored'], stats.shots, stats['shots-OT'], stats['shooting-acc-perc']]"
          :dataLabels="radarLabels"
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
      radarLabels: [],
      polarLabels: []
    };
  },
  components: {
    Radar,
    Polar
  },
  mounted() {
    const attackingLabels = Object.keys(this.stats);

    const radarToRemove = [
      "freekicks-scored",
      "penalties-scored",
      "shots",
      "shots-OT",
      "shooting-acc-perc"
    ];
    const radarLabels = attackingLabels.filter(
      label => radarToRemove.indexOf(label) > -1
    );
    this.radarLabels = radarLabels.map(label =>
      label.replace(/-/g, " ").replace("perc", "%")
    );

    const polarToRemove = [
      "headed",
      "right-foot",
      "left-foot",
      "hit-woodwork",
      "big-chances-missed"
    ];
    const polarLabels = attackingLabels.filter(
      label => polarToRemove.indexOf(label) > -1
    );
    this.polarLabels = polarLabels.map(label => label.replace(/-/g, " "));
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
  margin-bottom: 14px;
}

h4 {
  font-weight: lighter;
  & span {
    display: list-item;
    list-style: none;
  }
}

.charts {
  display: flex;
  flex-direction: column;
  &--polar {
    align-self: center;
    position: relative;
    height: 280px;
    width: 280px;
  }
  &--radar {
    @include radar;
  }
}
</style>