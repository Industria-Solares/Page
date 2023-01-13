<template>
    <v-btn @click="onClick" variant="outlined">Increase</v-btn>
    <p>Count: {{ count }}</p>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref<number>(0)
const onClick = ():void => {
    count.value++
}
</script>