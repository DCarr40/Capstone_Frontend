import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

const Signup = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory("/");

  useEffect(() => {
    document.title = "Sign Up - Runner's Inertia";
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(firstname, lastname, email, password);
    try {
      let signupInfo = {
        firstname: firstname,
        lastname: lastname,
        username: username,
        email: email,
        password: password,
      };

      axios
        .post(`http://localhost:5000/api/collections/runner`, signupInfo)
        .then(history.push("/signin"));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container z-depth-2">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Sign Up</h5>
        <div className="input-field">
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            onChange={({ target }) => setFirstName(target.value)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            onChange={({ target }) => setLastName(target.value)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            onChange={({ target }) => setUserName(target.value)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            onChange={({ target }) => setEmail(target.value)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1 z-depth-2">Sign Up</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
