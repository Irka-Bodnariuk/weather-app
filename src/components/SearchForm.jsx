import React, { useState } from 'react';
import ErrorMessage from './ErrorMessage';

const SearchForm = ({ onSearch, setError, isLoading }) => {
  const [searchCity, setSearchCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchCity.trim() === '') {
      setError('Будь ласка, введіть назву міста.');
      return;
    }

    onSearch(searchCity.trim());
    setSearchCity('');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        autoFocus
        type="text"
        placeholder="Введіть назву міста"
        value={searchCity}
        onChange={(e) => setSearchCity(e.target.value)}
        disabled={isLoading}
        autoFocus
      />
      <button type="submit" disabled={isLoading}>
        Пошук
      </button>
    </form>
  );
};

export default SearchForm;
