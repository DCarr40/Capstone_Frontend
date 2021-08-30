import * as actionTypes from "./rungroupConstants";

export const addToRunGroup = (runGroupId) => async (dispatch, getState) => {
  /* 
  1.) take in runGroupId
  2.) add it to backend run group
*/
  dispatch({
    type: actionTypes.ADD_TO_RUNGROUP,
    payload: { runGroup: runGroupId },
  });
};

export const removeFromRunGroup = (runGroupId) => (dispatch, getState) => {
  /* 
  1.) take in runGroupId
  2.) remove it from backend run group
*/
  dispatch({
    type: actionTypes.REMOVE_FROM_RUNGROUP,
    payload: { runGroup: runGroupId },
  });
};

export const loadCurrentRunGroup = (runGroupId) => (dispatch, getState) => {
  /* 
1.) take in runGropuId
2.) add it to backend run group
*/
  dispatch({
    type: actionTypes.LOAD_CURRENT_RUNGROUP,
    payload: { runGroup: runGroupId },
  });
};
