import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { storeWeatherAction } from "../../Redux/Weather/weatherActions";
import Time from "../../Time/time";
import ForecastSummary from "./forecastSummary";

const Forecast = () => {
  const dispatch = useDispatch();
  const history = useHistory("");
  const [data, setData] = useState([]);
  const weather = useSelector((state) => state.weather[1]);
  const [dailyInfo, setDailyInfo] = useState({
    day1: "",
    day2: "",
    day3: "",
    day4: "",
    day5: "",
    day6: "",
    day7: "",
    day8: "",
  });
  useEffect(() => (document.title = "Forecast - Runner's Inertia"), []);

  useEffect(() => dispatch(storeWeatherAction()), []);

  const letsGoBack = () => {
    history.push("/homepage");
  };

  useEffect(() => {
    dispatch(storeWeatherAction());

    if (!weather) {
      setData([<p>...Loading</p>]);
    } else {
      setData(
        weather.map((weather) => (
          <ForecastSummary
            weather={weather}
            key={weather.id}
            temperature={weather.temperature}
          />
        ))
      );
    }
  }, [!weather]);

  return (
    <div>
      <div className="container white-text">
        <div className="current__info">
          <Time />
          <div className="current__weather" id="current__weather">
            <div>
              <ForecastSummary />
            </div>
            <div>
              <p>
                Weather is seen in Redux but I am unsure how to grab an array of
                an array. would it be written as weather[1][1] or weather[1].[1]
                or weather[1[1]]. I tried all those and none of those methods
                seem to work.
              </p>
              <p>Humidity</p>
              <p>95.2%</p>
            </div>
            <div>
              <p>Pressure</p>
              <p>121</p>
            </div>
            <div>
              <p>Wind Speed</p>
              <p>222</p>
            </div>
          </div>
        </div>
        <div className="future__weather">
          <div className="current__temp" id="current__temp">
            <img src="weather__icons" />
            <div className="day">Monday</div>
            <div className="day">Night - 25.6&#176</div>
            <div className="day">Day - 55.6&#176</div>
          </div>

          <div className="more__forecast" id="more_forecast">
            <div className="day">Tuesday</div>
            <img src="weather__icons" />
            <div className="day">Night - 25.6&#176</div>
            <div className="day">Day - 55.6&#176</div>
          </div>

          <div className="more__forecast" id="more_forecast">
            <div className="day">Wednesday</div>
            <img src="weather__icons" />
            <div className="day">Night - 25.6&#176</div>
            <div className="day">Day - 55.6&#176</div>
          </div>

          <div className="more__forecast" id="more_forecast">
            <div className="day">Thursday</div>
            <img src="weather__icons" />
            <div className="day">Night - 25.6&#176</div>
            <div className="day">Day - 55.6&#176</div>
          </div>

          <div className="more__forecast" id="more_forecast">
            <div className="day">Friday</div>
            <img src="weather__icons" />
            <div className="day">Night - 25.6&#176</div>
            <div className="day">Day - 55.6&#176</div>
          </div>

          <div className="more__forecast" id="more_forecast">
            <div className="day">Saturday</div>
            <img src="weather__icons" />
            <div className="day">Night - 25.6&#176</div>
            <div className="day">Day - 55.6&#176</div>
          </div>

          <div className="more__forecast" id="more_forecast">
            <div className="day">Sunday</div>
            <img src="weather__icons" />
            <div className="day">Night - 25.6&#176</div>
            <div className="day">Day - 55.6&#176</div>
          </div>
        </div>
      </div>

      <div>
        <button className="btn" onClick={letsGoBack}>
          <i class="fas fa-arrow-left"> Go Back</i>
        </button>
      </div>
    </div>
  );
};
export default Forecast;
