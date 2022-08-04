import React from "react";
import { ReactSVG } from "react-svg";
import map from "../../assets/images/map_east.svg";
import port from "../../assets/icons/port_small.svg";
import "./Map.css";
const Map = () => {
  return (
    <div className="job_map-wrapper">
      <div className="job_map-item vladivostok">
        <p>Vladivostok</p>
        <div className="job_map-item-icon-wrapper">
          <div className="job_map-item-icon">
            <ReactSVG className="job_map-item-icon-image" src={port} />
          </div>
        </div>
      </div>
      <div className="job_map-image">
        <img className="job_map-main" src={map} alt="map" />
      </div>
    </div>
  );
};

export default Map;
