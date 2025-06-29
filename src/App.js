import React, { useState } from "react";
import data from './data'
import Tours from "./components/Tours";
import './styles.css';

const App = () => {
  const [tours, setTours] = useState(data);
  const [searchTerm, setSearchTerm] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  function handleSearch(e) {
    setSearchTerm(e.target.value.toLowerCase());
  }

  const filteredTours = tours.filter((tour) =>
    tour.name.toLowerCase().includes(searchTerm)
  );

  if (tours.length === 0) {
    return (
      <div className={`refresh ${darkMode ? "dark" : ""}`}>
        <h2>No Tours Left</h2>
        <button className="btn-white" onClick={() => setTours(data)}>Refresh</button>
        <button className="btn-dark-toggle" onClick={toggleDarkMode}>
          {darkMode ? "☀️ Disable Dark Mode" : "🌙 Enable Dark Mode"}
        </button>
      </div>
    );
  }

  return (
    <div className={`App ${darkMode ? "dark" : ""}`}>
      <button className="btn-dark-toggle" onClick={toggleDarkMode}>
        {darkMode ? "☀️ Disable Dark Mode" : "🌙 Enable Dark Mode"}
      </button>

      <input
        type="text"
        placeholder="🔍 Search places..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-bar fancy"
      />


      <Tours tours={filteredTours} removeTour={removeTour} />
    </div>
  );
};

export default App;
