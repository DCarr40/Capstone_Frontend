import * as actionTypes from "./rungroupConstants";

export const createRunGroup = (runGroupId) => async (dispatch, getState) => {
  dispatch({
    type: actionTypes.ADD_TO_RUNGROUP,
    payload: { runGroup: runGroupId },
  });
};

export const addEventToRunGroup = (runGroupId) => async (dispatch, getState) => {
  dispatch({
    type: actionTypes.ADD_EVENT_TO_RUNGROUP,
    payload: { runGroup: runGroupId },
  });
};

export const addToRunGroup = (runGroupId) => async (dispatch, getState) => {
  dispatch({
    type: actionTypes.ADD_RUNNER_TO_RUNGROUP,
    payload: { runGroup: runGroupId },
  });
};


export const deleteRunGroup = (runGroupId) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.DELETE_RUNGROUP,
    payload: { runGroup: runGroupId },
  });
};

export const getAllRunGroups = (runGroupId) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.GET_ALL_RUNGROUPS,
    payload: { runGroup: runGroupId },
  });
};

export const getRunGroupById = (runGroupId) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.GET_RUNGROUP_BY_ID,
    payload: { runGroup: runGroupId },
  });
};
