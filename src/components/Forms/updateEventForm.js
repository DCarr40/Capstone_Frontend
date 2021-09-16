import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { updateEventAction } from "../Redux/Events/eventActions";
import "./style.css";

export const UpdateEventForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const eventId = localStorage.getItem("eventId");
  const [eventData, setEventData] = useState({
    title: "",
    details: "",
    creator: "",
    tags: "",
  });

  useEffect(() => (document.title = "Update Event - Runner's Inertia"), []);

  const  handleSubmit = async (e) => {
    e.preventDefault();
    // dispatch(updateEventAction({header:eventId ,body:eventData}));
   let res = await axios.put(`http://localhost:5000/api/collections/event/${eventId}`, {...eventData}); 
    console.log(res)
    window.location.assign("/homepage");
  };

  return (
    <div className="container z-depth-2 hoverable">
      <form onSubmit={handleSubmit} className="white">
        <h5 className="grey-text text-darken-3">Update Event</h5>
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
          <label htmlFor="details">Event Details</label>
          <textarea
            type="text"
            id="details"
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
