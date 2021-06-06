import * as React from "react";
import { useRef, useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

interface IGMapsProps {
  lat: number;
  lng: number;
}

export default function gMaps({ lat, lng }: IGMapsProps) {
  const googleMapsKey = process.env.GOOGLE_MAPS_API_KEY;
  const mapRef = useRef<HTMLInputElement | null>(null);
  const mapOptions = {
    center: { lat, lng },
    zoom: 10,
  };

  useEffect(() => {
    const LoadMaps = async () => {
      const GMapsLoader = new Loader({
        apiKey: googleMapsKey || "",
        version: "weekly",
      });
      GMapsLoader.load()
        .then(() => {
          if (mapRef.current) {
            let map = new google.maps.Map(mapRef.current, mapOptions);
            new google.maps.Marker({
              position: { lat, lng },
              map,
            });
          }
        })
        .catch((e) => {
          console.log(e);
        });
    };

    LoadMaps();
  }, [lat, lng]);

  return <section id="map" ref={mapRef} className="map"></section>;
}
