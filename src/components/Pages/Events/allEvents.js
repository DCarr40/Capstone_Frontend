import React, { useState, useEffect } from "react";
import EventSummary from "./eventSummary";
import { useSelector, useDispatch } from "react-redux";
import { getAllEventsAction } from "../../Redux/Events/eventActions";
import { useHistory } from "react-router-dom";

const EventList2 = () => {
  const dispatch = useDispatch();
  const history = useHistory("");
  const events = useSelector((state) => state.event.events[0]);
  const [data, setData] = useState([]);
  useEffect(() => {
    dispatch(getAllEventsAction());

    if (!events) {
      setData([<p>...Loading</p>]);
    } else {
      setData(
        events.map((events) => (
          <EventSummary
            event={events}
            key={events.id}
            title={events.title}
            details={events.details}
            creator={events.creator}
          />
        ))
      );
    }
  }, [events]);

  const letsGoBack = () => history.push("/homepage");

  return (
    <div className="event-list section">
      <div>
        <button className="btn" onClick={letsGoBack}>
          <i className="fas fa-arrow-left"> Go Back</i>
        </button>
      </div>
      <h2 className="white-text ">Event List</h2>
      <div>{data}</div>
    </div>
  );
};

export default EventList2;

// import React, { useState, useEffect } from "react";
// import EventSummary from "./eventSummary";
// import { useSelector, useDispatch, shallowEqual } from "react-redux";
// import { getAllEventsAction } from "../../Redux/Events/eventActions";
// import { useHistory } from "react-router-dom";

// const EventList2 = () => {
//   const dispatch = useDispatch();
//   const history = useHistory("");
//   const events = useSelector((state) => state.event.events[0]);
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     dispatch(getAllEventsAction());

//     if (!events) {
//       setData([<p>...Loading</p>]);
//     } else {
//       setData(
//         events.map((events) => (
//           <div key={events.id}>
//             <h2>{events.title}</h2>
//             <p>{events.details}</p>
//           </div>
//         ))
//       );
//     }
//   }, [events]);

//   const letsGoBack = () => history.push("/homepage");

//   return (
//     <div className="event-list section">
//       <div>
//         <button onClick={letsGoBack}>Go Back</button>
//       </div>
//       <h2 className="white-text ">Event List</h2>
//       <div>
//         {data}
//         {/* && means "then" in this case. If events does exist then map */}
//         {/* {eventsData &&
//           eventsData.map((event) => {
//             return <EventSummary event={event} key={event.id} />;
//           })} */}
//       </div>
//     </div>
//   );
// };

// export default EventList2;

// import React, { useState, useEffect } from "react";
// import EventSummary from "./eventSummary";
// import { useSelector, useDispatch, shallowEqual } from "react-redux";
// import { getAllEventsAction } from "../../Redux/Events/eventActions";
// import { useHistory } from "react-router-dom";

// const EventList2 = () => {
//   const dispatch = useDispatch();
//   const history = useHistory("");
//   const events = useSelector((state) => state.event.events);
//   useEffect(dispatch(getAllEventsAction()), []);

//   const letsGoBack = () => history.push("/homepage");

//   return (
//     <div className="event-list section">
//       <div>
//         <button onClick={letsGoBack}>Go Back</button>
//       </div>
//       <h2 className="white-text ">Event List</h2>
//       {data}
//     </div>
//   );
// };

// export default EventList2;
