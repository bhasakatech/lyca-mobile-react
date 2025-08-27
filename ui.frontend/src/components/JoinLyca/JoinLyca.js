import React from "react";
import './JoinLyca.css';

export default function JoinLyca(props) {
  const { header, description, cards = [] } = props;

  return (
    <section className="join-lyca-container">
      <div className="join-lyca-box">
        {/* Header Section */}
        <div className="join-header-section">
          <div id="top-header">
            <h1>{header}</h1>
            <p>{description}</p>
          </div>
        </div>

        {/* Image Cards */}
        <div className="join-image-section">
          {cards.map((card, index) => (
            <div className="join-card" key={index}>
              <div
                id={card.cardTitle.toLowerCase().replace(/\s+/g, "-")}
                className="lyca-card"
              >
                <a href={card.cardLink}>
                  <img
                    loading="lazy"
                    src={card.cardImage}
                    alt={card.cardTitle}
                  />
                </a>
                <p>
                  <a href={card.cardLink}>{card.cardTitle}</a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
