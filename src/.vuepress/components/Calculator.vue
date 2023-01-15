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
  <v-label>Modul Leistung (Watt)</v-label>
  <v-row>
    <v-col cols="4">
      <v-text-field v-model="maxModulePower" @input="calculate" type="number" label="Leistung" variant="outlined">
      </v-text-field>
    </v-col>
    <v-col cols="4">
      <v-text-field v-model="maxModuleCount" type="number" label="Mögliche Modulanzahl" variant="outlined"
        :readonly="true">
      </v-text-field>
    </v-col>
    <v-col cols="4">
      <v-text-field v-model="maxTotalPower" type="number" label="Mögliche Gesammtleistung (Watt)" variant="outlined"
        :readonly="true">
      </v-text-field>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="6">
      <v-select v-model="moduleAlignment" @update:modelValue="calculate" label="Ausrichtung" :items="alignmentOptions"
        item-title="text" item-value="value" signle-line></v-select>
    </v-col>
    <v-col cols="6">
      <v-text-field v-model="maxHarvestPerYear" type="number" label="Möglicher Ertrag (kWh/Jahr)" variant="outlined"
        :readonly="true"></v-text-field>
    </v-col>
  </v-row>
  <v-label>Strompreis (€/kWh)</v-label>
  <v-row>
    <v-col cols="4">
      <v-text-field v-model="currentPrice" @input="calculate" type="number" label="Aktuell" variant="outlined">
      </v-text-field>
    </v-col>
    <v-col cols="4">
      <v-text-field v-model="maxYieldPerYear" type="number" label="Möglicher jährlicher Gewinn" variant="outlined"
        :readonly="true">
      </v-text-field>
    </v-col>
    <v-col cols="4">
      <v-text-field v-model="totalCost" @input="calculate" type="number" label="Gesammtkosten" variant="outlined">
      </v-text-field>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="4">
      <v-text-field v-model="timeTillROI" type="number" label="Zeit bis zur Amortisation" variant="outlined"
        :readonly="true">
      </v-text-field>
    </v-col>
    <v-col cols="4">
      <v-text-field v-model="moduleLifetime" @input="calculate" type="number" label="Lebenszeit der Module"
        variant="outlined">
      </v-text-field>
    </v-col>
    <v-col cols="4">
      <v-text-field v-model="maxTotalYield" type="number" label="Mögliche gesammter Gewinn" variant="outlined"
        :readonly="true">
      </v-text-field>
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
      moduleAlignment: 1.0,
      maxHarvestPerYear: 0,
      currentPrice: 0,
      maxYieldPerYear: 0,
      totalCost: 0,
      timeTillROI: 0,
      moduleLifetime: 0,
      maxTotalYield: 0,
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
      this.maxTotalPower = this.maxModuleCount * this.maxModulePower * this.moduleAlignment
      this.maxHarvestPerYear = this.maxTotalPower * 1650 / 1000
      this.maxYieldPerYear = this.maxHarvestPerYear * this.currentPrice
      this.timeTillROI = this.totalCost / this.maxYieldPerYear
      this.maxTotalYield = this.maxYieldPerYear * (this.moduleLifetime - this.timeTillROI)
    }
  },
}
</script>