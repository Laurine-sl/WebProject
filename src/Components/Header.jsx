import "../style/Header.css";
import MapsCard from "../Components/MapsCard.jsx";

const Header = () => {
  return (
    <div className="header">
      <div className="cadre">
        <div className="texte">
          <p className="titre">Restau&GO</p>
          <p className="slogan">Explorez, savourez, repartez.</p>
        </div>
        <div className="maps">
          <MapsCard />
        </div>
      </div>
    </div>
  );
};
export default Header;
