import * as actionTypes from "./runnerConstants";

export const runnerReducers = ( runner= [] , action) => {
  switch (action.type) {
    case actionTypes.GET_RUNNERBYID_REQUEST:
      const runnerStored = action.payload;
      return [...runner, runnerStored]

    case actionTypes.REMOVE_RUNNER_REQUEST:
      return [...runner, action.payload];

    default:
      return runnerReducers;
  }
};
