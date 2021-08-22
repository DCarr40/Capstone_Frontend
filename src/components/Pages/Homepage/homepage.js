import React, { useEffect } from "react";

const Homepage = (props) => {
  useEffect(() => (document.title = "Home Page - Runner's Inertia"), []);

  return (
    <div>
      <button className="btn"to="/forecast">Checkout The Forecast</button>
    </div>
  );
};

export default Homepage;
