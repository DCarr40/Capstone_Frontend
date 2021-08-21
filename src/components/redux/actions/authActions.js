import * as actionTypes from "../constants/authConstants";
import * as api from "../../../api/authApiCalls";

export const loginAction = (e) => async (dispatch) => {
  try {
    const { data } = await api.loginApiCall(e);
    console.log(data);
    dispatch({ type: actionTypes.LOGIN_REQUEST, payload: data });
  } catch (error) {
    console.error(error.message);
  }
};

export const registerAction = (e) => async (dispatch) => {
  try {
    const { data } = await api.registerApiCall(e);
    console.log(data);
    dispatch({ type: actionTypes.REGISTER_REQUEST, payload: data });
  } catch (error) {
    console.error(error.message);
  }
};