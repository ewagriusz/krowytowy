<script setup lang="ts">
import WordInput from "./WordInput.vue";

const props = defineProps<{
  answers: string[][];
  step: number;
  word: string;
}>();
</script>

<template>
  <div
    v-for="(answersWord, rowNumber) in props.answers"
    :key="rowNumber"
    class="row"
  >
    <WordInput
      :answer="props.word"
      :step="step"
      :row-number="rowNumber"
      :word="answersWord"
    />
  </div>
</template>
