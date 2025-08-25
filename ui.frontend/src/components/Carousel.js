import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel
     activeIndex={index} onSelect={handleSelect}
     indicators={true}   
      controls={true} 
     >

      <Carousel.Item>
       <img
            src="/content/dam/lyca-mobile/assets/WhatsApp%20Image%202025-08-23%20at%203.49.07%20PM.jpeg"
            alt=""
          />
      </Carousel.Item>
      <Carousel.Item>
          <img
            src="/content/dam/lyca-mobile/assets/WhatsApp%20Image%202025-08-23%20at%203.49.07%20PM.jpeg"
            alt=""
          />
      </Carousel.Item>
      <Carousel.Item>
          <img
            src="/content/dam/lyca-mobile/assets/WhatsApp%20Image%202025-08-23%20at%203.49.07%20PM.jpeg"
            alt=""
          />
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;