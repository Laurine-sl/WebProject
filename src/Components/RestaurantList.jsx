import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getRestaurants } from "../lib/data";
import RestaurantCard from "./RestaurantCard";

RestaurantList.propTypes = {
  districts: PropTypes.number,
  selectedTakeaway: PropTypes.bool,
};

export default function RestaurantList({ districts, selectedTakeaway }) {
  const [restaurants, setRestaurants] = useState([]);

  console.log("Districts selected: ", districts);

  useEffect(() => {
    const fetchRestaurants = async () => {
      const results = await getRestaurants();
      setRestaurants(results);
    };
    fetchRestaurants();
  }, []);

  const filterFn = (restaurant) => {
    return selectedTakeaway
      ? districts.includes(format_district(restaurant.meta_code_com)) &&
          restaurant.takeaway.includes("yes")
      : districts.includes(format_district(restaurant.meta_code_com));
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
            district={format_district(restaurant.meta_code_com)}
          />
        );
      })}
    </div>
  );
}

const getTakeaway = (takeAway) => {
  if (takeAway.includes("yes")) {
    return "oui";
  }
  return "non";
};

const format_district = (code) => {
  let district = code.slice(-2);
  if (district[0] === "0") {
    return district[1];
  }
  return district;
};

const getFlag = (cook) => {
  let flags = " ";
  if (cook.includes("italian") || cook.includes("pizza")) {
    return "🇮🇹";
  } else if (
    cook.includes("japanese") ||
    cook.includes("sushi") ||
    cook.includes("japonais")
  ) {
    return "🇯🇵";
  } else if (
    cook.includes("french") ||
    cook.includes("regional") ||
    cook.includes("brasserie") ||
    cook.includes("local")
  ) {
    return "🇫🇷";
  } else if (
    cook.includes("chinese") ||
    cook.includes("fusion_asiatique") ||
    cook.includes("asian")
    || cook.includes("Chinese")
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
  } else if (cook.includes("taiwanese")) {
    return "🇹🇼";
  } else if (cook.includes("portuguese")) {
    return "🇵🇹";
  } else if (cook.includes("couscous") || cook.includes("arab")) {
    return "🇲🇦";
  } else if (cook.includes("steak_house") || cook.includes("cordon_bleu")) {
    return "🥩";
  } else if (cook.includes("seafood") || cook.includes("mediterranean")) {
    return "🦞";
  } else if (cook.includes("salad") || cook.includes("bento")) {
    return "🥗";
  } else if (cook.includes("crepe")) {
    return "🥞";
  } else if (cook.includes("flammkuchen")) {
    return "🍕";
  } else if (cook.includes("brunch")) {
    return "🍳";
  } else if (cook.includes("burger")) {
    return "🍔";
  } else if (cook.includes("fries")) {
    return "🍟";
  }
  return flags;
};
