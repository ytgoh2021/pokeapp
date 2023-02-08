<template>
  <HeaderBar/>
  <div class="container">
  <hr>
  <router-view></router-view>
  </div>
  
  
</template>

<script>
/* eslint-disable */
import PokemonCard from './components/PokemonCard.vue'
import HeaderBar from './components/HeaderBar.vue'
export default {
  name: 'App',
  components: {
    PokemonCard,
    HeaderBar,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
