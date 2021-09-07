import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { weatherReducers } from "../../Redux/Weather/weatherReducers";

const ForecastSummary = (weather) => {
  const dispatch = useDispatch();
  const history = useHistory("");
  const weatherDataArray = useSelector((state) => state.weatherReducers);
  const [weatherData, setWeatherData] = useState({
    day: "",
    temperature: 0,
    humidity: 0,
  });

  return (
    <div className="container">
      <div className="card z-depth-1 event-summary rcorners fadeaway hoverable">
        <div className="card-content ">
          <span className="card-title ">{weather.temp}</span>
          <p>Temperature -{weather.temp}</p>
          <p className="black-text "> Temp2 {weather.temp}</p>
        </div>
      </div>
    </div>
  );
};

export default ForecastSummary;
