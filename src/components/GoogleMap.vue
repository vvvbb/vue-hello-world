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
import { Loader } from "@googlemaps/js-api-loader";
import ButtonZoom from "./ButtonZoom.vue";

let loader = new Loader({
  apiKey: "AIzaSyAzcBk5vzNjC0yqQR3x52vpHRdlhFdjSHQ",
  version: "weekly",
  libraries: ["places"],
});

let myCustomMap;

export default {
  name: "GoogleMap",
  components: { ButtonZoom },
  data() {
    return {
      latitude: "Latitude",
      longitude: "Longitude",
      idlatitude: "latitude",
      idlongitude: "longitude",

      lat: 48.8534,
      lng: 2.3488,
      speed: 25, //in ms
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
      if (val != 1) {
        this.t = setInterval(() => {
          this.updateMap(id, val);
        }, this.speed);
      } else if (val == 1) {
        clearInterval(this.t);
      }
    },

    updateMap(id, val) {
      switch (id) {
        case this.idlatitude:
          if (val > 1) {
            this.lat += 0.0001;
          } else if (val < 1) {
            this.lat -= 0.0001;
          }
          break;
        case this.idlongitude:
          if (val > 1) {
            this.lng += 0.0001;
          } else if (val < 1) {
            this.lat -= 0.0001;
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
  min-height: 100vh;
}
div.zIndex {
  z-index: 2;
}
</style>