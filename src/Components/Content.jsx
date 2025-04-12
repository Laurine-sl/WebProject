import { useState } from "react";
import Filter from "./Filter";
import RestaurantList from "./RestaurantList";

export default function Content() {
  const allDistricts = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
  ];
  let [selectedDistricts, setSelectedDistricts] = useState(allDistricts);

  const add_district_to_filter = (event) => {
    const value = event.target.id;
    if (selectedDistricts.length == 20) {
      setSelectedDistricts([value]);
    } else {
      setSelectedDistricts([...selectedDistricts, value]);
    }
  };
  const remove_district_to_filter = (event) => {
    const value = event.target.id;
    if (selectedDistricts.length == 1) {
      setSelectedDistricts(allDistricts);
    } else {
      setSelectedDistricts(
        selectedDistricts.filter((district) => district != value)
      );
    }
  };
  return (
    <div className="content">
      <Filter
        add_district_to_filter={add_district_to_filter}
        remove_district_to_filter={remove_district_to_filter}
      />
      <RestaurantList districts={selectedDistricts} />
    </div>
  );
}
