import React, { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "mapbox-gl";
mapboxgl.accessToken =
  "pk.eyJ1IjoibWlsYW4yNiIsImEiOiJja3ZseGkyaDAza2NyMnBwZzl4ODA3OHd4In0.-lfouQWvFtyCJdDxA4B35g";
const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [-74.5, 40],
      zoom: 3,
    });

    addToMap(map);
  });
  const addToMap = (map) => {
    const marker1 = new mapboxgl.Marker().setLngLat([-74.5, 40]).addTo(map);
  };

  return <Wrapper id="map"></Wrapper>;
};

export default Map;

const Wrapper = tw.div`
    flex-1
    `;
