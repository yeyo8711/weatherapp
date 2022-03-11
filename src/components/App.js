import React from "react";
import MainWindow from "./MainWindow";
import Condition from "./Condition";
import { connect } from "react-redux";
import { fetchWeather, fetchLocation, fetchForecast } from "../actions";
import Forecast from "./Forecast";

class App extends React.Component {
  state = { city: "" };

  componentDidMount() {
    navigator.geolocation.getCurrentPosition((pos) => {
      const lat = pos.coords.latitude;
      const long = pos.coords.longitude;
      this.props.fetchLocation(long, lat);
    });
  }

  componentDidUpdate() {
    if (!this.props.weather && !this.props.forecast) {
      this.props.fetchWeather(this.props.location.address.city);

      this.props.fetchForecast(this.props.location.address.city);
    }
  }

  render() {
    const searchCity = () => {
      this.props.fetchWeather(this.state.city);
      this.props.fetchForecast(this.state.city);
    };

    if (!this.props.weather || !this.props.forecast) {
      return (
        <div className="gradient-border" id="box">
          Welcome to your Weather App
        </div>
      );
    } else {
      return (
        <div className="gradient-border" id="box">
          <div className="gradient-border2" id="box2"></div>
          <div className="search">
            <input
              className="input"
              placeholder="Search City"
              onChange={(e) => this.setState({ city: e.target.value })}
            />

            <button className="ui primary button" onClick={() => searchCity()}>
              Find
            </button>
          </div>

          <MainWindow />
          <Condition />

          <Forecast />
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    weather: state.weather.payload,
    location: state.location.payload,
    forecast: state.forecast.payload,
  };
};

export default connect(mapStateToProps, {
  fetchWeather,
  fetchLocation,
  fetchForecast,
})(App);
