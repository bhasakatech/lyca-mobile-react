import React from "react";
import "./ViewRates.css";

export default function ViewRatesNow(props) {
  const { viewRatesText, simIcon, arrowIcon, viewRatesLink } = props;

  return (
    <section className="view-rates-now">
      <p>
        <a href={viewRatesLink || "#"}>
          {simIcon && <img src={simIcon} alt="Sim Icon" id="sim-icon" />}
          {viewRatesText}
          {arrowIcon && <img src={arrowIcon} alt="Arrow Icon" id="view-rates-arrow" />}
        </a>
      </p>
    </section>
  );
}
