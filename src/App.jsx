import { useState } from "react";

import SearchForm from "./components/SearchForm";
import CardInfo from "./components/CardInfo";
import Loader from "./components/Loader";

import weatherApi from "./api/weatherApi";

import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = async (city) => {
    setIsLoading(true);
    try {
      const data = await weatherApi(city);

      setWeatherData(data);
    } catch (error) {
      alert("Місто не знайдено. Спробуйте ще раз.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="app">
      <h1 className="app-header">Погода</h1>
      <SearchForm onSearch={handleSearch} />
      {isLoading ? (
        <Loader />
      ) : (
        weatherData && <CardInfo weatherData={weatherData} />
      )}
    </div>
  );
}

export default App;
