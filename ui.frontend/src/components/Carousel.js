import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "react-bootstrap/Carousel";

const ControlledCarousel = ({ carouselImages = [] }) => {
  return (
    <Carousel 
      indicators={true} 
      controls={true} 
      interval={3000}
      pause={false} 
    >
      {carouselImages.map((img, index) => (
        <Carousel.Item key={index}>
          <img
            src={img}
            className="d-block w-100"
            alt={`slide-${index}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ControlledCarousel;
