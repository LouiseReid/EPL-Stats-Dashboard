<template>
  <div>
      <h3>{{ player.name }}</h3>
  </div>
</template>

<script>
import EventService from '@/services/EventService.js';

export default {
  props: ['id'],
  data() {
    return {
      player: {}
    };
  },
  mounted() {
      EventService.getPlayer(this.id)
      .then(res => this.player = res.data[0])
  }
};
</script>

<style scoped>
</style>