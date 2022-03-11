import axios from "axios";

export const fetchWeather = (city) => async (dispatch) => {
  const response = await axios.get(
    `https://api.weatherapi.com/v1/current.json?key=c9d9f11c2ae44eff814223623220903&q=${city}&aqi=no`
  );
  dispatch({ type: "GET_WEATHER", payload: response.data });
};

export const fetchLocation = (long, lat) => async (dispatch) => {
  const response = await axios.get(
    `https://us1.locationiq.com/v1/reverse.php?key=pk.a175dc8de64a59bb88e06d6a4aa3987c&lat=${lat}&lon=${long}&format=json`
  );
  dispatch({ type: "GET_LOCATION", payload: response.data });
};

export const fetchForecast = (city) => async (dispatch) => {
  const response =
    await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=c9d9f11c2ae44eff814223623220903 &q=${city}&days=5&aqi=no&alerts=no
  `);
  dispatch({ type: "FETCH_FORECAST", payload: response.data });
};
