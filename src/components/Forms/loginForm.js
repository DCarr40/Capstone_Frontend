import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { loginAction } from '../Redux/actions/authActions';
import { storeRunnerAction } from '../Redux/actions/runnerActions';
import "./style.css";

export const LoginForm = () => {
    const [loginData, setLoginData] = useState({email: '', password: ''});
    const dispatch = useDispatch();

    useEffect(() => {
        document.title = "Log In - Runner's Inertia";
      }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(storeRunnerAction(loginData.email))
        dispatch(loginAction(loginData));
    }

    return(
        <div className="form-box" >
            <form id="myform"  onSubmit={handleSubmit}>
                <h3 className="white-text">Login</h3>
                <div className="user-box">
                    <input type="text" placeholder="Email"  id="email" value={loginData.email} onChange={(e) => setLoginData({...loginData, email: e.target.value })}/> 
                    <input type="password" placeholder="Password" id="password" value={loginData.password} onChange={(e) => setLoginData({...loginData, password: e.target.value })}/>
                    <button type="submit" >
                    <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    Submit</button>
                    <a href= "/register" className="btn hover">Not Registered Yet? Click Here</a>
                </div>
                
            </form>
        </div>
    )

};





