import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { LoginForm as Login } from "../../Forms/loginForm";
import { logoutAction } from "../../Redux/Auth/authActions";

const Loginpage = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(logoutAction()), []);

  useEffect(() => (document.title = "Log In - Runner's Inertia"), []);

  return (
    <div className="loginpage rcorners container">
      <Login />
    </div>
  );
};

//connect is a function of redux
//mapStateToProps must be a function as well
//yup it was and apparently there are 4 others that connect can take in
//So mapStateToProps updates the state whenever the state is changed in the store
//I used this link to help understand it https://react-redux.js.org/api/connect

export default Loginpage;
