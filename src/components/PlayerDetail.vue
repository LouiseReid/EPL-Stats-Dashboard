<template >
  <section>
    <div v-for="(value, key) in details" :key="key">
      <p>{{ key }}</p>
      <span>{{ value }}</span>
    </div>
  </section>
</template>

<script>
export default {
  props: ["details"]
};
</script>

<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

div {
    border: 1px solid black;
}


</style>
