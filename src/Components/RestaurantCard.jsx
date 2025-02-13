import "../style/RestaurantCard.css";

export default function RestaurantCard() {
  const handleClick = () => {
    console.log("Button clicked");
  };
  return (
    <button onClick={handleClick} className="restaurant-card">
      <div className="align">
        <span role="img" aria-label="French flag" className="flag">
          🇫🇷
        </span>
        <span className="title2">NomRestau</span>
      </div>
      <div className="details">
        <p className="price">Prix : 20/30 €</p>
        <p className="arrondissement">Arr : 11 ème</p>
      </div>
    </button>
  );
}
