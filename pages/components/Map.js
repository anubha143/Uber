import { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";
import Link from "next/link";
mapboxgl.accessToken =
  "pk.eyJ1IjoiaXRzYW51YmhhIiwiYSI6ImNrdncxZmVobzl4cGQycHF3c2Iyc3B3bHUifQ.uPnVvnJFyh7diCeu5qLFvA";
const Map = ({ pickupCoordinates, dropoffCoordinates }) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [-99.29011, 39.39172],
      zoom: 3,
    });
    if (pickupCoordinates) {
      addToMap(map, pickupCoordinates);
    }
    if (dropoffCoordinates) {
      addToMap(map, dropoffCoordinates);
    }
    if (pickupCoordinates && dropoffCoordinates) {
      map.fitBounds([pickupCoordinates, dropoffCoordinates], {
        padding: 60,
      });
    }
  }, [pickupCoordinates, dropoffCoordinates]);
  // Create a default Marker and add it to the map.
  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
    // const marker2 = new mapboxgl.Marker().setLngLat(coordinates2).addTo(map);
  };
  return <Wrapper id="map"></Wrapper>;
};

export default Map;
const Wrapper = tw.div`
flex-1 h-1/2
`;
