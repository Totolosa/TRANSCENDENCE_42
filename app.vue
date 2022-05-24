<template>
  <div>
    <Navbar />
    <Pages i:class="index"></Pages>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue"
import Pages from './pages/index.vue';

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
h1, h2, h3, h4 {
  font-family: 'Orbitron', sans-serif;
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
.material-icons.md-18 {
  font-size: 18px;
}
.material-icons.md-24 {
  font-size: 24px;
}
.material-icons.md-36 {
  font-size: 36px;
}
.material-icons.md-48 {
  font-size: 48px;
}
.material-icons-outlined.md-18 {
  font-size: 18px;
}
.material-icons-outlined.md-24 {
  font-size: 24px;
}
.material-icons-outlined.md-36 {
  font-size: 36px;
}
.material-icons-outlined.md-48 {
  font-size: 48px;
}
</style>
