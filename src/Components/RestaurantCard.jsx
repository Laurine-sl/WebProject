import "../style/RestaurantCard.css";
import PropTypes from "prop-types";

RestaurantCard.propTypes = {
  flag: PropTypes.string.isRequired,
  nameRestau: PropTypes.string.isRequired,
  take: PropTypes.string.isRequired,
  district: PropTypes.number.isRequired,
};

export default function RestaurantCard({ flag, nameRestau, take, district }) {
  const handleClick = () => {
    console.log("Button clicked");
  };
  return (
    <button onClick={handleClick} className="restaurant-card">
      <div className="align">
        <span role="img" aria-label="French flag" className="flag">
          {flag}
        </span>
        <span className="title2">{nameRestau}</span>
      </div>
      <div className="details">
        <p className="emporter">à emporter : {take} </p>
        <p className="district">
          arrondissement : {district}
          {district == 1 ? "er" : "ème"}
        </p>
      </div>
    </button>
  );
}
