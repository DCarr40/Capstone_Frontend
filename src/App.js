import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/navbar";
import EventDetails from "./components/Pages/Events/eventDetail";
import CreateEvent from "./components/Pages/Events/createEvent";
import { RegisterForm } from "./components/Forms/registerForm";
import Homepage from "./components/Pages/Homepage/homepage";
import Forecast from "./components/Pages/Forecast/forecast";
import Loginpage from "./components/Pages/Login/loginPage";
import EventList2 from "./components/Pages/Events/allEvents";

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
          <Route path="/createEvent" component={CreateEvent} />
          <Route path="/createGroup" component={CreateEvent} />
          <Route path="/allevents" component={EventList2} />

        </Switch>
      </main>
    </Router>
  );
}

export default App;
