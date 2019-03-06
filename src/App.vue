<template>
  <div id="app">
    <div id="nav" :class="{'mobile-nav': mobileNav}">
      <NavBar :clubs="clubs" :players="playersForClub" :key="$route.fullPath"/>
    </div>
    <router-view :key="$route.fullPath" class="view">
      <v-icon slot="nav" id="nav-toggle" @click="mobileNav = !mobileNav">mdi-menu</v-icon>
    </router-view>
  </div>
</template>

<script>
import NavBar from "@/components/Nav.vue";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      mobileNav: false
    };
  },
  computed: {
    ...mapGetters(["clubs", "playersForClub"])
  },
  components: {
    NavBar
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  display: flex;
  font-family: "Padauk", sans-serif;
}
#nav {
  height: 100vh;
  width: 10vw;
  background: $primary;
  margin: 0;
  overflow: scroll;
}

#nav-toggle {
  display: none;
}

.view {
  width: 90vw;
  height: 100vh;
}

@media only screen and (min-device-width: 375px) and (max-device-width: 667px) and (orientation: portrait) {
  #nav {
    position: fixed;
    left: -100%;
    top: 0;
    transition: 0.5s;
  }

  #nav-toggle {
    display: block;
    padding-top: 5px;
    padding-left: 5px;
  }

  #nav.mobile-nav {
    position: unset;
    height: auto;
    width: 25vw;
    transition: 0.5s;
  }

  .view {
    width: 100vw;
  }
}
</style>
