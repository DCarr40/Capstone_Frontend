import * as actionTypes from "../Weather/weatherConstants";

const weatherReducers = (weather = [], action) => {
  switch (action.type) {
    case actionTypes.GET_WEATHER_REQUEST:
      return [weather, action.payload];

    default:
      return weatherReducers;
  }
};

export default weatherReducers;
