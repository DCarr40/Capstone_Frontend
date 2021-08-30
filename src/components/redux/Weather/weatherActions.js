import * as actionTypes from "../Weather/weatherConstants";
import axios from "axios";

export const storeWeatherAction = () => async (dispatch) => {
  try {
    navigator.geolocation.getCurrentPosition(async (success) => {
      let { longitude, latitude } = success.coords;
      console.log(longitude, latitude); //This works too!
      const { data } = await axios
        //Works now! Apparently there is a ~10min wait before you can use API Key. Also it doesn't like API variable for some reason
        .get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&appid=632062b391f82bc75255755dbb7eb685`
        );
      console.log(data.daily);
      let dailyWeatherInfo = localStorage.setItem("weather", data.daily);

      dispatch({ type: actionTypes.GET_WEATHER_REQUEST, loading: true, payload: dailyWeatherInfo});
    });
  } catch (error) {
    console.error(error.message);
  }
};

