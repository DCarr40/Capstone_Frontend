import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./styles.css";
//This is the template of the individual run group card
//It is a brief summary of the creation of the run group
//It will be placed in the run group list with multiple run groups
const GroupSummary = ({ group }) => {
  const history = useHistory("/groupPage");

  useEffect(() => (document.title = "Create Event - Runner's Inertia"), []);

  const viewGroupPage = () => {
    localStorage.setItem("groupId", group._id);
    localStorage.setItem("currentGroupName", group.title);
    localStorage.setItem("currentGroupType", group.groupType);
    localStorage.setItem("currentGroupRunners", mapRunners());
    history.push("/groupPage");
  };

  const mapRunners = () =>  {
  try {
    return  group.runners.map((runners) => `${runners.username}, `)
  } catch (error) {
    return <p>...Loading</p>, window.location.assign("/homepage");
  }

  }

  const mapEvents = () =>  {
    try {
      return  group.events.map((events) => `${events.title}, `)
    } catch (error) {
      return <p>...Loading</p>, window.location.assign("/homepage");
    }
    }

  return (
    <div className="container">
      <div className="card z-depth-1 event-summary rcorners fadeaway hoverable">
        <div className="card-content ">
          <span className="card-title ">{group.name}</span>
          <p>Group Type -{group.groupType}</p>
          <p className="black-text ">
            {" "}
            Runners: {mapRunners()}
          </p>
          <p className="black-text ">
            {" "}
            Events: {mapEvents()}
          </p>
          <p className="black-text ">Created at {group.createdAt}</p>
          <p>
            <button onClick={viewGroupPage}>View Group</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GroupSummary;
