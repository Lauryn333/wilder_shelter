import { useRef, useEffect, useState } from "react";
import mapboxgl, { Marker, Map } from "mapbox-gl";
import axios from "axios";
import "../styles/MapComponent.css";
import InfoMassif from "./InfoMassif";

mapboxgl.accessToken =
  "pk.eyJ1IjoiYW5vbnltemUiLCJhIjoiY2wyZWppdWZjMDE5cjNmb2drejYzemswcSJ9.Ikuq09fwres0ikyw6J8qDw";

export default function MapComponent() {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(3.82);
  const [lat, setLat] = useState(46.72);
  const [zoom, setZoom] = useState(4.95);

  const [pyrenees, setPyrenees] = useState([]);
  const [alpes, setAlpes] = useState([]);
  const [jura, setJura] = useState([]);
  const [massifCentral, setMassifCentral] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://www.refuges.info/api/massif?massif=351&type_points=all&nb_points=5`
      )
      .then((res) => {
        setPyrenees(res.data.features);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://www.refuges.info/api/massif?massif=352&type_points=all&nb_points=5"
      )
      .then((res) => {
        setAlpes(res.data.features);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://www.refuges.info/api/massif?massif=2198&type_points=all&nb_points=5"
      )
      .then((res) => {
        setJura(res.data.features);
      });
  }, []);

  useEffect(() => {
    axios
      .get(
        "https://www.refuges.info/api/massif?massif=50&type_points=all&nb_points=5"
      )
      .then((res) => {
        setMassifCentral(res.data.features);
      });
  }, []);

  useEffect(() => {
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

    for (let massif of pyrenees) {
      const popup = new mapboxgl.Popup({ offset: 25 }).setText(
        massif.properties.nom
      );
      const el = document.createElement("div");
      el.className = "marker";
      new Marker(el)
        .setLngLat(massif.geometry.coordinates)
        .setPopup(popup)
        .addTo(map.current);
    }

    for (let i = 0; i < jura.length; i++) {
      const popup = new mapboxgl.Popup({ offset: 25 }).setText(
        jura[i].properties.nom
      );
      const el = document.createElement("div");
      el.className = "marker";
      new Marker(el)
        .setLngLat(jura[i].geometry.coordinates)
        .setPopup(popup)
        .addTo(map.current);
    }

    for (let i = 0; i < massifCentral.length; i++) {
      const popup = new mapboxgl.Popup({ offset: 25 }).setText(
        massifCentral[i].properties.nom
      );
      const el = document.createElement("div");
      el.className = "marker";
      new Marker(el)
        .setLngLat(massifCentral[i].geometry.coordinates)
        .setPopup(popup)
        .addTo(map.current);
    }

    for (let i = 0; i < alpes.length; i++) {
      const popup = new mapboxgl.Popup({ offset: 25 }).setText(
        alpes[i].properties.nom
      );
      const el = document.createElement("div");
      el.className = "marker";
      new Marker(el)
        .setLngLat(alpes[i].geometry.coordinates)
        .setPopup(popup)
        .addTo(map.current);
    }
  }, [jura, massifCentral, alpes, pyrenees]);

  return (
    <div className="global-div-map">
      <div ref={mapContainer} className="map-container">
        <div className="sidebar">
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
      </div>
      <InfoMassif
        pyrenees={pyrenees}
        jura={jura}
        alpes={alpes}
        massifCentral={massifCentral}
      />
    </div>
  );
}
