import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Club from '@/views/Club.vue';
import Player from '@/views/Player.vue';
import { store } from './store/store';

Vue.use(Router);

const router = new Router({
  base: process.env.BASE_URL,
  routes: [{
      path: '',
      name: 'Home',
      component: Home
    },
    {
      path: '/club/:club',
      name: 'Club',
      component: Club,
      props: true
    },
    {
      path: '/player/:id',
      name: 'Player',
      component: Player,
      props: true
    }
  ]
});

window.popStateDetected = false;
window.addEventListener('popstate', () => {
  window.popStateDetected = true;
});

router.beforeEach((to, from, next) => {
  const IsItABackButton = window.popStateDetected;
  window.popStateDetected = false;
  if (IsItABackButton) {
    next();
    store.dispatch('resetPlayersForClub');
    return '';
  }
  next();
});

export default router;
