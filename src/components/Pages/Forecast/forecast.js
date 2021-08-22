import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { storeWeatherAction } from "../../Redux/actions/weatherActions";

const Forecast = () => {
  const dispatch = useDispatch();
  useEffect(() => (document.title = "Forecast - Runner's Inertia"), []);

  useEffect(() => dispatch(storeWeatherAction()), []);

  useEffect(() => {
    let renderWeather = localStorage.getItem("dailyWeatherInfo");
    let weatherArray = renderWeather.map((weather) => {
      return (
  
                     <tbody>
                         <tr>
                             <td key={weather}>{weather}</td>
                             <td key={weather}>{weather}</td>
                             <td key={weather}>{weather}</td>
                             <td key={weather}>{weather}</td>
                             <td key={weather}>{weather}</td>
                             <td key={weather}>{weather}</td>
                             <td key={weather}>{weather}</td>
                         </tr>
                     </tbody>
  
     );
  });
      return () => weatherArray

  }, [])




};

export default Forecast;
