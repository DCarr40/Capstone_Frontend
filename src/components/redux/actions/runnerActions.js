import * as actionTypes from "../constants/runnerConstants";
import * as api from "../../../api/runnerApiCalls";

export const storeRunnerAction = () => async (dispatch) => {
  try {
    const { data } = await api.getRunnerById2();
    console.log(data);
    dispatch({ type: actionTypes.GET_RUNNERBYID_REQUEST, loading: true, payload: data });
  } catch (error) {
    console.error(error.message);
  }
};

export const removeRunnerFromStorageAction = () => async (dispatch) => {
  try {
    const clearRunnerInfo = localStorage.removeItem("runner");
    dispatch({
      type: actionTypes.REMOVE_RUNNER_REQUEST,
      payload: clearRunnerInfo,
    });
  } catch (error) {
    console.error(error.message);
  }
};
