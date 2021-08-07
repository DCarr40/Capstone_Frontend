import React from "react";
import Notifications from "./notification";
import EventList from "../event/eventList";
import { connect } from "react-redux";

const Dashboard = (props) => {

  // console.log(props);

const {events} = props;
  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s10 m6">
          <EventList events ={events}/>
        </div>
        <div className="col s10 m5 offset-m1">
          <Notifications />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    events: state.event.events,
  };
};
export default connect(mapStateToProps)(Dashboard);
