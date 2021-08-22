import * as actionTypes from "../constants/runnerConstants";

export const runnerReducers = (runner = [], action) => {
  switch (action.type) {
    case actionTypes.GET_RUNNERBYID_REQUEST:
      return action.payload;
  
    case actionTypes.REMOVE_RUNNER_REQUEST:
    return action.payload;
    
    default:
      return runnerReducers;
  }
};