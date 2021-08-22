import React, { useState, useEffect } from "react";

const Time = (props) => {
  const [timeEl, setTimeEl] = useState("");
  const [dateEl, setDateEl] = useState("");

  //https://www.w3schools.com/jsref/met_win_setinterval.asp
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  useEffect(() => {
    setInterval(() => {
      const time = new Date();
      const month = time.getMonth();
      const date = time.getDate();
      const day = time.getDay();
      const hours = time.getHours();
      const minutes = time.getMinutes();

      setTimeEl(`${hours}: ${minutes}`);
      setDateEl(`${days[day]} ${date} ${months[month]}`);
    }, 1000); //sets time interval
    return () => {
      console.log(timeEl, dateEl);
    };
  }, [timeEl]); //should run all useEffect everytime timeEl changes

  return (
    <div>
      <div className="row">
        <div className="col s12 m6">
          <div className="card blue-grey darken-1 opacity">
            <div className="card-content white-text">
              <span className="card-title">{timeEl}</span>
              <span>{dateEl}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Time;
