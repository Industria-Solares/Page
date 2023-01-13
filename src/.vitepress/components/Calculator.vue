<template>
        <v-label>Verfügbare Fläche</v-label>
        <v-row>
            <v-col cols="6">
                <v-text-field v-model="formData.availableLenght" type="number" label="Länge" variant="outlined"></v-text-field>
            </v-col>
            <v-col cols="6">
                <v-text-field type="number" label="Breite" variant="outlined"></v-text-field>
            </v-col>
        </v-row>
        <v-label>Modul Fläche</v-label>
        <v-row>
            <v-col cols="6">
                <v-text-field type="number" label="Länge" variant="outlined"></v-text-field>
            </v-col>
            <v-col cols="6">
                <v-text-field type="number" label="Breite" variant="outlined"></v-text-field>
            </v-col>
        </v-row>
        <v-label>Modul Leistung (kWh/Jahr)</v-label>
        <v-row>
            <v-col cols="6">
                <v-text-field type="number" label="Leistung (kWh/Jahr)" variant="outlined"></v-text-field>
            </v-col>
            <v-col cols="6">
                <v-text-field type="number" label="Mögliche Gesammtleistung" variant="outlined" readonly="true"></v-text-field>
            </v-col>
        </v-row>
        <v-btn @click="calculate" variant="outlined">Berechnen</v-btn>
</template>

<script setup lang="js">
export default {
    name: 'Calculator',
    props: {
      formData: {
        type: Object,
        default: () => ({})
      }
    },
    methods: {
      calculate() {
        console.log(this.formData)
      }
    },
}
</script>