import * as actionTypes from "./rungroupConstants";

export const INITIAL_STATE = {
  events: [], //{id, title, details, qty}
  runners: [], //{id, username, qty}
};

const runGroupReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_RUNGROUP:
      return {};
    case actionTypes.REMOVE_FROM_RUNGROUP:
      return {};
    case actionTypes.LOAD_CURRENT_RUNGROUP:
      return {};
      default: return state
  }
};

export default runGroupReducers
