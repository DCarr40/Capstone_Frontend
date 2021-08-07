import React, { useState } from "react";

const Signup = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(firstname, lastname, email, password);
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
