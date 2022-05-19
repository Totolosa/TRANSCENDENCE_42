<template>
  <div>
    <Navbar />
    <Pages i:class="index"></Pages>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue"
import "@/colors.ts"
import Pages from './pages/index.vue';
import Navbar from './components/Navbar.vue';

</script>

<style>
* {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-family: inherit;
}
html {
  margin: -2px 0 0 0;
}
a { text-decoration: none; }
button { background-color: transparent; }
.center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.stack {
  position: relative;
}
</style>
