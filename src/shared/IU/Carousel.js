import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
// import { useWindowDimensions } from "../../shared/hooks/useWindowDimensions";

import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import "./Carousel.css";

const PreviousBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <div className="carousel_btn-wrapper left-btn">
        <FaAngleLeft
          className="fa"
          style={{ color: "#fff"}}
        />
      </div>
    </div>
  );
};
const NextBtn = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick}>
      <div className="carousel_btn-wrapper right-btn">
      <FaAngleRight
          className="fa"
          style={{ color: "#fff"}}
        />
    
      </div>
    </div>
  );
};

const carouselProperties = {
  prevArrow: <PreviousBtn />,
  nextArrow: <NextBtn />,
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  className: "slide",
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
      },
    },
  ],
};
const Carousel = (props) => {
  return (
    <div className="container">
      <Slider {...carouselProperties}>
        {/* <Card item={item} click={modalHandler} /> */}
        {props.children}
      </Slider>
    </div>
  );
};

export default Carousel;
