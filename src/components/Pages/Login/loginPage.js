import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {LoginForm as Login} from "../../Forms/loginForm";
import { logoutAction } from "../../Redux/actions/authActions";

const Dashboard = () => {

  const [userHasLoggedIn, setUserHasLoggedIn] = useState(false);
  const user = localStorage.getItem("user");
  const history = useHistory("/homepage")
  const dispatch = useDispatch();
  useEffect(() => dispatch(logoutAction) , [])

  useEffect(() => document.title = "Log In - Runner's Inertia", [])

  useEffect(() => {if (user) {setUserHasLoggedIn(true)}}, [userHasLoggedIn])

  return (
    <div className="dashboard rcorners container">
        <Login/>
    </div>
  );
};

//connect is a function of redux
//mapStateToProps must be a function as well
//yup it was and apparently there are 4 others that connect can take in
//So mapStateToProps updates the state whenever the state is changed in the store
//I used this link to help understand it https://react-redux.js.org/api/connect

export default Dashboard;
