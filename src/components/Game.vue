<script setup lang='ts'>
import { ref, computed } from 'vue'

import Keyboard from './Keyboard.vue';
import AnswersTable from './AnswersTable.vue';

const answers = ref([['r', 'z'], [], [], [], [], []])
const step = ref(0)
const currentAnswer = computed(() => answers.value[step.value])
function addChar(char: string) {
    if (currentAnswer.value.length < 5) {
        currentAnswer.value.push(char)
    }
}
function submitWord() {
    console.log('submit')
}
function deleteChar() {
    if (currentAnswer.value.length > 0) {
        currentAnswer.value.pop()
    }
}
</script>
<template>
    <AnswersTable :answers="answers" :step="step" />
    <br />
    <Keyboard @delete="deleteChar" @enter="submitWord" @clicked="addChar"></Keyboard>
</template>