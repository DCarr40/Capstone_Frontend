import * as actionTypes from "../Auth/authConstants";
import * as api from "../../../api/authApiCalls";
import { useHistory } from "react-router-dom";

export const loginAction = (e) => async (dispatch) => {
  try {
        
    const { data } = await api.loginApiCall(e);
    console.log(data);
    localStorage.setItem("userInfo", data);
    window.location.assign("/homepage");
    alert("Prepare to Have your mind blown");
  } catch (error) {
    alert("Email or Password is Incorrect. Please Try Again");
  }
};

export const registerAction = (e) => async (dispatch) => {
  try {
    const { data } = await api.registerApiCall(e);
    console.log(data);
    dispatch({ type: actionTypes.REGISTER_REQUEST, payload: data });
  } catch (error) {
    alert(error.message);
  }
};

export const logoutAction = (e) => async (dispatch) => {
  try {
    const clearUserInfo = localStorage.removeItem("user");
    const history = useHistory();
    history.push("/");
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
