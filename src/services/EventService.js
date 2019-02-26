import axios from 'axios';

const apiClient = axios.create({
  baseURL: `http://localhost:3000`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default {
  getPlayers() {
    return apiClient.get('/players');
  },
  getPlayer(id) {
    return apiClient.get('/players?id=' + id);
  },
  getPlayersForClub(team) {
    return apiClient.get('/players?details.club=' + team);
  },
  getPlayersForPosition(position) {
    return apiClient.get('/players?details.position=' + position);
  }
};
