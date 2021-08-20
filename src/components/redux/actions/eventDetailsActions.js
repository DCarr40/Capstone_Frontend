import * as actionTypes from "../constants/eventDetailsConstant";
import axios from "axios";


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
  