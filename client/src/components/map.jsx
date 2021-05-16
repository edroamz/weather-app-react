import React, { useRef, useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

export default function map({ lat, lng }) {
  const googleMapsKey = process.env.GOOGLE_MAPS_API_KEY;
  const mapRef = useRef();
  let map = {};
  const mapOptions = {
    center: { lat, lng },
    zoom: 10,
  };

  useEffect(async () => {
    const GMapsLoader = new Loader({
      apiKey: googleMapsKey,
      version: "weekly",
    });
    GMapsLoader.load()
      .then(() => {
        map = new google.maps.Map(mapRef.current, mapOptions);
        new google.maps.Marker({
          position: { lat, lng },
          map,
        });
      })
      .catch((e) => {
        console.log(e);
      });
  }, [lat, lng]);

  return <section id="map" ref={mapRef} className="map"></section>;
}
