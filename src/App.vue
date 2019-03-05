<template>
  <div id="app">
    <!-- <div v-if="!isMobile()"> -->
      <div id="nav">
        <NavBar :clubs="clubs" :players="playersForClub"/>
      </div>
      <router-view :key="$route.fullPath" class="view"/>
    <!-- </div> -->
    <!-- <div v-else> -->
      <!-- <p>This app is not optimised for mobiles, please view via desktop or tablet</p>
    </div> -->
  </div>
</template>

<script>
import NavBar from "@/components/Nav.vue";
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["clubs", "playersForClub"])
  },
  components: {
    NavBar
  },
  methods: {
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    }
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
  overflow-y: scroll;
}

.view {
  width: 90vw;
  height: 100vh;
}
</style>
