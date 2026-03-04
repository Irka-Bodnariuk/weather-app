import axios from "axios";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5/weather";

const weatherApi = async (city) => {
  const response = await axios.get(BASE_URL, {
    params: {
      q: city,
      units: "metric",
      lang: "ua",
      appid: API_KEY,
    },
  });

  if (response.status === 200) {
    return response.data;
  }
};

export default weatherApi;
