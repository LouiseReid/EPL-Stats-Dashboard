<template >
  <div class="wrapper--player-detail">
    <img src="../assets/profile.png" alt="profile">
    <div v-for="(value, key) in details" :key="key">
      <p class="key">{{ key }}:</p>
      <p class="value" :class="{'long': value.length > 10}">{{ value }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["details"]
};
</script>

<style lang="scss" scoped>
.wrapper--player-detail {
  @include wrapper;
  display: flex;
  flex-direction: column;
  padding: 10px;
  align-items: center;
}

img {
  width: fit-content;
  margin-bottom: 18px;
}
div {
  display: flex;
}

p {
  text-transform: capitalize;
  font-size: 20px;
}

.key {
  font-weight: bold;
}

.value {
  margin-left: 10px;
}

.long {
  font-size: 18px;
}

@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (orientation: portrait) {
  .wrapper--player-detail {
    margin: 10px 7px;
    padding: 5px;
    width: 50%;
  }

  img {
    height: 35%;
    width: 40%;
    margin-bottom: 5px;
  }
  p {
    font-size: 12px;
  }

  .long {
    font-size: 9px;
  }
}
</style>
