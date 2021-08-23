import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { storeWeatherAction } from "../../Redux/actions/weatherActions";
import Time from "../../Time/time";

const Forecast = () => {
  const dispatch = useDispatch();
  const history = useHistory("");
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

  //   useEffect(() => {
  //       setDay1()
  //       return () => {
  //           cleanup
  //       }
  //   }, [input])

  //   useEffect(() => {
  // let renderWeather = localStorage.getItem("dailyWeatherInfo");
  //     let weatherArray = renderWeather.map((weather) => {
  //       return (

  //       );
  //     });
  //     return () => weatherArray;
  //   }, []);
  // }

  const letsGoBack = () => {
    history.push("/homepage");
  };
  return (
    <div>
      <div className="container white-text">
        <div className="current__info">
          <div className="time__container">
            <Time />
          </div>
          <div className="current__weather" id="current__weather">
            <div>
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
