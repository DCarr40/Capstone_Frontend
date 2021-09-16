import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { weatherReducers } from "../../Redux/Weather/weatherReducers";

const ForecastSummary = (weather) => {
  const dispatch = useDispatch();
  const history = useHistory("");
  const weatherDataArray = useSelector((state) => state.weather[1]);
  const [weatherData, setWeatherData] = useState({
    day: "",
    temperature: 0,
    humidity: 0,
  });

  // const mapRunners = () =>  {
  //   try {
  //     return  event.runners.map((runners) => `${runners.username}, `)
  //   } catch (error) {
  //     return <p>...Loading</p>, window.location.assign("/homepage");
  //   }
  
  //   }

  const mapHumidity = () => {
    try {
      console.log(weatherDataArray.map((humidity) => `${humidity}`))
      return  weatherDataArray.map((humidity) => `${humidity}`)
    } catch (error) {
      return <p>...Loading</p>, window.location.assign("/homepage");
    }  }

  return (
    <div className="container ">
      <div className="card z-depth-1 event-summary rcorners fadeaway hoverable">
        <div className="card-content ">
          <span className="card-title ">{weather.temp}</span>
          <h2>The Weather</h2>
        </div>
      </div>
    </div>
  );
};

export default ForecastSummary;
