<template >
  <section>
    <div v-for="(value, key) in details" :key="key">
      <p class="key">{{ key }}:</p>
      <p class="value">{{ value }}</p>
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
  margin-top: 20px;
}

div {
  display: flex;
  background-color: #ffffff;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 2px 3px 7px #675e5e;
  width: 10%;
  justify-content: center;
  align-items: center;
  font-size: 15px;
}

p {
    text-align: center;
    text-transform: capitalize
}

.key {
    font-weight: bold
}

.value {
    margin-left: 10px;
}
</style>
