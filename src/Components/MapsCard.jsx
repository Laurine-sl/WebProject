import "../style/MapsCard.css";
import { Link } from "react-router-dom";

export default function MapsCard() {
  return (
    <button className="maps-card-container">
      <Link to="/map" className="title-maps">
        Maps
      </Link>
    </button>
  );
}
