import * as actionTypes from "./rungroupConstants";

export const INITIAL_STATE = {
  groups: [],
  filters: "",
};

export const runGroupReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.CREATE_RUNGROUP:
      return { ...state, groups: [action.payload] };
    case actionTypes.ADD_EVENT_TO_RUNGROUP:
      return { ...state, groups: [action.payload] };
    case actionTypes.ADD_RUNNER_TO_RUNGROUP:
      return { ...state, groups: [action.payload] };
    case actionTypes.DELETE_RUNGROUP:
      return { ...state, groups: [action.payload] };
    case actionTypes.GET_RUNGROUP_BY_ID:
      return { ...state, groups: [action.payload] };
    case actionTypes.GET_ALL_RUNGROUPS:
      return { ...state, groups: [action.payload] };
    default:
      return state;
  }
};
