import React, { useState } from "react";

const SearchForm = ({ onSearch }) => {
  const [searchCity, setSearchCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchCity.trim() === "") {
      alert("Будь ласка, введіть назву міста.");
      return;
    }
    onSearch(searchCity);
    setSearchCity("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Введіть назву міста"
        value={searchCity}
        onChange={(e) => setSearchCity(e.target.value)}
      />
      <button type="submit">Пошук міста</button>
    </form>
  );
};

export default SearchForm;
