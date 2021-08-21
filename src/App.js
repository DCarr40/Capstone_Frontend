import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Pages/Login/loginPage";
import NavBar from "./components/NavBar/navbar";
import EventDetails from "./components/Events/eventDetail";
import Signin from "./components/auth/signin";
import Signup from "./components/auth/signup";
import CreateEvent from "./components/Events/createEvent";
import { RegisterForm } from "./components/Forms/registerForm";
import Homepage from "./components/Pages/Homepage/homepage";

function App() {
  return (
    <Router>
      <NavBar />
      <main>
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/event/:id" component={EventDetails} />
          <Route path="/signin" component={Signin} />
          <Route path="/signup" component={Signup} />
          <Route path="/create" component={CreateEvent} />
          <Route path="/register" component={RegisterForm}/>
          <Route path="/homepage" component={Homepage}/>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
