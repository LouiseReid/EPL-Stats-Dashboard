<template>
    <div>
        <router-link :to="{name: 'Home'}" @click.native="resetPlayersForClub">Home</router-link>
        <router-link 
            v-for="club in clubs" 
            :key="club"
            :to="{name: 'Club', params: {club: club}}"
        >{{ club }}</router-link>
    </div>
</template>

<script>
import { mapActions } from "vuex";

    export default {
        props: {
            clubs: {
                type: Array
            },
        },
        methods: {
            ...mapActions(["resetPlayersForClub"])
        },
    }
</script>

<style scoped>

</style>