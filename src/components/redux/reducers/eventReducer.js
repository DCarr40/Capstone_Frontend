import * as actionTypes from "../constants/eventConstant";

export const getEventReducer = (state = { event: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_EVENT_REQUEST:
      return {
        loading: true,
        event: [],
      };
    case actionTypes.GET_EVENT_SUCCESS:
      return {
        loading: true,
        event: action.payload,
      };
    case actionTypes.GET_EVENT_FAILURE:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

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


