import { useState } from "react";
import Filter from "./Filter";
import RestaurantList from "./RestaurantList";
import "../style/Content.css";

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
  const [selectedDistricts, setSelectedDistricts] = useState(allDistricts);
  const [selectedTakeaway, setSelectedTakeaway] = useState(true);

  const handle_takeaway = (event) => {
    const value = event.target.checked;
    setSelectedTakeaway(value);
  };

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

  const reset = () => {
    setSelectedDistricts(allDistricts);
    setSelectedTakeaway(false);
    const checkboxes = document.querySelectorAll("input[type=checkbox]");
    checkboxes.forEach((checkbox) => {
      checkbox.checked = false;
    });
  };
  return (
    <div className="content">
      <Filter
        add_district_to_filter={add_district_to_filter}
        remove_district_to_filter={remove_district_to_filter}
        handle_takeaway={handle_takeaway}
        reset={reset}
      />
      <RestaurantList
        districts={selectedDistricts}
        selectedTakeaway={selectedTakeaway}
      />
    </div>
  );
}
