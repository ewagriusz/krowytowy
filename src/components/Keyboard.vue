<script setup lang="ts">
let alphabet = ["qwertyuiop", "asdfghjkl", "zxcvbnm", "ąśężźńół"].map((a) =>
  a.toUpperCase().split("")
);

const emit = defineEmits<{
  (e: "clicked", key: string): void;
  (e: "enter"): void;
  (e: "delete"): void;
}>();
</script>

<template>
  <div v-for="(line, lineNumber) in alphabet" :key="lineNumber" class="line">
    <div class="enter">
      <!-- ↩ -->
      <button v-if="lineNumber === 3" @click="emit('enter')">ENTER</button>
    </div>
    <div v-for="char in line" :key="char" class="char">
      <button @click="emit('clicked', char)">{{ char }}</button>
    </div>
    <div class="delete">
      <button v-if="lineNumber === 3" @click="emit('delete')">DELETE</button>
    </div>
  </div>
</template>

<style scoped>
.line {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 0.3rem;
}

.line button {
  box-shadow: 6px 6px 2px rgba(212, 212, 212, 0.063);
  border: 0;
  border-radius: 0.5rem;
  font-family: "Readex Pro", sans-serif;
  text-align: center;
  /* width: 2rem; */
  width: auto;
  height: 2rem;
  margin: 0.1rem;
  padding: 1.2em 1em;
  color: white;
  /* background-color: rgb(115, 119, 118); */
  background-color: #000;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  transition: 0.12s;
  display: flex;
  justify-content: center;
  align-items: center;
}
.delete button {
  background-color: #8321a5;
}
.enter button {
  background-color: #427535;
}
.line button:hover {
  box-shadow: 6px 6px 2px rgba(212, 212, 212, 0.13);
}
.line button:active {
  box-shadow: 2px 2px 2px rgba(212, 212, 212, 0.063);
}
</style>
