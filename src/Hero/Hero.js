import React, { useContext, useState } from "react";

import { Text, LanguageContext } from "../shared/context/Language";

import Map from "./components/Map";
import Socialicons from "./components/Socialicons";
import "./Hero.css";
const Hero = () => {
  const { dictionary } = useContext(LanguageContext);
  return (
    <div className="hero-container">
      <p className="hero-phone">+7 499 350 10 12</p>
      <div className="hero_content">
        <p className="hero-suptitle">
          <Text tid="hero-suptitle" />
        </p>
        <h1 className="hero-title">
          <Text tid="hero-title" />
          <span>
            <Text tid="hero-title-span" />
          </span>
          <Text tid="hero-title-second" />
        </h1>
        <div className="hero-content-item">
          <p className="section-desc">
            <span></span>
            <Text tid="hero-text-1" />
          </p>
          <p className="section-desc">
            <span></span>
            <Text tid="hero-text-2" />
          </p>
          <p className="section-desc">
            <span></span>
            <Text tid="hero-text-3" />
          </p>

          <p className="section-desc">
            <span></span>
            <Text tid="hero-text-4" />
          </p>
        </div>
      </div>
      <Map />
      <Socialicons className='social-icons-destkop'/>
    </div>
  );
};

export default Hero;
