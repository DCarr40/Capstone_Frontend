import * as actionTypes from "../constants/eventDetailsConstant";

export const getEventDetailsReducer = (state = { event: [] }, action) => {
switch (action.type) {
    case actionTypes.GET_EVENT_DETAILS_REQUEST:
      return {
        loading: true,
      };
    case actionTypes.GET_EVENT_DETAILS_SUCCESS:
      return {
        loading: false,
        event: action.payload,
      };
    case actionTypes.GET_EVENT_DETAILS_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    case actionTypes.GET_EVENT_RESET_DETAILS:
      return {
        event: {},
      };
    default:
      return state;
  }
};