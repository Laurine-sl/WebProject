import { useParams, Link } from "react-router-dom";
import { getRestaurant } from "./lib/data";
import { useEffect, useState } from "react";
import "./style/InfoRestaurant.css";

export default function InfoRestaurant() {
  const [restaurant, setRestaurants] = useState(null);
  const { nameRestau } = useParams();

  useEffect(() => {
    const fetchRestaurants = async () => {
      const results = await getRestaurant(nameRestau);
      setRestaurants(results[0]);
    };
    fetchRestaurants();
  }, [nameRestau, setRestaurants]);

  return (
    <div className="info-restaurant-container">
      {restaurant && (
        <div className="info-restaurant">
          <h1>{restaurant.name}</h1>

          {restaurant.website ? (
            <Link to={restaurant.website}>
              <b>Site Web</b>
            </Link>
          ) : (
            "Site Web Non disponible"
          )}
          <p>
            <b>Numéro de téléphone :</b>
            {restaurant.phone ? restaurant.phone : " Non disponible"}
          </p>
          <p>
            <b>{`Horaires d'ouverture :`}</b>
            {`${restaurant.opening_hours ? restaurant.opening_hours : "Non disponible"}`}
          </p>
          <p>
            <b>Adresse :</b> {restaurant.meta_name_com}
          </p>
          <p>
            <b>Type de cuisine :</b> {restaurant.cuisine}
          </p>
          <p>
            <b>À emporter :</b>{" "}
            {restaurant.takeaway == "yes"
              ? "Oui"
              : restaurant.takeaway == "no"
                ? "non"
                : "Non disponible"}
          </p>
        </div>
      )}
    </div>
  );
}
