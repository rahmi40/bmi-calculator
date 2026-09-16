import { useState } from "react";
import "./App.css";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [entries, setEntries] = useState([]);

  const bmi =
    height && weight
      ? (weight / ((height / 100) * (height / 100))).toFixed(2)
      : "";

  const saveEntry = () => {
    if (!bmi) return;

    const newEntry = {
      id: Date.now(),
      height,
      weight,
      bmi,
    };

    setEntries([...entries, newEntry]);
  };

  const deleteEntry = (id) => {
    setEntries(entries.filter((entry) => entry.id !== id));
  };

  return (
    <div className="container">
      <h1>BMI Calculator</h1>

      <div className="input-group">
        <label>Height (cm)</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Enter height"
        />
      </div>

      <div className="input-group">
        <label>Weight (kg)</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Enter weight"
        />
      </div>

      {bmi && (
        <div className="bmi-result">
          <h2>Your BMI: {bmi}</h2>
        </div>
      )}

      <button className="save-button" onClick={saveEntry}>
        Save Entry
      </button>

      <h2 className="saved-title">Saved Entries</h2>

      {entries.length === 0 ? (
        <p>No saved entries yet.</p>
      ) : (
        entries.map((entry) => (
          <div className="entry" key={entry.id}>
            <span>
              Height: {entry.height} cm | Weight: {entry.weight} kg | BMI:{" "}
              {entry.bmi}
            </span>

            <button
              className="delete-button"
              onClick={() => deleteEntry(entry.id)}
            >
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
