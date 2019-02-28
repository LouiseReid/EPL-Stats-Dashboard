<template>
  <div class="wrapper">
    <h2>{{ header }}</h2>
    <div class="charts">
      <div class="radar">
        <Radar v-if="dataLabels.length" :dataValues="dataValues" :dataLabels="dataLabels"/>
      </div>
    </div>
  </div>
</template>

<script>
import Radar from "@/components/charts/Radar.vue";

export default {
  props: ["header", "stats"],
  components: {
    Radar
  },
  data() {
    return {
      dataValues: [],
      dataLabels: []
    };
  },
  mounted() {
    this.dataValues = Object.values(this.stats);
    const labels = Object.keys(this.stats);
    this.dataLabels = labels.map(label => label.replace(/-/g, " ").replace('perc', '%'));
  }
};
</script>

<style lang="scss" scoped>
.wrapper {
  @include wrapper;
  width: 45%;
}

h2 {
  @include statHeader;
}


.radar {
 @include radar;
  width: 350px;
  margin-top: -80px;
}
</style>