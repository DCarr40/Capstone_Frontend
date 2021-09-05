import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./styles.css";
//This is the template of the individual run group card
//It is a brief summary of the creation of the run group
//It will be placed in the run group list with multiple run groups
const GroupSummary = ({ group }) => {
  const dispatch = useDispatch();
  const groupsDataArray = useSelector((state) => state.runGroupReducers);
  const [groupData, setGroupData] = useState({ name: "", groupType: "" });

  useEffect(() => (document.title = "Create Event - Runner's Inertia"), []);

  const handleSubmit = (e) => {
    e.preventDefault();
    groupsDataArray.push(groupData.id);
  };

  const addEventToRunner = () => {};

  return (
    <div className="container">
      <div className="card z-depth-1 event-summary rcorners fadeaway hoverable">
        <div className="card-content ">
          <span className="card-title ">{group.name}</span>
          <p>Posted by -{group.groupType}</p>
          <p className="black-text ">Created at {group.createdAt}</p>
          <p>
            <button onClick={addEventToRunner}>Add Event</button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GroupSummary;
