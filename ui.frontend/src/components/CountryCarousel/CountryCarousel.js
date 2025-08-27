import React, { useRef } from "react";
import "./CountryCarousel.css";

export default function CountryCarousel(props) {
  const { heading, countries = [] } = props; // props from Sling Model JSON
  const carouselRef = useRef(null);

  // scroll left
  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: -150, behavior: "smooth" });
  };

  // scroll right
  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 150, behavior: "smooth" });
  };

  return (
    <section className="international-calls-section">
      <div className="international-calls">
        {/* Heading */}
        <div className="international-calls-heading">
          <h3>{heading}</h3>
          <img
            src="/content/dam/lyca-mobile/assets/arrow-down-circle.e8d1ba6f.svg"
            alt="arrow-down"
          />
        </div>

        {/* Carousel */}
        <div className="international-calls-icon-container">
          {/* Left Arrow */}
          <img
            src="/content/dam/lyca-mobile/assets/leftArrowBlue.4aabcacc.svg"
            alt="left-arrow"
            className="carousel-arrow"
            onClick={scrollLeft}
          />

          {/* Countries from Sling Model */}
          <div className="carousel-track" ref={carouselRef}>
            {countries.map((country, index) => (
              <div className="international-calls-flag" key={index}>
                <div className="flag-container">
                  <img src={country.countryFlag} alt={country.countryName} />
                  <p>{country.countryName}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <img
            src="/content/dam/lyca-mobile/assets/rightArrowBlue.beb7ab20.svg"
            alt="right-arrow"
            className="carousel-arrow"
            onClick={scrollRight}
          />
        </div>
      </div>
    </section>
  );
}
