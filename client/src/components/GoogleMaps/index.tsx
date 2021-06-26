import * as React from "react";
import { useRef, useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

interface IGoogleMapsProps {
  lat: number;
  lng: number;
  title: string;
}

export default function googleMaps({ lat, lng, title }: IGoogleMapsProps) {
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
            const map = new google.maps.Map(mapRef.current, mapOptions);
            const svgMarker = {
              path: "M18.364 17.364L12 23.728l-6.364-6.364a9 9 0 1 1 12.728 0zM12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",
              fillColor: "red",
              fillOpacity: 1,
              strokeWeight: 0,
              rotation: 0,
              scale: 1.55,
              anchor: new google.maps.Point(15, 30),
            };
            new google.maps.Marker({
              position: { lat, lng },
              map,
              icon: svgMarker,
              title,
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
