import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { storeWeatherAction } from "../../Redux/actions/weatherActions";
import Time from "../../Time/time";

const Forecast = () => {
  const dispatch = useDispatch();
  const history = useHistory("");
  const [dailyInfo,setDailyInfo] = useState({day1:"", day2: "", day3:"", day4: "",day5:"", day6: "", day7: "", day8:""})
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
            <div className="time__container"><Time/></div>
            <div className="current__weather" id= "current__weather">
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

        </div>

      <div>
        <button className="btn" onClick={letsGoBack}>
          <i class="fas fa-arrow-left"> Go Back</i>
        </button>
      </div>
    </div>
  );

}
export default Forecast;
