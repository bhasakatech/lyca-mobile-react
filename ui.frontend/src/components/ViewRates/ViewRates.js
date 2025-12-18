import React from "react";
import "./ViewRates.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function ViewRatesNow(props) {
  const { viewRatesText, simIcon, arrowIcon, viewRatesLink } = props;

  return (
    <section className="view-rates-now">
      <Link to="/content/lyca-mobile/us/en/home/buy-sim---plan.html" onClick={() => window.scrollTo(0, 0)}>
        <p>
          <a href={viewRatesLink || "#"}>
            {simIcon && <img src={simIcon} alt="Sim Icon" id="sim-icon" />}
            {viewRatesText}
            {arrowIcon && <img src={arrowIcon} alt="Arrow Icon" id="view-rates-arrow" />}
          </a>
        </p>
      </Link>
    </section>
  );
}
