<template>
  <div class="wrapper--discipline">
    <h2>Discipline</h2>
    <div class="container">
      <div class="container--element">
        <v-icon>mdi-whistle</v-icon>
        <strong>Fouls</strong>
        <p>{{ stats.fouls }}</p>
      </div>
      <div class="container--element">
        <v-icon class="yellow">mdi-cards</v-icon>
        <strong>Yellow Cards</strong>
        <p>{{ stats['yellow-cards']}}</p>
      </div>
      <div class="container--element">
        <v-icon class="red">mdi-cards</v-icon>
        <strong>Red Cards</strong>
        <p>{{ stats['red-cards']}}</p>
      </div>
      <div v-if="stats.offsides !== undefined" class="container--element">
        <v-icon>mdi-flag</v-icon>
        <strong>Offsides</strong>
        <p>{{ stats.offsides }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["stats"]
};
</script>

<style lang="scss" scoped>
.wrapper--discipline {
  @include wrapper;
  display: flex;
  flex-direction: column;
  padding-bottom: 20px;
}

h2 {
  @include statHeader;
}

.container {
  align-self: center;
  display: grid;
  grid-template-rows: auto auto auto;
  grid-row-gap: 10px;

  &--element {
    display: flex;
    justify-content: space-between;
  }
}

p,
strong {
  margin-left: 20px;
}

.yellow {
  color: yellow;
}

.red {
  color: red;
}

@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (orientation: portrait) {
  .wrapper--discipline {
    margin: 10px 7px;
    width: 50%;
    justify-content: center;
    padding-bottom: 5px;
  }

  h2 {
    margin: 0;
    font-size: 16px;
  }

  p,
  strong {
    margin-left: 10px;
    font-size: 10px;
  }
}
</style>