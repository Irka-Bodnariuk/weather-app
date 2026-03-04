import React, { useState } from "react";

const SearchForm = () => {
  const [searchCity, setSearchCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("e:", e);
    console.log("Пошук міста:", searchCity);
  };

  return (
    <form onSubmit={handleSubmit}>
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
