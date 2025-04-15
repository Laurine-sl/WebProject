import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { getRestaurants } from "./lib/data";
import "./style/Map.css";

import iconUrl from "./icons/icone_map.png";

const restaurantIcon = new L.Icon({
  iconUrl: iconUrl,
  iconSize: [40, 40],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

export default function Map() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const results = await getRestaurants();
      if (results && Array.isArray(results)) {
        setRestaurants(results);
      }
    };
    fetchRestaurants();
  }, [setRestaurants]);
  console.log("InfosRestaurant", restaurants);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <MapContainer
        center={[48.8566, 2.3522]} // Centré sur Paris
        zoom={13}
        style={{ height: "100%", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.fr/osmfr/{z}/{x}/{y}.png"
          attribution="© OpenStreetMap"
        />
        {restaurants.map((restaurant, index) => {
          if (
            restaurant.meta_geo_point &&
            restaurant.meta_geo_point.lat &&
            restaurant.meta_geo_point.lon
          ) {
            const lat = parseFloat(restaurant.meta_geo_point.lat);
            const lon = parseFloat(restaurant.meta_geo_point.lon);

            return (
              <Marker key={index} position={[lat, lon]} icon={restaurantIcon}>
                <Popup>{restaurant.name}</Popup>
              </Marker>
            );
          }
          return null;
        })}
      </MapContainer>
    </div>
  );
}
