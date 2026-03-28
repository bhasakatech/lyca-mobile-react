import React from "react";
import './JoinLyca.css';
import { Link } from "react-router-dom/cjs/react-router-dom.min";

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
            <Link to="/content/lyca-mobile/us/en/home/buy-sim---plan.html" onClick={() => window.scrollTo(0, 0)}>
              <div className="join-card" key={index}>
                <div
                  id={card.cardTitle.toLowerCase().replace(/\s+/g, "-")}
                  className="lyca-card"
                >
                  <Link to="/content/lyca-mobile/us/en/home/buy-sim---plan.html" onClick={() => window.scrollTo(0, 0)}>
                    <img
                      loading="lazy"
                      src={card.cardImage}
                      alt={card.cardTitle}
                    />
                  </Link>
                  <p>
                    <Link to="/content/lyca-mobile/us/en/home/buy-sim---plan.html" onClick={() => window.scrollTo(0, 0)}>
                      {card.cardTitle}
                    </Link>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section >
  );
}
