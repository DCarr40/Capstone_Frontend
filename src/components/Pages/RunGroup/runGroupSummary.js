import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./styles.css";
//This is the template of the individual run group card
//It is a brief summary of the creation of the run group
//It will be placed in the run group list with multiple run groups
const GroupSummary = ({ group }) => {
  const dispatch = useDispatch();
  const history = useHistory("/groupPage");
  const groupsDataArray = useSelector((state) => state.runGroupReducers);
  const [groupData, setGroupData] = useState({
    name: "",
    groupType: "",
    events: 0,
    runners: 0,
  });

  useEffect(() => (document.title = "Create Event - Runner's Inertia"), []);

  const viewGroupPage = () => history.push("/groupPage");

  return (
    <div className="container">
      <div className="card z-depth-1 event-summary rcorners fadeaway hoverable">
        <div className="card-content ">
          <span className="card-title ">{group.name}</span>
          <p>Group Type -{group.groupType}</p>
          <p className="black-text "> # of Runners {group.runners.length}</p>
          <p className="black-text "> # of Events {group.events.length}</p>
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
