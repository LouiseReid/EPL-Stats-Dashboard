<template>
  <div class="wrapper">
    <h2>Team Play</h2>
    <div class="charts">
      <Radar v-if="dataLabels.length" :dataValues="dataValues" :dataLabels="dataLabels"/>
    </div>
  </div>
</template>

<script>
import Radar from "@/components/charts/Radar.vue";

export default {
  props: ["stats"],
  components: {
    Radar
  },
  data() {
      return {
          dataValues: [],
          dataLabels: []
      }
  },
  mounted(){
      this.dataValues = Object.values(this.stats)
      const labels = Object.keys(this.stats)
      this.dataLabels = labels.map(label => label.replace(/-/g, " "))
  }
};
</script>

<style scoped>
</style>