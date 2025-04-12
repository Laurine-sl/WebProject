import "../style/Filter.css";
import PropTypes from "prop-types";

Filter.propTypes = {
  add_district_to_filter: PropTypes.function,
  remove_district_to_filter: PropTypes.function,
  handle_takeaway: PropTypes.function,
};

export default function Filter({
  add_district_to_filter,
  remove_district_to_filter,
  handle_takeaway,
}) {
  const options = [];

  for (let i = 1; i <= 20; i++) {
    options.push(<option value={i}>{i}</option>);
  }
  return (
    <div className="filter-container">
      <label className="title-filter">Filtrer par :</label>

      <label value="district">
        Arrondissements :
        <ul>
          {options.map((option, index) => (
            <li key={index}>
              <input
                type="checkbox"
                id={index + 1}
                name="district"
                value={index + 1}
                defaultChecked={false}
                onChange={(event) => {
                  if (event.target.checked) {
                    add_district_to_filter(event);
                  } else {
                    remove_district_to_filter(event);
                  }
                }}
              />
              <label htmlFor={index + 1}>
                {index + 1}
                {index + 1 == 1 ? "er" : "ème"}
              </label>
            </li>
          ))}
        </ul>
      </label>
      <label value="à emporter">
        Service à emporter
        <input 
        type="checkbox" 
        name="myCheckbox" 
        defaultChecked={false}
        onChange={handle_takeaway}
        />
      </label>
      <button type="reset">Réinitialiser</button>
    </div>
  );
}
