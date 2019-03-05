import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';
import Club from '@/views/Club.vue';
import Player from '@/views/Player.vue';

Vue.use(Router);

const router = new Router({
  base: process.env.BASE_URL,
  routes: [
    {
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

export default router;
