import React, { useEffect } from "react";

const Time = () => {
  let timeEl = "";
  let dateEl = "";

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

      timeEl = `${hours}: ${minutes}`;
      dateEl = `${days[day]} ${date} ${months[month]}`;
    }, 1000);
    return () => {
      console.log(timeEl, dateEl);
    };
  }, [timeEl]);

  return (
    <div>
      <div className="time" id="time">
        {console.log(timeEl, dateEl)}
      </div>
    </div>
  );
};

export default Time;
