<script setup lang="ts">
import WordInput from './components/WordInput.vue'
import Keyboard from './components/Keyboard.vue';

function clickChar(char: string) {
  console.log(char)
}
function submitWord() {
  console.log('submit')
}
function deleteChar() {
  console.log('delete')
}
</script>

<template>
  <h1 class="header">
    <span class="green">krow</span>
    <u>y</u>towy
  </h1>
  <WordInput />
  <Keyboard @delete="deleteChar" @enter="submitWord" @clicked="clickChar"></Keyboard>
</template>

<style>
@import "./assets/base.css";
@import url("https://fonts.googleapis.com/css2?family=Readex+Pro:wght@200&display=swap");
#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
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
