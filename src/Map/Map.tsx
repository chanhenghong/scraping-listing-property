import React, { useEffect, useState, useRef } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiY2hhbmhlbmdob25nIiwiYSI6ImNsN3BtZ2ZjcTA2bGIzd21ia3ZqOG5lcW8ifQ.b-x0f6TY2alN7I6WP8K0Qw";

const Mapboxgl = () => {
  const mapContainerRef = useRef(null);

  const [lng, setLng] = useState(104.9038566);
  const [lat, setLat] = useState(11.5774552);
  const [zoom, setZoom] = useState(9);
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
      style: "mapbox://styles/mapbox/streets-v11",
      center: [104.9038566, 11.5774552],
      zoom: 8,
    });
    const marker1 = new mapboxgl.Marker()
      .setLngLat([104.9038566, 11.5774552])
      .addTo(map);
  }, []);
  return (
    <div style={{ padding: 0, margin: 0 }}>
      <div
        style={{ position: "absolute", top: 0, bottom: 0, left: 0, right: 0 }}
        ref={mapContainerRef}
      />
    </div>
  );
};

export default Mapboxgl;
