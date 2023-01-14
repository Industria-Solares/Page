<template>
  <v-label>Verfügbare Fläche</v-label>
  <v-row>
    <v-col cols="6">
      <v-text-field v-model="availableLenght" @input="calculate" type="number" label="Länge" variant="outlined">
      </v-text-field>
    </v-col>
    <v-col cols="6">
      <v-text-field v-model="availableWidth" @input="calculate" type="number" label="Breite" variant="outlined">
      </v-text-field>
    </v-col>
  </v-row>
  <v-label>Modul Fläche</v-label>
  <v-row>
    <v-col cols="6">
      <v-text-field v-model="moduleLenght" @input="calculate" type="number" label="Länge" variant="outlined">
      </v-text-field>
    </v-col>
    <v-col cols="6">
      <v-text-field v-model="moduleWidth" @input="calculate" type="number" label="Breite" variant="outlined">
      </v-text-field>
    </v-col>
  </v-row>
  <v-label>Modul Leistung (kWh/Jahr)</v-label>
  <v-row>
    <v-col cols="4">
      <v-text-field v-model="maxModulePower" @input="calculate" type="number" label="Leistung (kWh/Jahr)"
        variant="outlined">
      </v-text-field>
    </v-col>
    <v-col cols="4">
      <v-text-field v-model="maxModuleCount" type="number" label="Mögliche Modulanzahl" variant="outlined"
        :readonly="true">
      </v-text-field>
    </v-col>
    <v-col cols="4">
      <v-text-field v-model="maxTotalPower" type="number" label="Mögliche Gesammtleistung" variant="outlined"
        :readonly="true">
      </v-text-field>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="6">
      <v-select v-model="moduleAlignment" @update:modelValue="calculate" label="Ausrichtung" :items="alignmentOptions"
        item-title="text" item-value="value" persistent-hint return-object signle-line></v-select>
    </v-col>
    <v-col cols="6">
      <v-text-field v-model="maxTotalHarvest" type="number" label="Möglicher Ertrag" variant="outlined"
        :readonly="true"></v-text-field>
    </v-col>
  </v-row>
</template>

<script lang="ts">
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
      moduleAlignment: { text: 'Süd', value: 1.0 },
      maxTotalHarvest: 0,
      alignmentOptions: [
        { text: 'Nord', value: 0.2 },
        { text: 'Nord-Nord-Ost', value: 0.3 },
        { text: 'Nord-Ost', value: 0.4 },
        { text: 'Ost-Nord-Ost', value: 0.5 },
        { text: 'Ost', value: 0.6 },
        { text: 'Ost-Süd-Ost', value: 0.7 },
        { text: 'Süd-Ost', value: 0.8 },
        { text: 'Süd-Süd-Ost', value: 0.9 },
        { text: 'Süd', value: 1.0 },
        { text: 'Süd-Süd-West', value: 0.9 },
        { text: 'Süd-West', value: 0.8 },
        { text: 'West-Süd-West', value: 0.7 },
        { text: 'West', value: 0.6 },
        { text: 'West-Nord-West', value: 0.5 },
        { text: 'Nord-West', value: 0.4 },
        { text: 'Nord-Nord-West', value: 0.3 },
      ],
    }
  },

  methods: {
    calculate() {
      let maxModuleCountHorizontal = Math.floor(this.availableLenght / this.moduleLenght) * Math.floor(this.availableWidth / this.moduleWidth)
      let maxModuleCountVertical = Math.floor(this.availableLenght / this.moduleWidth) * Math.floor(this.availableWidth / this.moduleLenght)
      this.maxModuleCount = Math.max(maxModuleCountHorizontal, maxModuleCountVertical)
      this.maxTotalPower = this.maxModuleCount * this.maxModulePower
      this.maxTotalHarvest = this.maxTotalPower * this.moduleAlignment.value
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
    maxModulePower: 'validate',
  },
}
</script>