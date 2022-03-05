<script setup lang="ts">
import { ref, computed, onMounted } from "vue";
import Keyboard from "./Keyboard.vue";
import AnswersTable from "./AnswersTable.vue";
import WordsStore from "@/stores/words";
import { useToast } from "vue-toastification";

const WORD_TO_GUESS = WordsStore.randomWord();

const toast = useToast();

// let d = ['sheep', 'stool', 'racon'].map(a => a.toUpperCase().split(''))
// const answers = ref([...d, [], [], []])
// const step = ref(3)
const answers = ref([[], [], [], [], [], []] as string[][]);
const step = ref(0);

const currentAnswer = computed(() => answers.value[step.value]);

onMounted(() => {
  document.addEventListener(
    "focus",
    () => {
      (document.activeElement as HTMLElement).blur();
    },
    true
  );

  document.addEventListener("keydown", (event) => {
    const key = event.key.toLowerCase();
    if (key === "backspace") deleteChar();
    else if (key === "enter") submitWord();
    else if (key.length === 1 && /[a-ząśężźńół]/.test(key))
      addChar(key.toUpperCase());
  });
});

function addChar(char: string) {
  if (currentAnswer.value.length < 5) {
    currentAnswer.value.push(char);
  }
}
function submitWord() {
  console.log("subbmited, correct:", WORD_TO_GUESS);
  let stringWord = currentAnswer.value.join("");
  if (stringWord.length !== 5) return;

  if (stringWord === WORD_TO_GUESS) {
    toast("gratulacje! wygrales");
    return;
  }

  let isAllowed = WordsStore.isWord(stringWord);

  if (!isAllowed) {
    toast.error(`${stringWord} nie jest słowem`);
    return;
  }
  if (step.value > 4) {
    if (step.value === 5) toast.warning("przegrales, ale masz dodatkowe zycie");
    answers.value.shift();
    answers.value.push([]);
    return;
  }

  step.value++;
}

function deleteChar() {
  if (currentAnswer.value.length > 0) {
    currentAnswer.value.pop();
  }
}
</script>
<template>
  <AnswersTable :word="WORD_TO_GUESS" :answers="answers" :step="step" />
  <br />
  <Keyboard
    :step="step"
    :answers="answers"
    :correct-answer="WORD_TO_GUESS"
    @delete="deleteChar"
    @enter="submitWord"
    @clicked="addChar"
  />
</template>
