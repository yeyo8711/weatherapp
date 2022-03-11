import { combineReducers } from "redux";
import fetchForecast from "./fetchForecast";
import locationReducer from "./locationReducer";
import weatherreducer from "./weatherreducer";

export default combineReducers({
  weather: weatherreducer,
  location: locationReducer,
  forecast: fetchForecast,
});
