import "../style/Header.css";
import MapsCard from "../Components/MapsCard.jsx";

const Header = () => {
  return (
    <div className="header">
      <div className="frame">
        <div className="text">
          <p className="title1">Restau&GO</p>
          <p className="slogan">Explorez, savourez, repartez.</p>
        </div>
        <div className="map-button">
          <MapsCard />
        </div>
      </div>
    </div>
  );
};
export default Header;
