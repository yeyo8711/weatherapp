import React from "react";
import { connect } from "react-redux";

const Forecast = (props) => {
  return (
    <div className="forecast">
      {props.forecast.forecast.forecastday.map((day) => {
        const date = new Date((day.date_epoch + 86400) * 1000);

        return (
          <div key={day.date_epoch}>
            <div className="day"> {String(date).slice(0, 4)}</div>
            <br />
            <div className="condition">{day.day.condition.text}</div>
            <img src={day.day.condition.icon} alt="something" />
            <div>Sunrise:</div>
            <div>{day.astro.sunrise}</div>
            <br />
            <div>Min Temp C/F</div>
            <div>
              {day.day.mintemp_c} / {day.day.mintemp_f}
            </div>

            <div>Max Temp C/F</div>
            <div>
              {day.day.maxtemp_c} / {day.day.maxtemp_f}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    forecast: state.forecast.payload,
  };
};

export default connect(mapStateToProps)(Forecast);
