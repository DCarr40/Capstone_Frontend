import * as actionTypes from "./rungroupConstants";
import * as api from "../../../api/rungroupApiCalls";

export const createRunGroupAction = (runGroup) => async (dispatch) => {
  try {
    const { data } = await api.createRunGroup(runGroup);
    console.log(data);
    dispatch({
      type: actionTypes.CREATE_RUNGROUP,
      payload: data,
    });
  } catch (error) {
    console.error(error.message);
  }
};

export const addEventToRunGroupAction =
  (runGroupId) => async (dispatch, getState) => {
    dispatch({
      type: actionTypes.ADD_EVENT_TO_RUNGROUP,
      payload: { runGroup: runGroupId },
    });
  };

export const addToRunGroupAction = (runGroupId) => async (dispatch, getState) => {
  dispatch({
    type: actionTypes.ADD_RUNNER_TO_RUNGROUP,
    payload: { runGroup: runGroupId },
  });
};

export const deleteRunGroupAction = (runGroupId) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.DELETE_RUNGROUP,
    payload: { runGroup: runGroupId },
  });
};

export const getAllRunGroupsActions = (runGroupId) => (dispatch, getState) => {
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
