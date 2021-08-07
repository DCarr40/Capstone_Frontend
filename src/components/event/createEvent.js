import React, { useState } from "react";
import { connect } from "react-redux";
import { createEvent } from "../../store/actions/eventActions";

//form to create events
const CreateEvent = (props) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(title, details);
    props.createEvent(state);
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
            onChange={({ target }) => setTitle(target.value)}
          />
        </div>
        <div className="input-field">
          <label htmlFor="details">Event Details</label>
          <textarea
            type="details"
            id="details"
            className="materialize-textarea"
            onChange={({ target }) => setDetails(target.value)}
          ></textarea>
        </div>
        <div className="input-field">
          <button className="btn purple lighten-0 z-depth-2">Create</button>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    createEvent: (event) => dispatch(createEvent(event)),
  };
};

export default connect(null, mapDispatchToProps)(CreateEvent);
