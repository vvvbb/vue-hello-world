<template>
  <div>
    <div class="row">
      <div class="col-6 m-auto">
        <div
          class="
            zIndex
            position-absolute
            d-flex
            justify-content-around
            bg-light
          "
        >
          <ButtonZoom
            :label="latitude"
            :id="idlatitude"
            @changePos="changeFoo"
          />

          <ButtonZoom
            :label="longitude"
            :id="idlongitude"
            @changePos="changeFoo"
          />
        </div>
      </div>
    </div>

    <div id="map"></div>
  </div>
</template>


<script>
import ButtonZoom from "./ButtonZoom.vue";

export default {
  name: "GoogleMap",
  components: { ButtonZoom },
  data() {
    return {
      latitude: "Latitude",
      longitude: "Longitude",
      idlatitude: "latitude",
      idlongitude: "longitude",
    };
  },
  methods: {
    changeFoo(id, val) {
      console.log("change position", id, val);
    },
  },
};
</script>

<style>
#map {
  min-height: 100vh;
}
div.zIndex {
  z-index: 2;
}
</style>