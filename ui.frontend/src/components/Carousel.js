import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

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
          <Link to="/content/lyca-mobile/us/en/home/buy-sim---plan.html" onClick={() => window.scrollTo(0, 0)}>
          <img
            src={img}
            className="d-block w-100"
            alt={`slide-${index}`}
          />
          </Link>
        </Carousel.Item>
      ))}
   
    </Carousel>
  );
};

export default ControlledCarousel;
