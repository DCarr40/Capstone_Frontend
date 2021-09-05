import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createRunGroupAction } from "../Redux/RunGroup/rungroupActions";
import "./style.css";

export const CreateRunGroupForm = () => {
  const history = useHistory("/");
  const dispatch = useDispatch();
  const [groupData, setGroupData] = useState({ name: "", groupType: "" });

  useEffect(() => (document.title = "Create Run Group - Runner's Inertia"), []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createRunGroupAction(groupData));
    history.push("/homepage");
  };

  return (
    <div className="container z-depth-2 hoverable">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Create Event</h5>
        <div className="input-field">
          <label htmlFor="title">Group Name</label>
          <input
            type="text"
            id="name"
            value={groupData.name}
            onChange={(e) =>
              setEventData({ ...groupData, name: e.target.value })
            }
          />
        </div>
        <div className="input-field">
          <label htmlFor="title">Event Creator</label>
          <input
            type="text"
            id="groupType"
            value={groupData.groupType}
            onChange={(e) =>
              setEventData({ ...groupData, groupType: e.target.value })
            }
          />
        </div>
        <div className="input-field">
          <button className="btn purple lighten-0 z-depth-2">Submit</button>
        </div>
      </form>
    </div>
  );
};
