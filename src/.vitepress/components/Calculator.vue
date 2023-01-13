<template>
        <v-label>Verfügbare Fläche</v-label>
        <v-row>
            <v-col cols="6">
                <v-text-field v-model="availableLenght" v-on:input="calculate" type="number" label="Länge" variant="outlined"></v-text-field>
            </v-col>
            <v-col cols="6">
                <v-text-field v-model="availableWidth" v-on:input="calculate" type="number" label="Breite" variant="outlined"></v-text-field>
            </v-col>
        </v-row>
        <v-label>Modul Fläche</v-label>
        <v-row>
            <v-col cols="6">
                <v-text-field v-model="moduleLenght" v-on:input="calculate" type="number" label="Länge" variant="outlined"></v-text-field>
            </v-col>
            <v-col cols="6">
                <v-text-field v-model="moduleWidth" v-on:input="calculate" type="number" label="Breite" variant="outlined"></v-text-field>
            </v-col>
        </v-row>
        <v-label>Modul Leistung (kWh/Jahr)</v-label>
        <v-row>
            <v-col cols="4">
                <v-text-field v-model="maxModulePower" v-on:input="calculate" type="number" label="Leistung (kWh/Jahr)" variant="outlined"></v-text-field>
            </v-col>
            <v-col cols="4">
                <v-text-field v-model="maxModuleCount" v-on:input="calculate" type="number" label="Mögliche Modulanzahl" variant="outlined" :readonly="true"></v-text-field>
            </v-col>
            <v-col cols="4">
                <v-text-field v-model="maxTotalPower" v-on:input="calculate" type="number" label="Mögliche Gesammtleistung" variant="outlined" :readonly="true"></v-text-field>
            </v-col>
        </v-row>
</template>

<script setup lang="js">
export default {
    name: 'Calculator',
    data() {
      return {
        availableLenght: 0,
        availableWidth: 0,
        moduleLenght: 0,
        moduleWidth: 0,
        maxModulePower: 0,
        maxModuleCount: 0,
        maxTotalPower: 0,
      }
    },

    methods: {
      calculate() {
        let maxModuleCountHorizontal = (this.availableLenght / this.moduleLenght) * (this.availableWidth / this.moduleWidth)
        let maxModuleCountVertical = (this.availableLenght / this.moduleWidth) * (this.availableWidth / this.moduleLenght)
        this.maxModuleCount = Math.floor(Math.max(maxModuleCountHorizontal, maxModuleCountVertical))
        this.maxTotalPower = this.maxModuleCount * this.maxModulePower
      },
      validate() {
        this.availableLenght = this.availableLenght < 0 ? 0 : this.availableLenght
        this.availableWidth = this.availableWidth < 0 ? 0 : this.availableWidth
        this.moduleLenght = this.moduleLenght < 0 ? 0 : this.moduleLenght
        this.moduleWidth = this.moduleWidth < 0 ? 0 : this.moduleWidth
        this.maxModulePower = this.maxModulePower < 0 ? 0 : this.maxModulePower
      }
    },
   
    watch: {
      availableLenght: 'validate',
      availableWidth: 'validate',
      moduleLenght: 'validate',
      moduleWidth: 'validate',
      maxModulePower: 'validate'
    },
}
</script>