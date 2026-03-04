const CardInfo = ({ weatherData }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h2 className="card-title">{weatherData.name}</h2>
        <img
          className="card-image"
          src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
          alt={weatherData.weather[0].main}
        />
      </div>
      <p className="card-temp"> {Math.round(weatherData.main.temp)} °C</p>
      <p className="card-descr"> {weatherData.weather[0].description}</p>
      <p className="card-wind"> {Math.round(weatherData.wind.speed)} М/С</p>
    </div>
  );
};

export default CardInfo;
