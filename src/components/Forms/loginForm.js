import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import * as api from "../../api/authApiCalls";
import { loginAction } from "../Redux/Auth/authActions";
import { runnerReducers } from "../Redux/Runners/runnerReducers";
import "./style.css";

export const LoginForm = () => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const history = useHistory("");
  const reset = localStorage.removeItem("userInfo");
  useEffect(() => (document.title = "Log In - Runner's Inertia"), []);
  useEffect(() => reset, []);

  const handleSubmit = async (e) => {
      e.preventDefault();
    dispatch(loginAction(loginData));
  }

  return (
    <div className="form-box">
      <form id="myform" onSubmit={handleSubmit}>
        <h3 className="white-text">Login</h3>
        <div className="user-box">
          <input
            type="text"
            placeholder="Email"
            id="email"
            value={loginData.email}
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            value={loginData.password}
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
          />
          <button type="submit">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Submit
          </button>
          <a href="/register" className="btn hover">
            Not Registered Yet? Click Here
          </a>
        </div>
      </form>
    </div>
  );
};
