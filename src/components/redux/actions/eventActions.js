import * as actionTypes from "../constants/eventConstant";

import axios from "axios";

export const getEvent = async () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_EVENT_REQUEST });

    const response = await axios.get("/api/collections/event");

    dispatch({
      type: actionTypes.GET_EVENT_SUCCESS,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_EVENT_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getEventDetails = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_EVENT_DETAILS_REQUEST });

    const { data } = await axios.get(
      `/api/collections/event/6111cab948b0fe59f3eea4f0`
    );

    dispatch({
      type: actionTypes.GET_EVENT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_EVENT_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const removeEventDetails = () => (dispatch) => {
  dispatch({
    type: actionTypes.GET_EVENT_RESET_DETAILS,
  });
};
