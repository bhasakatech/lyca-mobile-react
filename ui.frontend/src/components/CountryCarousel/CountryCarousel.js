import React, { useRef } from "react";
import Slider from "react-slick";
import './CountryCarousel.css';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const countries = [
  { name: "India", flag: "/content/dam/lyca-mobile/assets/India.jpg" },
  { name: "Malaysia", flag: "/content/dam/lyca-mobile/assets/malaysia.jpg" },
  { name: "Nigeria", flag: "/content/dam/lyca-mobile/assets/Flag%20(13).jpg" },
  { name: "Poland", flag: "/content/dam/lyca-mobile/assets/Australia.jpg" },
  { name: "Romania", flag: "/content/dam/lyca-mobile/assets/Bulgaria.jpg" },
  { name: "India", flag: "/content/dam/lyca-mobile/assets/India.jpg" },
  { name: "Malaysia", flag: "/content/dam/lyca-mobile/assets/malaysia.jpg" },
  { name: "Nigeria", flag: "/content/dam/lyca-mobile/assets/Flag%20(13).jpg" },
  { name: "Poland", flag: "/content/dam/lyca-mobile/assets/Australia.jpg" },
  { name: "Romania", flag: "/content/dam/lyca-mobile/assets/Bulgaria.jpg" },
  { name: "India", flag: "/content/dam/lyca-mobile/assets/India.jpg" },
  { name: "Malaysia", flag: "/content/dam/lyca-mobile/assets/malaysia.jpg" },
  { name: "Nigeria", flag: "/content/dam/lyca-mobile/assets/Flag%20(13).jpg" },
  { name: "Poland", flag: "/content/dam/lyca-mobile/assets/Australia.jpg" },
  { name: "Romania", flag: "/content/dam/lyca-mobile/assets/Bulgaria.jpg" },
];

// Custom arrow components
const NextArrow = ({ onClick }) => (
  <div className="custom-arrow custom-arrow-next" onClick={onClick}>
    <img src="/content/dam/lyca-mobile/assets/rightArrowBlue.beb7ab20.svg" alt="right-arrow" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div className="custom-arrow custom-arrow-prev" onClick={onClick}>
    <img src="/content/dam/lyca-mobile/assets/leftArrowBlue.4aabcacc.svg" alt="left-arrow" />
  </div>
);

export default function InternationalCalls() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section className="international-calls-section">
      <div className="international-calls">
        {/* Heading */}
        <div className="international-calls-heading">
          <h3>Cheap international calls for everyone</h3>
          <img src="/content/dam/lyca-mobile/assets/arrow-down-circle.e8d1ba6f.svg" alt="arrow-down" />
        </div>

        {/* Countries Slider */}
        <div className="international-calls-slider-container">
          <Slider ref={sliderRef} {...settings}>
            {countries.map((country, index) => (
              <div className="international-calls-flag" key={index}>
                <div className="flag-container">
                  <div>
                    <img src={country.flag} alt={country.name} />
                    <p>{country.name}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}