import * as actionTypes from "../constants/weatherConstants";
import * as api from "../../../api/weatherApiCalls";

export const getEvent = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCollection();
    console.log(data)
    dispatch({ type: actionTypes.GET_WEATHER_REQUEST, payload: data });
  } catch (error) {
    console.error(error.message);
  }
};


