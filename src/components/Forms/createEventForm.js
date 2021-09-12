import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createEventAction } from "../Redux/Events/eventActions";
import "./style.css";

export const CreateEventForm = () => {
  const history = useHistory("/");
  const dispatch = useDispatch();
  const [eventData, setEventData] = useState({
    title: "",
    details: "",
    creator: "",
    tags: "",
  });

  useEffect(() => (document.title = "Create Event - Runner's Inertia"), []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createEventAction(eventData));
    window.location.assign("homepage");
  };

  return (
    <div className="container z-depth-2 hoverable">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Create Event</h5>
        <div className="input-field">
          <label htmlFor="title">Event Title</label>
          <input
            type="text"
            id="title"
            value={eventData.title}
            onChange={(e) =>
              setEventData({ ...eventData, title: e.target.value })
            }
          />
        </div>
        <div className="input-field">
          <label htmlFor="title">Event Creator</label>
          <input
            type="text"
            id="creator"
            value={eventData.creator}
            onChange={(e) =>
              setEventData({ ...eventData, creator: e.target.value })
            }
          />
        </div>
        <div className="input-field">
          <label htmlFor="title">Event Tags</label>
          <input
            type="text"
            id="tags"
            value={eventData.tags}
            onChange={(e) =>
              setEventData({ ...eventData, tags: e.target.value })
            }
          />
        </div>
        <div className="input-field">
          <label htmlFor="details">Event Details</label>
          <textarea
            type="details"
            id="details"
            className="materialize-textarea"
            value={eventData.details}
            onChange={(e) =>
              setEventData({ ...eventData, details: e.target.value })
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
