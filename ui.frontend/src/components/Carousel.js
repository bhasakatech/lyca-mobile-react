import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "react-bootstrap/Carousel";


const ControlledCarousel = ({ carouselImages = [] }) => {
  return (
    <Carousel indicators={true} controls={true}>
      {carouselImages.map((img, index) => (
        <Carousel.Item key={index}>
          <img
            src={img}
            className="d-block w-100"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ControlledCarousel;
