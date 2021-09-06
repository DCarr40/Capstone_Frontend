import React, { useState } from "react";
import ReactMapGL from "react-map-gl";
import { mapApiToken } from "../../api/mapApiCall";

const Map = () => {
  const [viewPort, setViewPort] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
    width: window.innerWidth,
    height: window.innerHeight,
  });
  //MapBox FTW!!
  const token = mapApiToken;
  return (
    <div>
      <div className="myBox">
        <ReactMapGL
          mapboxApiAccessToken={
            "pk.eyJ1IjoiZGNhcnI0MCIsImEiOiJja3J3dDViZ3IwanZyMnRwYWl6NzFhOTgxIn0._si4sp1Cae7AF6FPXUWAnA"
          }
          {...viewPort}
          onViewportChange={(newViewPort) => setViewPort(newViewPort)}
        />
      </div>
    </div>
  );
};

export default Map;
