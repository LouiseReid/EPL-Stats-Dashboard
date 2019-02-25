<template>
  <div>
    <router-link :to="{name: 'Home'}" @click.native="resetPlayersForClub">Home</router-link>
    <template v-if="players.length === 0">
      <router-link
        v-for="club in clubs"
        :key="club"
        :to="{name: 'Club', params: {club: club}}"
      >{{ club }}</router-link>
    </template>
    <template v-else>
      <router-link
        v-for="player in players"
        :key="player.id"
        :to="{name: 'Player', params: {id: player.id}}"
      >{{ player.name }}</router-link>
    </template>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: {
    clubs: {
      type: Array
    },
    players: {
      type: Array
    }
  },
  methods: {
    ...mapActions(["resetPlayersForClub"])
  }
};
</script>

<style scoped>
</style>