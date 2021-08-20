import * as actionTypes from "../constants/eventConstant";

export const getEventReducer = (event = [], action) => {
  switch (action.type) {
    case actionTypes.GET_EVENT_REQUEST:
      return action.payload;
  
      case actionTypes.CREATE_EVENT_REQUEST:
        return  [...event,action.payload]
       
    case actionTypes.GET_EVENT_SUCCESS:
      return {
        loading: true,
        action: action.payload,
      };
    case actionTypes.GET_EVENT_FAILURE:
      return {
        loading: false,
        action: action.payload,
      };
    default:
      return event;
  }
};
