<template>
  <div>
    <router-link v-if="$route.name !== 'Home'" :to="{name: 'Home'}" @click.native="resetPlayersForClub">Home</router-link>
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
      >{{ player.details.name }}</router-link>
    </template>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  props: ["clubs", "players"],
  methods: {
    ...mapActions(["resetPlayersForClub"])
  }
};
</script>

<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: column;
}

a {
  color: #cecece;
  border: 2px solid $primary-dark;
  text-decoration: none;
  padding: 0 5px;
  font-size: 18px;
  margin-top: 10px;
}

@media only screen 
and (min-device-width : 375px) 
and (max-device-width : 667px) 
and (orientation : portrait) { 
  a {
    font-size: 14px;
  }
 }
</style>