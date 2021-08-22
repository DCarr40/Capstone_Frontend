import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { CreateEventForm } from "../../Forms/createEventForm";
import Time from "../../Time/time";

//form to create events
const CreateEvent = (props) => {
  useEffect(() => (document.title = "Create Event - Runner's Inertia"), []);
  const history = useHistory("");
  const letsGoBack = () => {
    history.push("/homepage");
  };
  //mem.dev useful website for practicing lines of code like below
  return (
    <div>
      <div className="container">
        <CreateEventForm />
      </div>
      <br></br>
      <div>
        <button className="btn" onClick={letsGoBack}>
          <i class="fas fa-arrow-left"> Go Back</i>
        </button>
      </div>
      <div className="container">
        <Time />
      </div>
    </div>
  );
};
export default CreateEvent;
