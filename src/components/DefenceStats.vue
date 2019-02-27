<template>
  <div id="wrapper">
    <h4>Defence</h4>
    <div class="charts">
      <div class="chart" v-if="this.stats['aerial-battles-won']">
          <h3>Arial Battles</h3>
        <donut :won="this.stats['aerial-battles-won']" :lost="this.stats['aerial-battles-lost']"/>
      </div>
    </div>
  </div>
</template>

<script>
import Donut from "@/components/Donut.vue";
export default {
  props: ["stats"],
  components: {
    Donut
  },
};
</script>

<style scoped>
#wrapper {
  background-color: #ffffff;
  border-radius: 5px;
  box-shadow: 2px 3px 7px #675e5e;
  height: 75vh;
  margin: 20px 7px;
}

.charts {
  display: flex;
  justify-content: flex-start;
}

.chart {
    width: 15%
}

h3 {
    text-align: center
}
</style>