import * as actionTypes from "./rungroupConstants";

export const INITIAL_STATE = {
  events: [], //{id, title, details, qty}
  runners: [], //{id, username, qty}
};

const runGroupReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.CREATE_RUNGROUP:
      return {};
    case actionTypes.ADD_EVENT_TO_RUNGROUP:
      return {};
    case actionTypes.ADD_RUNNER_TO_RUNGROUP:
      return {};
    case actionTypes.DELETE_RUNGROUP:
      return {};
    case actionTypes.GET_RUNGROUP_BY_ID:
      return {};
    case actionTypes.GET_ALL_RUNGROUPS:
      return {};
    default:
      return state;
  }
};

export default runGroupReducers;
