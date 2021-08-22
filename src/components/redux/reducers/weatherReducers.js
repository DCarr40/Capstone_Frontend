import * as actionTypes from "../constants/weatherConstants";

export const weatherReducers = (weather = [], action) => {
  switch (action.type) {
    case actionTypes.GET_WEATHER_REQUEST:
      return  [...weather,action.payload]
  
    default:
      return weatherReducers;
  }
};
