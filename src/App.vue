<script setup lang="ts">
import Game from './components/Game.vue'


</script>

<template >
  <h1 class="header">
    <span class="green">krow</span>
    <u>y</u>towy
  </h1>
  <Game />
</template>

<style>
@import "./assets/base.css";
@import url("https://fonts.googleapis.com/css2?family=Readex+Pro:wght@200&display=swap");
#app {
  max-width: 1280px;
  margin: 0 auto;
  font-family: "Readex Pro", sans-serif;
  font-weight: normal;
}
.header {
  text-align: center;
}
.header u {
  color: rgba(213, 213, 213, 0.9);
}
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}
</style>
