<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps<{
    word: string[]
    active: boolean
}>()

</script>


<template>
    <div class="wordInput">
        <div
            :class="{
                active: props.word[i - 1] && props.active,
                disabled: !props.active
            }"
            v-for="i in 5"
            class="charCell"
        >{{ props.word[i - 1] }}</div>
    </div>
</template>

<style scoped>
.disabled.disabled {
    background: repeating-linear-gradient(
        -40deg,
        rgba(34, 34, 34, 0.699),
        rgba(34, 34, 34, 0.699) 6px,
        rgba(51, 51, 51, 0.726) 6px,
        rgba(51, 51, 51, 0.726) 14px
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
    font-family: "Readex Pro";
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
</style>