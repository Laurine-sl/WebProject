import "../style/MapsCard.css";

export default function MapsCard() {
  const handleClick = () => {
    console.log("Button clicked");
  };
  return (
    <button onClick={handleClick} className="maps-card-container">
      <p className="title-maps">Maps</p>
    </button>
  );
}
