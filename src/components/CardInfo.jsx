const CardInfo = ({ weatherData }) => {
  const temp = Math.round(weatherData.main.temp);
  const feelsLike = Math.round(weatherData.main.feels_like);
  const humidity = weatherData.main.humidity;
  const windSpeed = Math.round(weatherData.wind.speed);
  const visibility = (weatherData.visibility / 1000).toFixed(1);
  const pressure = weatherData.main.pressure;

  return (
    <div className="card">
      <div className="card-header">
        <div className="card-header-content">
          <h2 className="card-title">{weatherData.name}</h2>
          <p className="card-country">{weatherData.sys?.country || ''}</p>
        </div>
        <img
          className="card-image"
          src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          alt={weatherData.weather[0].main}
        />
      </div>

      <div className="card-temp-section">
        <p className="card-temp">{temp}°C</p>
        <p className="card-feels-like">Відчується: {feelsLike}°C</p>
      </div>

      <p className="card-descr">{weatherData.weather[0].description}</p>

      <div className="card-grid">
        <div className="card-item">
          <span className="card-item-label">Вітер</span>
          <span className="card-item-value">{windSpeed} М/С</span>
        </div>
        <div className="card-item">
          <span className="card-item-label">Вологість</span>
          <span className="card-item-value">{humidity}%</span>
        </div>
        <div className="card-item">
          <span className="card-item-label">Тиск</span>
          <span className="card-item-value">{pressure} hPa</span>
        </div>
        <div className="card-item">
          <span className="card-item-label">Видимість</span>
          <span className="card-item-value">{visibility} км</span>
        </div>
      </div>
    </div>
  );
};

export default CardInfo;
