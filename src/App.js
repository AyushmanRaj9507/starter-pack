import React, { useState } from "react";
import data from './data'
import Tours from "./components/Tours";
import './styles.css';

const App = () => {
  const [tours, setTours] = useState(data);
  const [darkMode, setDarkMode] = useState(false);

  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  if(tours.length === 0) {
    return (
        <div className={`refresh ${darkMode ? "dark" : ""}`}>
          <h2>No Tours Left</h2>
          <button className="btn-white" onClick={() => setTours(data)}>
            Refresh
          </button>
          <button className="btn-toggle" onClick={toggleDarkMode}>
            {darkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
    );
  }

  return (
    <div className={`App ${darkMode ? "dark" : ""}`}>
      <button className="btn-dark-toggle" onClick={toggleDarkMode}>
        {darkMode ? "☀️ Disable Dark Mode" : "🌙 Enable Dark Mode"}
      </button>
      <Tours tours={tours} removeTour={removeTour} />
  </div>

  );
};

export default App;
