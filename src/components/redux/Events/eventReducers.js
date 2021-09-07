import * as actionTypes from "./eventConstants";

export const INITIAL_STATE = {
  events: [],
  filters: "",
};

export const eventReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.GET_EVENT_REQUEST:
      return { ...state, events: [action.payload] };
    /* <===========================================>*/
    case actionTypes.CREATE_EVENT_REQUEST:
      return { ...state, events: action.payload };
    /* <===========================================>*/
    case actionTypes.GET_ALL_EVENTS_REQUEST:
      return { ...state, events: [action.payload] };
    /* <===========================================>*/
    default:
      return state;
  }
};
