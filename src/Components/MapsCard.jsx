import "../style/MapsCard.css";
import { Link } from 'react-router-dom'

export default function MapsCard() {
  const handleClick = () => {
    console.log("Button clicked");
  };
  return (
    <button onClick={handleClick} className="maps-card-container">
      <Link to="/map" className="title-maps">Maps</Link>
    </button>
  );
}
