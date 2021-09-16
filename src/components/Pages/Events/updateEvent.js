import React, { useEffect } from "react";
import { UpdateEventForm } from "../../Forms/updateEventForm";
import Time from "../../Time/time";
//form to create events
const UpdateEvent = (props) => {
  useEffect(() => (document.title = "Update Event - Runner's Inertia"), []);
  const letsGoBack = () => {
    window.location.assign("/eventPage");
  };
  //mem.dev useful website for practicing lines of code like below
  return (
    <div>
      <div className="container">
        <UpdateEventForm />
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
export default UpdateEvent;
