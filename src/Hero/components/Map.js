import React from "react";
import { ReactSVG } from "react-svg";
import map from "../../assets/images/map.svg";
import map2 from "../../assets/images/map_part.svg";
import port from "../../assets/icons/port.svg";
import airport from "../../assets/icons/airport.svg";
import "./Map.css";
const Map = () => {
  return (
    <div className="hero_map-wrapper">
      <div className="hero_map-item novorossiysk">
        <p>Novorossiysk</p>
        <div className="hero_map-item-icon-wrapper">
          <div className="hero_map-item-icon">
            <ReactSVG src={port} />
          </div>
        </div>
      </div>
      <div className="hero_map-item moscow">
        <p>Moscow</p>
        <div className="hero_map-item-icon-wrapper">
          <div className="hero_map-item-icon">
            <ReactSVG src={airport} />
          </div>
        </div>
      </div>
      <div className="hero_map-item saint-petersburg">
        <p>Saint-Petersburg</p>
        <div className="hero_map-item-icon-wrapper">
          <div className="hero_map-item-icon">
            <ReactSVG src={port} />
          </div>
        </div>
      </div>
      <div className="hero_map-image">
        <img className="hero_map-part" src={map2} alt="map" />
        <img className="hero_map-main" src={map} alt="map" />
      </div>
    </div>
  );
};

export default Map;
