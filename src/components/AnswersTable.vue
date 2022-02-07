<script setup lang='ts'>
import WordInput from './WordInput.vue';

const props = defineProps<{
    answers: string[][]
    step: number
}>()
</script>

<template>
    <div class="row" v-for="(word, rowNumber) in props.answers ">
        <WordInput :word="word" :active="rowNumber === props.step" />
    </div>
</template>

<style scoped>
</style>