import React from "react";
import "./Help.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

export default function Help(props) {
  const { sectionHeader, helpCards = [] } = props;

  return (
    <section className="help">
      <div className="help-container">
        {/* Section Header */}
        {sectionHeader && (
          <div className="help-container-header">
            <h2>{sectionHeader}</h2>
          </div>
        )}

        <div className="help-container-card-container">
          {helpCards.map((card, index) => (
            <Link to="/content/lyca-mobile/us/en/help-support.html" onClick={() => window.scrollTo(0, 0)}>

              <div key={index} className="help-container-card">
                {/* Icon */}
                <p className="help-container-card-icon-container">
                  <a href={card.linkUrl1 || "#"}>
                    <img
                      loading="lazy"
                      src={card.cardIcon}
                      alt={card.linkText1 || "help icon"}
                    />
                  </a>
                  <br />
                </p>

                {/* Links */}
                <p className="help-container-card-icon-container-content">
                  {card.linkText1 && (
                    <a href={card.linkUrl1 || "#"}>{card.linkText1}</a>
                  )}
                  {card.linkText2 && (
                    <a href={card.linkUrl2 || "#"}>{card.linkText2}</a>
                  )}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
