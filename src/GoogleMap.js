/* import { Loader } from "@googlemaps/js-api-loader";

const loader = new Loader({
    apiKey: "AIzaSyAzcBk5vzNjC0yqQR3x52vpHRdlhFdjSHQ",
    version: "weekly",
    libraries: ["places"],
});

let mapOptions = {
    center: {
        lat: 48.8534,
        lng: 2.3488,
    },
    zoom: 14,
    disableDefaultUI: true,
    // mapTypeId: google.maps.MapTypeId.SATELLITE
};

// Promise
loader
    .load()
    .then((google) => {
        new google.maps.Map(document.getElementById("map"), mapOptions);
    })
    .catch((e) => {
        // do something
        console.log("e : ", e);
    }); */