import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard";
import NavBar from "./components/NavBar/navbar";
import EventDetails from "./components/Event/eventDetail";
import Signin from "./components/auth/signin";
import Signup from "./components/auth/signup";
import CreateEvent from "./components/Event/createEvent";

function App() {
  return (
    <Router>
      <div>
        <NavBar/>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/event/:id" component={EventDetails} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/create" component={CreateEvent} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
