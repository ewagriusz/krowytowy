<script setup lang="ts">
import { computed, toRefs } from "vue";
import { colorWord } from "@/colors";
import { Colors } from "@/colors";
const props = defineProps<{
  answer: string;
  word: string[];
  step: number;
  rowNumber: number;
}>();
const { word, step, rowNumber, answer } = toRefs(props);
const active = computed(() => rowNumber.value === step.value);
const filled = computed(() => rowNumber.value < step.value);
const colors = computed(() => {
  if (!filled.value) return ["", "", "", "", ""];
  return colorWord(word.value, answer.value);
});
</script>

<template>
  <div class="wordInput">
    <div
      v-for="i in 5"
      :key="i"
      :class="{
        active: props.word[i - 1] && active && !filled,
        filled: filled,
        disabled: !active && !filled,
        correct: colors[i - 1] === Colors.correct,
        incorrect: colors[i - 1] === Colors.incorrect,
        wrongPlace: colors[i - 1] === Colors.wrongPlace,
      }"
      class="charCell"
    >
      {{ props.word[i - 1] }}
    </div>
  </div>
</template>

<style scoped>
.filled.filled {
  border: 0;
  background-color: var(--chars-c-standard-light);
}
.disabled.disabled {
  background: repeating-linear-gradient(
    -40deg,
    rgba(34, 34, 34, 0.599),
    rgba(34, 34, 34, 0.599) 6px,
    rgba(51, 51, 51, 0.626) 6px,
    rgba(51, 51, 51, 0.626) 14px
  );
}
.active.active {
  border-color: var(--chars-c-white);
}
.wordInput {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.charCell {
  /* box-shadow: 3px 3px 2px rgba(245, 243, 243, 0.026); */
  border: 2px var(--chars-c-standard-light) solid;
  font-family: "Readex Pro", sans-serif;
  text-align: center;
  font-size: 1.6rem;
  text-transform: uppercase;
  /* width: 2rem; */
  width: 3.4rem;
  height: 3.4rem;
  margin: 2.5px;
  color: white;
  /* background-color: rgb(115, 119, 118); */
  background-color: var(--chars-c-standard);
  cursor: pointer;
  transition: 0.12s;
  display: flex;
  justify-content: center;
  align-items: center;
}
:is(.correct, .incorrect, .wrongPlace) {
  border: 0;
}
.correct.correct {
  background-color: var(--chars-c-green);
}
.wrongPlace.wrongPlace {
  background-color: var(--chars-c-yellow);
}
.incorrect.incorrect {
  background-color: var(--chars-c-standard-light);
}
</style>
