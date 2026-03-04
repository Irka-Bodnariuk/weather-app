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
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Введіть назву міста"
        value={searchCity}
        onChange={(e) => setSearchCity(e.target.value)}
      />
      <button type="submit">Пошук</button>
    </form>
  );
};

export default SearchForm;
