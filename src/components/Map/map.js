import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import { useHistory } from "react-router";
import { mapApiToken } from "../../api/mapApiCall";

const Map = () => {
  const history = useHistory("/homepage");

  const [coords, setCoords] = useState({ long: "", lat: "" });
  const [viewPort, setViewPort] = useState({
    latitude: 35.1415,
    longitude: -79.008,
    zoom: 8,
    width: window.innerWidth,
    height: window.innerHeight,
    pitch: 50,
  });

  navigator.geolocation.getCurrentPosition(async (success) => {
    let { longitude, latitude } = success.coords;
    console.log(longitude, latitude); //This works too!
    setCoords({ long: longitude, lat: latitude });
  });

  const letsGoBack = () => history.push("/homepage");

  //MapBox FTW!!
  const token = mapApiToken;
  return (
    <div>
      <div className="myBox">
        <ReactMapGL
          mapStyle={"mapbox://styles/mapbox/dark-v9"}
          mapboxApiAccessToken={
            "pk.eyJ1IjoiZGNhcnI0MCIsImEiOiJja3J3dDViZ3IwanZyMnRwYWl6NzFhOTgxIn0._si4sp1Cae7AF6FPXUWAnA"
          }
          {...viewPort}
          onViewportChange={(newViewPort) => setViewPort(newViewPort)}
        >
          <Marker latitude={35.1415} longitude={-79.008}>
            <img
              src="https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-512.png"
              width={viewPort.zoom * 5}
              height={viewPort.zoom * 5}
            />
          </Marker>
        </ReactMapGL>
      </div>
      <div>
        <button className="btn" onClick={letsGoBack}>
          <i class="fas fa-arrow-left"> Go Back</i>
        </button>
      </div>
    </div>
  );
};

export default Map;
