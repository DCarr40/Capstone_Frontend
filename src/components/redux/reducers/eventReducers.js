import * as actionTypes from "../constants/eventConstants";

export const eventReducers = (event = [], action) => {
  switch (action.type) {
    case actionTypes.GET_EVENT_REQUEST:
      return [...event, action.payload];

    case actionTypes.CREATE_EVENT_REQUEST:
      return [...event, action.payload];

    case actionTypes.GET_EVENT_SUCCESS:
      return {
        loading: true,
        action: [...event, action.payload],
      };
    case actionTypes.GET_EVENT_FAILURE:
      return {
        loading: false,
        action: [...event, action.payload],
      };
    case actionTypes.GET_ALL_EVENTS_REQUEST:
      return [...event, action.payload];
    default:
      return event;
  }
};
