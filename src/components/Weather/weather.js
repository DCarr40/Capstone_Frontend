import React, { useState, useEffect } from "react";
import API_KEY from "../../config/weather.json";
import axios from "axios";

const Weather = () => {
  const currentWeatherEL = document.getElementById("currentWeather");
  const [timeZoneEl, setTimeZoneEl] = useState("");
  const forecastEl = document.getElementById("forecast");
  const countryEl = document.getElementById("country");
  const currentTempEl = document.getElementById("currentTemp");

  useEffect(() => {
    getWeather();
    return () => {};
  }, []);

  const getWeather = () => {
    navigator.geolocation.getCurrentPosition(async (success) => {
      // console.log(success)  This works
      let { longitude, latitude } = success.coords;
      console.log(longitude, latitude); //This works too!

    //   await axios
    //     .get(
    //       //Works now! Apparently there is a ~10min wait before you can use API Key. Also it doesn't like API variable for some reason
    //       `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&appid=632062b391f82bc75255755dbb7eb685`
    //     )
    //     .then((res) => {
    //       console.log(res.data);
    //       setTimeZoneEl(res.data.timezone); 
    //     .catch((err) => {
    //       console.log(err);
    //     });
    });
  };
  console.log(timeZoneEl);

  return (
    <div>
      <div className="currentWeather">
        <div className="timeZone">{timeZoneEl}</div>
        <div className="country"></div>
        <div className="forecast"></div>
      </div>
    </div>
  );
};

export default Weather;
