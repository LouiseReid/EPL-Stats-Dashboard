<template>
  <div class="wrapper--radar">
    <h2 :class="{'header': header === 'Team Play'}">{{ header }}</h2>
    <div class="radar">
      <Radar v-if="dataLabels.length" :dataValues="dataValues" :dataLabels="dataLabels"/>
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
    this.dataLabels = labels.map(label => {
      if (label === "big-chances-created" || label === "passes-per-match") {
        return label
          .replace(/-/g, " ")
          .replace("perc", "%")
          .match(/.{1,11}/g);
      }
      return label.replace(/-/g, " ").replace("perc", "%");
    });
  }
};
</script>

<style lang="scss" scoped>
.wrapper--radar {
  @include wrapper;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 50%;
  width: 100%;
}

h2 {
  @include statHeader;
}

.header {
  align-self: flex-start;
  margin-left: 20px;
}
.radar {
  @include radar;
  margin-top: -100px;
}
</style>