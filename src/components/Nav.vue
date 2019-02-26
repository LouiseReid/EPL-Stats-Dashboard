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
  color: #ffffff;
  text-decoration: none;
  margin: 0 5px;
  &:not(:first-child) {
    padding-top: 10px;
  }
}
</style>