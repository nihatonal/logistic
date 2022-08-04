import React from "react";

import Hero from "../Hero/Hero";
import Job from "../Job/Job";
import Form from "../Form/Form";
import Suggest from "../Suggest/Suggest";
import Services from "../Services/Services";
import Transportation from "../Transportation/Transportation";
import Business from "../Business/Business";
import Partners from "../Partners/Partners";

import map from "../assets/images/bigmap.svg";
import "./Main.css";

const Main = () => {
  return (
    <div className="main-container">
      <img className="map-business" src={map} alt="map" />
      <Hero />
      <Job id="aboutus" />

      <Form />
      <Suggest />
      <Services id='services' />
      <Transportation id="internationaltransport" />
      <Business id="businesssolution" />
      <Partners />
    </div>
  );
};

export default Main;
