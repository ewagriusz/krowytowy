<script setup lang='ts'>
import { ref, computed, onMounted } from 'vue'
import Keyboard from './Keyboard.vue';
import AnswersTable from './AnswersTable.vue';
import WordsStore from '@/stores/words';

const answers = ref([[], [], [], [], [], []] as string[][])
const step = ref(0)
const currentAnswer = computed(() => answers.value[step.value])

function addChar(char: string) {
    if (currentAnswer.value.length < 5) {
        currentAnswer.value.push(char)
    }
}
onMounted(() => {
    document.addEventListener("focus", () => { (document.activeElement as HTMLElement).blur() }, true);

    document.addEventListener('keydown', event => {
        const key = event.key.toLowerCase();
        console.log(key);
        if (key === 'backspace')
            deleteChar()
        else if (key === 'enter')
            submitWord()
        else if (key.length === 1 && /[a-ząśężźńół]/.test(key))
            addChar(key.toUpperCase())

    })
})

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
    <Keyboard @delete="deleteChar" @enter="submitWord" @clicked="addChar" />
</template>