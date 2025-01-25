import "./RestaurantCard.css";

const RestaurantCard = () => {
  return (
    <div className="restaurant-card">
      <div className="header">
        <span role="img" aria-label="French flag" className="flag">🇫🇷</span>
        <span className="title">NomRestau</span>
      </div>
      <div className="details">
        <p className="price">Prix : 20/30 €</p>
        <p className="arrondissement">Arr : 11 ème</p>
      </div>
    </div>
  );
};

export default RestaurantCard;