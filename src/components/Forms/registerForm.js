import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { registerAction } from '../Redux/actions/authActions';
import "./style.css";

export const RegisterForm = () => {
    const [registerData, setRegisterData] = useState({firstname: '', lastname: '', username: '', email: '', password: ''});
    const history = useHistory("/");
    const dispatch = useDispatch();

    useEffect(() => {
        document.title = "Register - Runner's Inertia";
      }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerAction(registerData));
        history.push("/");
    }

    return(
        <div className="form-box" >
            <form  onSubmit={handleSubmit}>
            <h3 className="white-text">Register</h3>
            <div className="user-box">
                    <input type="text" placeholder="First Name" id="firstname" value={registerData.firstname} onChange={(e) => setRegisterData({...registerData, firstname: e.target.value })}/> 
                    <input type="text" placeholder="Last Name" id="lastname" value={registerData.lastname} onChange={(e) => setRegisterData({...registerData, lastname: e.target.value })}/> 
                    <input type="text" placeholder="Username"id="username" value={registerData.username} onChange={(e) => setRegisterData({...registerData, username: e.target.value })}/> 
                    <input type="text" placeholder="Email"id="email" value={registerData.email} onChange={(e) => setRegisterData({...registerData, email: e.target.value })}/> 
                    <input type="password" placeholder="Password"id="password" value={registerData.password} onChange={(e) => setRegisterData({...registerData, password: e.target.value })}/> 
                    <button type="submit" >
                    <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    Submit</button>
                    <a href= "/" className="btn hover">Already Registered? Click Here</a>
                </div>
            </form>
        </div>
    )

};