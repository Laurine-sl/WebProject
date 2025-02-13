import "../style/Filter.css";

export default function Filter() {
  const handleClick = () => {
    console.log("Button clicked");
  };
  return (
    <button onClick={handleClick} className="filter-container">
      <p className="title-filter">Filtrer</p>
    </button>
  );
}
