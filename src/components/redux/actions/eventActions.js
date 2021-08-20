import * as actionTypes from "../constants/eventConstant";
import * as api from "../../../api/eventApiCalls";
import axios from "axios";

<<<<<<< HEAD
export const getEvent =  () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_EVENT_REQUEST });

    const response = await axios.get(`http://localhost:5000/api/collections/event/`);
    

    return dispatch({
      type: actionTypes.GET_EVENT_SUCCESS,
      payload: response,
    });
=======
export const getEvent = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCollection();
    console.log(data)
    dispatch({ type: actionTypes.GET_EVENT_REQUEST, payload: data });
>>>>>>> a6ef52e2e62df5d589a59156fc446791221f3b9e
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
