
import axios from "axios";

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

const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&appid=632062b391f82bc75255755dbb7eb685`

}

export const fetchCollection = () => axios.get(url);
export const createEvent = (newEvent) => axios.post(url, newEvent);


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