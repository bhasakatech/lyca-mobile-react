import React from "react";
import './Carousel.css'
import ControlledCarousel from "../Carousel";
export default function Carousel(props) {

  return (
    <ControlledCarousel carouselImages={props.carouselImages} />
  );
}
