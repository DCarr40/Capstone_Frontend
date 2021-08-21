import * as actionTypes from "../constants/authConstants";
import * as api from "../../../api/authApiCalls";
import { useHistory } from "react-router-dom";

export const loginAction = (e) => async (dispatch) => {
  try {
    const { data } = await api.loginApiCall(e);
    console.log(data);
    let userInfo = localStorage.setItem("user",data)
    window.location.assign("/homepage")
    dispatch({ type: actionTypes.LOGIN_REQUEST, payload: userInfo });
  } catch (error) {
    alert(error.message);
  }
};

export const registerAction = (e) => async (dispatch) => {
  try {
    const { data } = await api.registerApiCall(e);
    console.log(data);
    dispatch({ type: actionTypes.REGISTER_REQUEST, payload: data });
  } catch (error) {
    alert.error(error.message);
  }
};


export const logoutAction = (e) => async (dispatch) => {
    try {
    const clearUserInfo = localStorage.removeItem("user")
    const history = useHistory();
    history.push("/")
      dispatch({ type: actionTypes.LOGOUT_REQUEST, payload: clearUserInfo });
    } catch (error) {
      console.error(error.message);
    }
  };

// const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(logoutAction(loginData));
//     history.push("/");
// }

