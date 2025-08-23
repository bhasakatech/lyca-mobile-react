import React from "react";
import './Carousel.css'
export default function Carousel() {
  return (
    <section className="carousel">
      <div id="carousel-img">
        <a href="#">
          <img
            src="/content/dam/lyca-mobile/assets/WhatsApp%20Image%202025-08-23%20at%203.49.07%20PM.jpeg"
            alt=""
          />
        </a>
      </div>
      <div id="left-arrow">
        <a href="#">
          <img src="/content/dam/lyca-mobile/assets/leftArrowBlue.4aabcacc.svg" alt="" />
        </a>
      </div>
      <div id="right-arrow">
        <a href="#">
          <img src="/content/dam/lyca-mobile/assets/rightArrowBlue.beb7ab20.svg" alt="" />
        </a>
      </div>
    </section>
  );
}
