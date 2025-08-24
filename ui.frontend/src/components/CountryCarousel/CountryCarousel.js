import React from "react";
import './CountryCarousel.css'
const countries = [
  { name: "India", flag: "/content/dam/lyca-mobile/assets/India.jpg" },
  { name: "Malaysia", flag: "/content/dam/lyca-mobile/assets/malaysia.jpg" },
  { name: "Nigeria", flag: "/content/dam/lyca-mobile/assets/Flag%20(13).jpg" },
  { name: "Poland", flag: "/content/dam/lyca-mobile/assets/Australia.jpg" },
  { name: "Romania", flag: "/content/dam/lyca-mobile/assets/Bulgaria.jpg" },
];

export default function InternationalCalls() {
  return (
    <section className="international-calls-section">
      <div className="international-calls">
        {/* Heading */}
        <div className="international-calls-heading">
          <h3>Cheap international calls for everyone</h3>
          <img src="/content/dam/lyca-mobile/assets/arrow-down-circle.e8d1ba6f.svg" alt="arrow-down" />
        </div>

        {/* Icon + Countries */}
        <div className="international-calls-icon-container">
          <div className="internatonal-calls-icon">
            <img src="/content/dam/lyca-mobile/assets/leftArrowBlue.4aabcacc.svg" alt="left-arrow" />

            {/* Countries list */}
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

            <img src="/content/dam/lyca-mobile/assets/rightArrowBlue.beb7ab20.svg" alt="right-arrow" />
          </div>
        </div>
      </div>
    </section>
  );
}
