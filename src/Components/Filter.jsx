import "../style/Filter.css";

export default function Filter({ onChangeUpdate }) {
  const handleClick = () => {
    console.log("Button clicked");
  };

  const options = [];
  for (let i = 1; i <= 20; i++) {
    options.push(<option value={i}>{i}</option>);
  }
  return (
    <button onClick={handleClick} className="filter-container">
      <label className="title-filter">Filtrer par :</label>

      <label value="arrondissement">
        Arrondissement :
        <select
          onChange={onChangeUpdate}
          id="arrondissement"
          name="arrondissement"
        >
          {options}
        </select>
      </label>
      <label value="à emporter">
        Service à emporter
        <input type="checkbox" name="myCheckbox" defaultChecked={true} />
      </label>
      <button type="reset">Réinitialiser</button>
    </button>
  );
}
