<template>
  <div id="app">
    <div id="nav">
      <NavBar :clubs="clubs"/>
    </div>
    <router-view/>
  </div>
</template>

<script>
import EventService from '@/services/EventService';
import NavBar from '@/components/Nav.vue';

export default {
    data() {
        return {
            players: [],
            clubs: []
        }
    },
    mounted(){
        EventService.getPlayers()
        .then(players => this.players = players.data)
        .then(() => {
          const clubs = this.players.map(player => player.club)
          this.clubs = [... new Set(clubs)]
        })
    },
    components: {
      NavBar
    }
};
</script>

<style lang="scss">

</style>
