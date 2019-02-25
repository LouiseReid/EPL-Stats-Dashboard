import Vue from 'vue';
import Vuex from 'vuex';
import EventService from '@/services/EventService.js';

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
    }
  },
  actions: {
    getPlayers({ commit }) {
      // eslint-disable-next-line prettier/prettier
      EventService.getPlayers()
        .then(players => commit('SET_PLAYERS', players.data))
        .then(() => {
          const clubs = this.state.allPlayers.map(player => player.club);
          commit('SET_CLUBS', [...new Set(clubs)]);
        });
    },
    getPlayersForClub({ commit }, club) {
      // eslint-disable-next-line prettier/prettier
      EventService.getPlayersForClub(club).
      then(players => commit('SET_CLUB_PLAYERS', players.data));
    }
  }
});
