import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/navbar";
import EventDetails from "./components/Events/eventDetail";
import CreateEvent from "./components/Events/createEvent";
import { RegisterForm } from "./components/Forms/registerForm";
import Homepage from "./components/Pages/Homepage/homepage";
import Forecast from "./components/Pages/Forecast/forecast";
import Loginpage from "./components/Pages/Login/loginPage";

const App = () => {


  return (
    <Router>
      <NavBar />
      <main>
        <Switch>
          <Route path="/" exact component={Loginpage} />
          <Route path="/register" component={RegisterForm}/>
          <Route path="/homepage" component={Homepage}/>
          <Route path="/forecast" component={Forecast}/>
          <Route path="/event/:id" component={EventDetails} />
          <Route path="/create" component={CreateEvent} />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
