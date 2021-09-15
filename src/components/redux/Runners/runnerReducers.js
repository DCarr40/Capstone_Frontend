import * as actionTypes from "./runnerConstants";

export const INITIAL_STATE = {
  runner: [],
 
};
export const runnerReducers = ( state = INITIAL_STATE , action) => {
  switch (action.type) {
    case actionTypes.GET_RUNNERBYID_REQUEST:
      return { ...state, runner: [action.payload] };
    case actionTypes.GET_RUNNER_REQUEST:
        return { ...state, runner: [action.payload] };
    case actionTypes.REMOVE_RUNNER_REQUEST:
      return { ...state, runner: [action.payload] };
    default:
      return state;
  }
};
