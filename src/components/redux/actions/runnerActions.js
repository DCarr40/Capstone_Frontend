import * as actionTypes from "../constants/runnerConstants";
import * as api from "../../../api/runnerApiCalls";

export const storeRunnerAction = (el) => async (dispatch) => {
  try {
    const { data } = await api.getRunnerById();
    console.log(data);
    let runner = data.filter(function (el) {return runner.email === el.email;});
    localStorage.setItem("runner", JSON.stringify(runner));
    console.log(runner);

    dispatch({type: actionTypes.GET_RUNNERBYID_REQUEST,payload: runner});
  } catch (error) {
    console.error(error.message);
  }}

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

