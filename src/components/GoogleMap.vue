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
          <ButtonSpeed :id="speed" @changeSpeed="changeSpeed" />
        </div>
      </div>
    </div>

    <div id="map"></div>
  </div>
</template>


<script>
import { Loader } from "@googlemaps/js-api-loader";
import ButtonZoom from "./ButtonZoom.vue";
import ButtonSpeed from "./ButtonSpeed.vue";

let loader = new Loader({
  apiKey: "AIzaSyCrVCHku9jcEI8u6YKIShvINvFeFacEqp8",
  version: "weekly",
  libraries: ["places"],
});

let myCustomMap;

export default {
  name: "GoogleMap",
  components: { ButtonZoom, ButtonSpeed },
  data() {
    return {
      latitude: "Latitude",
      longitude: "Longitude",
      idlatitude: "latitude",
      idlongitude: "longitude",

      lat: 48.8534,
      lng: 2.3488,
      speed: 250, //in ms
    };
  },
  methods: {
    init() {
      let mapOptions = {
        center: {
          lat: this.lat,
          lng: this.lng,
        },
        zoom: 14,
        disableDefaultUI: true,
        mapTypeId: "satellite",

        // mapTypeId: google.maps.MapTypeId.SATELLITE
      };

      loader
        .load()
        .then((google) => {
          myCustomMap = new google.maps.Map(
            document.getElementById("map"),
            mapOptions
          );
        })
        .catch((e) => {
          console.log("e : ", e);
        });
    },

    changeFoo(id, val) {
      let obj = { id, val };
      clearInterval(this.t);

      if (val != 1) {
        this.t = setInterval(() => {
          this.updateMap(obj);
        }, this.speed);
      } else if (val == 1) {
        clearInterval(this.t);
        console.log("clearInterval");
      }
    },

    changeSpeed(speed) {
      console.log(speed);
      this.speed = speed;
    },

    updateMap(obj) {
      switch (obj.id) {
        case this.idlatitude:
          if (obj.val > 1) {
            this.lat += 0.0001;
          } else if (obj.val < 1) {
            this.lat -= 0.0001;
          }
          break;
        case this.idlongitude:
          if (obj.val > 1) {
            this.lng += 0.0001;
          } else if (obj.val < 1) {
            this.lng -= 0.0001;
          }
          break;
      }

      myCustomMap.setCenter({ lat: this.lat, lng: this.lng });
    },
  },

  mounted() {
    this.init();
  },
};
</script>

<style>
#map {
  min-height: 80vh;
}
div.zIndex {
  z-index: 2;
}
</style>