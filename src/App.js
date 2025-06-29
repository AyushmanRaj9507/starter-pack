import React, { useState, useEffect } from "react";
import data from './data';
import Tours from "./components/Tours";
import './styles.css';

const App = () => {
  const [tours, setTours] = useState(data);
  const [searchTerm, setSearchTerm] = useState('');
  const [showOnlyBookmarked, setShowOnlyBookmarked] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "";
  }, [darkMode]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const removeTour = (id) => {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  };

  const toggleShowOnlyBookmarked = () => {
    setShowOnlyBookmarked(!showOnlyBookmarked);
  };

  const filteredTours = tours
    .filter((tour) => tour.name.toLowerCase().includes(searchTerm))
    .filter((tour) => {
      if (showOnlyBookmarked && !tour.isBookmarked) return false;
      return true;
    });

  if (tours.length === 0) {
    return (
      <div className="refresh">
        <h2>No Tours Left</h2>
        <button className="btn-white" onClick={() => setTours(data)}>
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="App">
      <button
        className="btn-toggle"
        onClick={() => setDarkMode(!darkMode)}
        style={{ float: "right", marginRight: "20px", marginTop: "10px" }}
      >
        {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>

      <input
        type="text"
        placeholder="🔍 Search places..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-bar fancy"
      />

      <button className="btn-toggle" onClick={toggleShowOnlyBookmarked}>
        {showOnlyBookmarked ? "Show All Tours" : "Show Only ❤️ Bookmarked"}
      </button>

      <Tours
        tours={filteredTours}
        removeTour={removeTour}
        setTours={setTours}
      />
    </div>
  );
};

export default App;
