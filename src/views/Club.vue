<template>
  <div></div>
</template>

<script>
import EventService from "@/services/EventService";

export default {
    props: {
        club: {
            type: String
        },
    },
    data() {
        return {
            players: []
        }
    },
    mounted(){
        EventService.getPlayersForClub(this.club)
        .then(players => this.players = players.data)
    }
};
</script>

<style scoped>
</style>