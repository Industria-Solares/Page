<template>
    <v-label>Verfügbare Fläche</v-label>
    <v-row>
        <v-col cols="6">
            <v-text-field label="Breite" variant="outlined"></v-text-field>
        </v-col>
        <v-col cols="6">
            <v-text-field label="Höhe" variant="outlined"></v-text-field>
        </v-col>
    </v-row>
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