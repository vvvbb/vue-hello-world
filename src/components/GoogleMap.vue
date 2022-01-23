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
      speed: 250,
      speedaaa: 0.00005,
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
          new google.maps.Map(document.getElementById("map"), mapOptions);
        })
        .catch((e) => {
          console.log("e : ", e);
        });
    },

    changeFoo(id, val) {
      //   console.log("change position", id, val);

      if (val != 1) {
        this.t = setInterval(() => {
          this.updateMap();
        }, this.speed);
      } else if (val == 1) {
        clearInterval(this.t);
      }

      let mapOptions = {
        center: {
          lat: 48.8534,
          lng: 2.3488,
        },
        zoom: 14,
        disableDefaultUI: true,
        // mapTypeId: google.maps.MapTypeId.SATELLITE
      };

      loader
        .load()
        .then((google) => {
          new google.maps.Map(document.getElementById("map"), mapOptions);
        })
        .catch((e) => {
          console.log("e : ", e);
        });
    },
    updateMap() {
      console.log("SET INT");

      // if (this.val > 1) {
      //   IncPosition = setInterval(function () {
      //     coordY += speed;
      //     myCustomMap.setCenter({ lat: coordX, lng: coordY });
      //   }, 50);
      // } else if (!e.target.checked) {
      //   clearInterval(IncPosition);
      // }
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