import { useRef, useEffect, useState } from "react";
import mapboxgl, { Marker, Map } from "mapbox-gl";
import "../styles/MapComponent.css";
import InfoMassif from "./InfoMassif";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYW5vbnltemUiLCJhIjoiY2wyZWppdWZjMDE5cjNmb2drejYzemswcSJ9.Ikuq09fwres0ikyw6J8qDw";

const geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [0.0764, 42.9711],
      },
      properties: {
        title: "Mapbox",
        description: "Washington, D.C.",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [1.63272, 42.70317],
      },
      properties: {
        title: "Mapbox",
        description: "San Francisco, California",
      },
    },
  ],
};

export default function MapComponent() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(3.82);
  const [lat, setLat] = useState(46.72);
  const [zoom, setZoom] = useState(4.95);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v12",
      center: [lng, lat],
      zoom: zoom,
    });

    map.current.on("move", () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });

    for (const feature of geojson.features) {
      // create a HTML element for each feature
      const el = document.createElement("div");
      el.className = "marker";

      // make a marker for each feature and add to the map
      new Marker(el).setLngLat(feature.geometry.coordinates).addTo(map.current);
    }
  }, [lat, lng, zoom]);

  return (
    <>
      <>
        <div className="sidebar">
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
        <div ref={mapContainer} className="map-container"></div>
      </>
      <InfoMassif />
    </>
  );
}