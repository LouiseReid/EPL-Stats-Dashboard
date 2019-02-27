<template>
  <div id="wrapper">
    <h4>Defence</h4>
    <div class="charts">
      <div class="charts--donut" v-if="this.stats['aerial-battles-won']">
        <h3>Arial Battles</h3>
        <donut :won="this.stats['aerial-battles-won']" :lost="this.stats['aerial-battles-lost']"/>
      </div>
      <div class="charts--donut" v-if="this.stats['duels-won']">
        <h3>Duels</h3>
        <donut :won="this.stats['duels-won']" :lost="this.stats['duels-lost']"/>
      </div>
      <div class="charts--radar">
        <radar
          :data="[this.stats.tackles, this.stats['tackle-success-perc'], this.stats.interceptions, this.stats.clearances, this.stats.recoveries, this.stats['successful-5050s']]"
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
  components: {
    Donut,
    Radar
  }
};
</script>

<style lang="scss" scoped>
#wrapper {
  background-color: $primary-light;
  border: 1px solid $primary-dark;
  border-radius: 5px;
  box-shadow: 2px 3px 7px #675e5e;
  height: 75vh;
  margin: 20px 7px;
  width: 27%;
  height: 80%;
}

.charts {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  &--donut {
    width: 50%;
  }
  &--radar {
    align-self: center;
    position: relative;
    height: 300px;
    width: 340px;
    margin-top: -40px;
  }
}

h3,
h4 {
  text-align: center;
}

h4 {
  margin-bottom: 40px;
}
</style>