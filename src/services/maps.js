/*global google*/
import { Loader } from "@googlemaps/js-api-loader"
import { Windows } from "grommet-icons";
import { firebaseConfig } from "./firebase";

const loader = new Loader({
  apiKey: firebaseConfig.apiKey,
  version: "weekly",
});

function initMap(dataGoogleState){
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.116637, lng: -6.015144 },
    zoom: 8,
  });
  
  const infoWindow = new google.maps.InfoWindow();
  
  dataGoogleState.map(item => {
    const marker = new google.maps.Marker({
      position: { lat: item.lat, lng: item.lng },
      title: item.address,
      animation: google.maps.Animation.DROP,
      map,
    })

    marker.addListener('click', () => {
      infoWindow.close();
      infoWindow.setContent(marker.getTitle())
      infoWindow.open(marker.getMap(), marker);
    })
    marker.addListener('dblclick', () => window.open(item.url))
    map.addListener('click', () => infoWindow.close());
  })
};
export { initMap, loader };
