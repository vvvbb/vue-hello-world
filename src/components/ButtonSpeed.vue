<template>
  <div class="bg-light m-0 d-flex flex-column justify-content-center">
    <label :for="id" class="font-weight-bold font-italic">{{ id }} ms</label>
    <input
      v-model="sliderVal"
      type="range"
      :id="id"
      :name="id"
      min="0"
      max="1000"
      @change="changeSpeed"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
        sliderVal:250
    };
  },
  props: ["id"],
  methods: {
    changeSpeed() {
      this.$emit("changeSpeed", parseInt(this.sliderVal));
    },
  },
};
</script>

<style>
</style>