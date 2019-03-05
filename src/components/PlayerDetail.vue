<template >
  <div class="wrapper">
    <img src="../assets/profile.png" alt="profile">
    <div v-for="(value, key) in details" :key="key">
      <p class="key">{{ key }}:</p>
      <p class="value">{{ value }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["details"]
};
</script>

<style lang="scss" scoped>
.wrapper {
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
</style>
