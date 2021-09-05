import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/navbar";
import CreateEvent from "./components/Pages/Events/createEvent";
import { RegisterForm } from "./components/Forms/registerForm";
import Homepage from "./components/Pages/Homepage/homepage";
import Forecast from "./components/Pages/Forecast/forecast";
import Loginpage from "./components/Pages/Login/loginPage";
import EventList2 from "./components/Pages/Events/allEvents";
import { CreateRunGroupForm } from "./components/Forms/createRunGroupForm";
import CreateRunGroup from "./components/Pages/RunGroup/createRunGroup";

const App = () => {
  return (
    <Router>
      <NavBar />
      <main>
        <Switch>
          <Route path="/" exact component={Loginpage} />
          <Route path="/register" exact component={RegisterForm} />
          <Route path="/homepage" exact component={Homepage} />
          <Route path="/forecast" exact component={Forecast} />
          <Route path="/createEvent" exact component={CreateEvent} />
          <Route path="/createGroup" exact component={CreateRunGroup} />
          <Route path="/allevents" exact component={EventList2} />
        </Switch>
      </main>
    </Router>
  );
};

export default App;
