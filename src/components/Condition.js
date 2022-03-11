import React from "react";
import { connect } from "react-redux";

const Condition = (props) => {
  return (
    <div>
      <div className="mainwindow">
        <div>
          <i className="icon">Condition:</i>
        </div>
        <div>
          <i>
            <img src={props.weather.condition.icon} alt="something" />
          </i>{" "}
        </div>

        <div>
          <i className="icon"> Humidity: {props.weather.humidity}</i>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    weather: state.weather.payload.current,
  };
};

export default connect(mapStateToProps)(Condition);
