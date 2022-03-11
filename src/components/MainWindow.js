import React from "react";
import { connect } from "react-redux";

class MainWindow extends React.Component {
  state = { celsius: true };

  render() {
    const { current, location } = this.props.weather;
    // Toggles Celsius and Farenheit
    const getTemp = () => {
      if (this.state.celsius) {
        return <div>{current.temp_c}</div>;
      } else {
        return <div>{current.temp_f}</div>;
      }
    };

    return (
      <div>
        <div className="mainwindow">
          <i className="location arrow icon">Location:</i>
          <div>{location.name}</div>
          <br />
          <i className="thermometer icon">
            Temperature:
            <i
              className="cficon"
              onClick={() => this.setState({ celsius: true })}
            >
              C
            </i>
            /
            <i
              className="cficon"
              onClick={() => this.setState({ celsius: false })}
            >
              F
            </i>
          </i>
          <div>{getTemp()} degrees </div>
          <br />
          <i className="clock icon">Time:</i>
          <div>{location.localtime.slice(11, 16)}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    weather: state.weather.payload,
    location: state.location.payload,
  };
};

export default connect(mapStateToProps)(MainWindow);
