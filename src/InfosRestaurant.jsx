import { useParams } from "react-router-dom";
import { getRestaurant } from "./lib/data";
import { useEffect, useState } from "react";

export default function InfosRestaurant() {
  const [restaurant, setRestaurants] = useState(null);
  const { nameRestau } = useParams();

  useEffect(() => {
    const fetchRestaurants = async () => {
      const results = await getRestaurant(nameRestau);
      setRestaurants(results[0]);
    };
    fetchRestaurants();
  }, [nameRestau, setRestaurants]);
  console.log("InfosRestaurant", restaurant);

  return (
    <div className="infos-restaurant">
      {restaurant && (
        <div>
          <h1>{restaurant.name}</h1>
          <p>
            Site web :
            {restaurant.website ? restaurant.website : " Non disponible"}
          </p>
          <p>
            Numéro de téléphone :
            {restaurant.phone ? restaurant.phone : " Non disponible"}
          </p>
          <p>{`Horaires d'ouverture : ${restaurant.opening_hours ? restaurant.opening_hours : "Non disponible"}`}</p>
          <p>Adresse : {restaurant.meta_name_com}</p>
          <p>Type de cuisine : {restaurant.cuisine}</p>
          <p>
            À emporter :{" "}
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
