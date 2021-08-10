import React from "react";
import Notifications from "./notification";
import EventList from "../Event/eventList";
import { connect } from "react-redux";
import Time from "../Time/time";

const Dashboard = (props) => {
  // console.log(props);
  //So anything imported into a functional component has its props flowing through it.
  // Adding props to Dashboard allowed me to console log it and see the events
  //Then I just made them dynamically defined on the event list
  const { events } = props;
  return (
    <div className="dashboard container">
      <div className="row">
      {/* <div className="col s10 m6">
          <Time/>
        </div> */}
        <div className="col s10 m6">
          <div><Time/></div>
          <EventList events={events} />
        </div>
        <div className="col s10 m5 offset-m1">
          <Notifications />
        </div>
      </div>
    </div>
  );
};

//connect is a function of redux
//mapStateToProps must be a function as well
//yup it was and apparently there are 4 others that connect can take in
//So mapStateToProps updates the state whenever the state is changed in the store
//I used this link to help understand it https://react-redux.js.org/api/connect
const mapStateToProps = (state) => {
  return {
    events: state.event.events,
  };
};
export default connect(mapStateToProps)(Dashboard);
