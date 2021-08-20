import * as actionTypes from "../constants/eventConstant";
import * as api from "../../../api/eventApiCalls";
import axios from "axios";

export const getEvent = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCollection();
    console.log(data)
    dispatch({ type: actionTypes.GET_EVENT_REQUEST, payload: data });
  } catch (error) {
    console.error(error.message);
  }
};

export const createEventAction = (event) => async (dispatch) => {
  try {
    const { data } = await api.createEvent(event);
    console.log(data)
    dispatch({ type: actionTypes.CREATE_EVENT_REQUEST, payload: data });
  } catch (error) {
    console.error(error.message);
  }
};
