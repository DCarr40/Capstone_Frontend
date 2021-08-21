import * as actionTypes from "../constants/authConstants";

export const authReducers = (state = [], action) => {
  switch (action.type) {
    case actionTypes.LOGOUT_REQUEST:
        return  [...state,action.payload]
       
    case actionTypes.REGISTER_REQUEST:
      return  [...state,action.payload]

    case actionTypes.LOGOUT_REQUEST:
        return  [...state,action.payload]

    default:
      return state;
  }
};