<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!-- <HelloWorld msg="COUCOU TWA"/> -->
  <GameField/>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import HelloWorld from './components/HelloWorld.vue';
import GameField from './components/GameField.vue';

export default defineComponent({
  name: 'App',
  components: {
    // HelloWorld,
    GameField
  }
});
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
