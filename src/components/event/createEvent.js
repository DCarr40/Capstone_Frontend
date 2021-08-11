import React, { useState, useEffect} from "react";
import { connect } from "react-redux";
import { createEvents } from "../../store/actions/eventActions";
import axios from "axios";
import { useHistory } from "react-router-dom";

//form to create events
const CreateEvent = (props) => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const history = useHistory("/");

  useEffect(() => {
    document.title = "Create Event - Runner's Inertia";
  }, []);

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log(title, details);
  //   //I may have messed up with state at this point
  //   props.createEvent({ title, details });
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      let eventInfo = {
        title: title,
        details: details,
      };

      axios
        .post(`http://localhost:5000/api/collections/event`, eventInfo)
        .then(history.push("/"));
    } catch (error) {
      console.log(error);
    }
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
    createEvent: (event) => dispatch(createEvents(event)),
  };
};

export default connect(null, mapDispatchToProps)(CreateEvent);
