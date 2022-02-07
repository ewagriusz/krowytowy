<script setup lang="ts">
let alphabet = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm', 'ąśężźńół']

const emit = defineEmits<{
    (e: 'clicked', key: string): void
}>()
</script>

<template>
    <div class="line" v-for="line of alphabet">
        <div class="char" v-for="char in line">
            <button @click="emit('clicked', char)">{{ char }}</button>
        </div>
    </div>
</template>

<style scoped>
.line {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 1rem;
}
.char {
    position: "absolute";
    top: "50%";
    left: "50%";
    transform: "translate(-50%, -50%)";
}
.line button {
    font-family: "Readex Pro";
    font-weight: 100;
    text-align: center;
    width: 2rem;
    height: 2rem;
    margin: 0.1rem;
    padding: 1.2em;
    border-radius: 0.5rem;
    color: white;
    background-color: rgb(115, 119, 118);
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
    transition: 0.4s;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>