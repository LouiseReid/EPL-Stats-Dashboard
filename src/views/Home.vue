<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventService from '@/services/EventService.js';
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  data(){
    return {
      players: []
    }
  },
  components: {
    HelloWorld
  },
  created() {
    EventService.getPlayers()
    .then(players => this.players = players.data)

  }
};
</script>
