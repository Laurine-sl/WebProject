import { useState, useEffect, useMemo } from "react";
import { getRestaurants } from "../lib/data";
import RestaurantCard from "./RestaurantCard";

export const RestaurantList = ({ arrondissement }) => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const results = await getRestaurants();
      setRestaurants(results);
    };
    fetchRestaurants();
  }, []);

  const filterFn = (restaurant) => {
    return (
      getArrondissement(restaurant.meta_code_com) == Number(arrondissement)
    );
  };

  return (
    <div className="restaurant-list">
      {restaurants.filter(filterFn).map((restaurant) => {
        console.log(restaurant);
        return (
          <RestaurantCard
            key={restaurant.id}
            className="restaurantCard"
            flag={getFlag(restaurant.cuisine)}
            nameRestau={restaurant.name}
            take={getTakeaway(restaurant.takeaway)}
            arrondissement={getArrondissement(restaurant.meta_code_com)}
          />
        );
      })}
    </div>
  );
};

const getTakeaway = (takeAway) => {
  if (takeAway.includes("yes")) {
    return "oui";
  }
  return "non";
};

const getArrondissement = (code) => {
  let arrondissement = code.slice(-2);
  if (arrondissement[0] === "0") {
    return arrondissement[1];
  }
  return arrondissement;
};

const getFlag = (cook) => {
  let flags = " ";
  if (cook.includes("italian") || cook.includes("pizza")) {
    return "🇮🇹";
  } else if (cook.includes("japanese") || cook.includes("sushi")) {
    return "🇯🇵";
  } else if (
    cook.includes("french") ||
    cook.includes("regional") ||
    cook.includes("brasserie")
  ) {
    return "🇫🇷";
  } else if (
    cook.includes("chinese") ||
    cook.includes("fusion_asiatique") ||
    cook.includes("asian")
  ) {
    return "🇨🇳";
  } else if (cook.includes("american")) {
    return "🇺🇸";
  } else if (cook.includes("indian")) {
    return "🇮🇳";
  } else if (cook.includes("mexican")) {
    return "🇲🇽";
  } else if (cook.includes("thai")) {
    return "🇹🇭";
  } else if (cook.includes("spanish")) {
    return "🇪🇸";
  } else if (cook.includes("greek")) {
    return "🇬🇷";
  } else if (cook.includes("korean")) {
    return "🇰🇷";
  } else if (cook.includes("vietnamese")) {
    return "🇻🇳";
  } else if (cook.includes("lebanese")) {
    return "🇱🇧";
  } else if (cook.includes("turkish") || cook.includes("kebab")) {
    return "🇹🇷";
  } else if (cook.includes("quebec")) {
    return "🍁";
  } else if (cook.includes("couscous") || cook.includes("arab")) {
    return "🇲🇦";
  } else if (cook.includes("steak_house") || cook.includes("cordon_bleu")) {
    return "🥩";
  } else if (cook.includes("seafood") || cook.includes("mediterranean")) {
    return "🦞";
  } else if (cook.includes("salad")) {
    return "🥗";
  } else if (cook.includes("crepe")) {
    return "🥞";
  } else if (cook.includes("flammkuchen")) {
    return "🍕";
  }
  return flags;
};
