import Vue from 'vue';
import Vuex from 'vuex';
import PlayerService from '@/services/PlayerService.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    allPlayers: [],
    clubs: [],
    playersForClub: []
  },
  getters: {
    allPlayers: state => state.allPlayers,
    clubs: state => state.clubs,
    playersForClub: state => state.playersForClub
  },
  mutations: {
    SET_PLAYERS(state, data) {
      state.allPlayers = data;
    },
    SET_CLUBS(state, data) {
      state.clubs = data;
    },
    SET_CLUB_PLAYERS(state, data) {
      state.playersForClub = data;
    },
    RESET_CLUB_PLAYERS(state) {
      state.playersForClub = [];
    }
  },
  actions: {
    getPlayers({ commit }) {
      // eslint-disable-next-line prettier/prettier
      PlayerService.getPlayers()
        .then(players => commit('SET_PLAYERS', players.data))
        .then(() => {
          const clubs = this.state.allPlayers.map(
            player => player.details.club
          );
          commit('SET_CLUBS', [...new Set(clubs)]);
        });
    },
    getPlayersForClub({ commit }, club) {
      // eslint-disable-next-line prettier/prettier
      PlayerService.getPlayersForClub(club).
      then(players => commit('SET_CLUB_PLAYERS', players.data));
    },
    resetPlayersForClub({ commit }) {
      commit('RESET_CLUB_PLAYERS');
    }
  }
});
