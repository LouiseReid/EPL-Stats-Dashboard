<template>
    <div>
        <router-link :to="{name: 'Home'}">Home</router-link>
        <router-link 
            v-for="club in clubs" 
            :key="club"
            :to="{name: 'Club', params: {name: club}}"
        >{{ club }}</router-link>
    </div>
</template>

<script>
    export default {
        props: {
            clubs: {
                type: Array
            },
        },
    }
</script>

<style scoped>

</style>