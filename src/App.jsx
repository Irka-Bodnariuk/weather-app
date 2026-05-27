import { useState } from 'react';

import SearchForm from './components/SearchForm';
import CardInfo from './components/CardInfo';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';

import weatherApi from './api/weatherApi';

import './App.css';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (city) => {
    setIsLoading(true);
    setError(null);
    try {
      const data = await weatherApi(city);

      setWeatherData(data);
    } catch (err) {
      setError('Місто не знайдено. Спробуйте ще раз.');
      setWeatherData(null);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="app-container">
      <div>
        <header className="app-header">
          <h1 className="app-title">Погода</h1>
          <p className="tagline">Дізнайтесь погоду в будь-якому місті</p>
        </header>
        <SearchForm
          onSearch={handleSearch}
          setError={setError}
          isLoading={isLoading}
        />

        {isLoading && <Loader />}
        {(error && <ErrorMessage message={error} />) ||
          (weatherData && <CardInfo weatherData={weatherData} />)}
      </div>
    </div>
  );
}

export default App;
