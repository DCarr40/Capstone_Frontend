import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { createEventAction } from "../Redux/actions/eventActions";

//form to create events
const CreateEvent = (props) => {
  const [eventInfo, setEventInfo] = useState({
    creator: "",
    title: "",
    details: "",
    tags: "",
  });
  const dispatch = useDispatch();
  const history = useHistory("/");

  useEffect(() => {
    document.title = "Create Event - Runner's Inertia";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createEventAction(eventInfo));
    history.push("/");

    //mem.dev useful website for practicing lines of code like below
    return (
      <div className="container z-depth-2 hoverable">
        <form onSubmit={handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Create Event</h5>
          <div className="input-field">
            <label htmlFor="title">Event Title</label>
            <input
              type="text"
              id="title"
              value={eventInfo.title}
              onChange={(e) =>
                setEventInfo({ ...eventInfo, title: e.target.value })
              }
            />
          </div>
          <div className="input-field">
            <label htmlFor="title">Event Creator</label>
            <input
              //...  just here to copy 3 dots because of tabnine autocomplete
              type="text"
              id="creator"
              value={eventInfo.creator}
              onChange={(e) =>
                setEventInfo({ ...eventInfo, creator: e.target.value })
              }
            />
          </div>
          <div className="input-field">
            <label htmlFor="title">Event Tags</label>
            <input
              //...  just here to copy 3 dots because of tabnine autocomplete
              type="text"
              id="tags"
              value={eventInfo.tags}
              onChange={(e) =>
                setEventInfo({ ...eventInfo, tags: e.target.value })
              }
            />
          </div>
          <div className="input-field">
            <label htmlFor="details">Event Details</label>
            <textarea
              type="details"
              id="details"
              className="materialize-textarea"
              value={eventInfo.details}
              onChange={(e) =>
                setEventInfo({ ...eventInfo, details: e.target.value })
              }
            ></textarea>
          </div>
          <div className="input-field">
            <button className="btn purple lighten-0 z-depth-2">Submit</button>
          </div>
        </form>
      </div>
    );
  };
};
export default CreateEvent;
