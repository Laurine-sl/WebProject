import { useState } from "react";
import Filter from "./Filter";
import { RestaurantList } from "./RestaurantList";

export default function Content() {
  const [arrondissement, setArrondissement] = useState("");
  const handleChange = (event) => {
    setArrondissement(event.target.value);
  };
  return (
    <div className="content">
      <Filter onChangeUpdate={handleChange} />
      <RestaurantList arrondissement={arrondissement} />
    </div>
  );
}
