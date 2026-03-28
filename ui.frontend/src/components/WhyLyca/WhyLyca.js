import React from "react";
import "./WhyLyca.css";

export default function WhyLyca(props) {
  const { sectionHeader, whyLycaCards = [] } = props;

  return (
    <section className="why-lyca">
      <div className="why-lyca-child">
        {/* Header */}
        <div className="why-lyca-child-header">
          {sectionHeader && <h2>{sectionHeader}</h2>}
        </div>

        {/* Content Cards */}
        <div className="why-lyca-child-content">
          {whyLycaCards.map((card, index) => (
            <div className="why-lyca-child-content-cards" key={index}>
              <p>
                {card.cardImage && (
                  <img
                    src={card.cardImage}
                    alt={card.cardTitle || `why-lyca-card-${index}`}
                  />
                )}
              </p>
              <p>
                {card.cardTitle && <strong>{card.cardTitle}</strong>}
                <br />
                {card.cardDescription}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
