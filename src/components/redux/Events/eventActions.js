import * as actionTypes from "./eventConstants";
import * as api from "../../../api/eventApiCalls";

export const getEvent = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCollection();
    console.log(data);
    dispatch({ type: actionTypes.GET_EVENT_REQUEST, payload: data });
  } catch (error) {
    console.error(error.message);
  }
};

export const createEventAction = (event) => async (dispatch) => {
  try {
    const { data } = await api.createEvent(event);
    console.log(data);
    dispatch({ type: actionTypes.CREATE_EVENT_REQUEST, payload: data });
  } catch (error) {
    console.error(error.message);
  }
};

export const removeEventAction = (event) => async (dispatch) => {
  try {
    const data = localStorage.removeItem("event");
    dispatch({ type: actionTypes.REMOVE_EVENT_REQUEST, payload: data });
  } catch (error) {
    console.error(error.message);
  }
};

export const getAllEventsAction = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCollection();
    dispatch({ type: actionTypes.GET_ALL_EVENTS_REQUEST, payload: data });
  } catch (error) {
    console.error(error.message);
  }
};

