import Vue from 'vue';
import Vuex from 'vuex';
import EventService from '@/services/EventService.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    allPlayers: [],
    clubs: []
  },
  getters: {
    allPlayers: state => state.allPlayers,
    clubs: state => state.clubs
  },
  mutations: {
    SET_PLAYERS(state, data) {
      state.players = data;
    },
    SET_CLUBS(state, data) {
      state.clubs = data;
    }
  },
  actions: {
    getPlayers({ commit }) {
      // eslint-disable-next-line prettier/prettier
      EventService.getPlayers()
        .then(players => commit('SET_PLAYERS', players.data))
        .then(() => {
          const clubs = this.state.players.map(player => player.club);
          commit('SET_CLUBS', [...new Set(clubs)]);
        });
    }
  }
});
