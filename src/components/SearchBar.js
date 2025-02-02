import React, { useState, useEffect } from 'react';
import './SearchBar.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://dpaste.com/79QXDY8TD.txt'); 
        const data = await response.json();
        setCountries(data);
      } catch (error) {
        console.error("Error fetching countries data: ", error);
      }
    };
    fetchCountries();
  }, []);

  const handleInputChange = (e) => {
    const input = e.target.value;
    setQuery(input);

    if (input.length > 0) {
      const filteredSuggestions = countries.filter((country) =>
        country.country.toLowerCase().startsWith(input.toLowerCase()) ||
        country.capital.toLowerCase().startsWith(input.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a country or capital..."
        value={query}
        onChange={handleInputChange}
      />
      <ul className="suggestions-list">
        {suggestions.map((country, index) => (
          <li key={index}>
            <i className="fas fa-search"></i>
            {country.country} - {country.capital}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchBar;