<template>
  <div class="bg-light m-0">
    <label :for="id" class="font-weight-bold font-italic">{{ label }}</label>

    <div class="d-flex justify-content-center">
      <span>decrease</span>
      <input
        v-model="sliderVal"
        type="range"
        :id="id"
        :name="id"
        min="0"
        max="2"
        @change="changePos"
      />
      <span>increase</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ["label", "id"],
  data() {
    return {
      rank: null,
      sliderVal: "1",
    };
  },
  methods: {
    changePos() {
      this.$emit("changePos", this.id, parseInt(this.sliderVal));
    },
  },
};
</script>

<style scoped>
/* partie commune */
input[type="range"] {
  -webkit-appearance: none; /*nécessaire pour Chrome */
  padding: 0; /* nécessaire pour IE */
  font: inherit; /* même rendu suivant font document */
  outline: none;
  color: #069; /* sert pour couleur de référence, via currentColor, pour le curseur */
  opacity: 0.8;
  background: #ccc; /* sert pour couleur de fond de la zone de déplacement */
  box-sizing: border-box; /* même modèle de boîte pour tous */
  transition: opacity 0.2s;
  cursor: pointer;
}
</style>