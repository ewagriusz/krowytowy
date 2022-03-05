<script setup lang="ts">
import { computed } from "vue";
let alphabet = ["qwertyuiop", "asdfghjkl", "zxcvbnm", "ąćśężźńół"].map((a) =>
  a.toUpperCase().split("")
);
const props = defineProps<{
  step: number;
  answers: string[][];
  correctAnswer: string;
}>();
const usedLetters = computed(() => {
  return new Set(
    props.answers
      .slice(0, props.step)
      .map((a) => a.join(""))
      .join("")
  );
});
const emit = defineEmits<{
  (e: "clicked", key: string): void;
  (e: "enter"): void;
  (e: "delete"): void;
}>();
</script>

<template>
  <div v-for="(line, lineNumber) in alphabet" :key="lineNumber" class="line">
    <div class="delete">
      <button v-if="lineNumber === 3" @click="emit('delete')">DELETE</button>
    </div>

    <div v-for="char in line" :key="char" class="char">
      <button
        :class="{
          orange: usedLetters.has(char) && correctAnswer.includes(char),
          green: answers.some((l) =>
            l.some((c, ind) => c === char && correctAnswer[ind] === char)
          ),
          wrong: usedLetters.has(char) && !correctAnswer.includes(char),
        }"
        @click="emit('clicked', char)"
      >
        {{ char }}
      </button>
    </div>

    <div class="enter">
      <!-- ↩ -->
      <button v-if="lineNumber === 3" @click="emit('enter')">ENTER</button>
    </div>
  </div>
</template>

<style scoped>
.orange {
  background-color: var(--chars-c-yellow);
}
.green {
  background-color: var(--chars-c-green);
}
.wrong {
  background-color: var(--chars-c-standard-light);
}
.line {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 0.3rem;
}

button {
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
