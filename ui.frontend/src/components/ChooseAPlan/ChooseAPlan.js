import React from "react";
import "./ChooseAPlan.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function ChooseAPlan(props) {
  const { planHeader, planDescription, planCards = [] } = props;

  // Keep your original per-card classes so CSS works unchanged
  const classMap = ["best-value-card", "long-term-card", "internation-plans-card"];

  return (
    <section className="choose-a-plan">
      {planHeader && <h2>{planHeader}</h2>}
      {planDescription && <p>{planDescription}</p>}

      <div className="choose-a-plan-cards">
        {planCards.map((card, index) => {
          const rootClass = classMap[index] || "plan-card"; // fallback if more than 3
          const arrowSrc = card.cardImage || "/content/dam/lyca-mobile/assets/app_arrow.jpg";

          return (
            <div key={index} className={rootClass}>
              <Link to="/content/lyca-mobile/us/en/home/buy-sim---plan.html" onClick={() => window.scrollTo(0, 0)}>
                <div className="text-container">
                  <div className="block-text-container">
                    {card.cardTitle && (
                      <h2>
                        <span>{card.cardTitle}</span>
                      </h2>
                    )}
                    {(card.cardText || arrowSrc) && (
                      <p>
                        {card.cardText && (
                          <span href={card.cardLink || "#"}>{card.cardText}</span>
                        )}
                        <span href={card.cardLink || "#"}></span>
                        <span href={card.cardLink || "#"}>
                          <img loading="lazy" src={arrowSrc} alt="arrow" />
                        </span>
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
