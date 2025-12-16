import { useState, useEffect } from "react";
import "./HowItWorks.css";

export default function HowItWorks(props) {
  console.log(props,"HowItWorks")
  const { headingText, whyLycaCards = [] } = props;

  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () =>
    setCurrent((prev) => (prev + 1) % whyLycaCards.length);

  const prev = () =>
    setCurrent((prev) => (prev - 1 + whyLycaCards.length) % whyLycaCards.length);


  return (
    <section className="how-it-works-container">
      <div className="how-it-works-main">

        {/* ✅ Dynamic Section Header */}
        {headingText && (
          <h2 className="how-it-works-heading">{headingText}</h2>
        )}

        <div className="carousel">

          {isMobile && (
            <button className="arrow-btn left" onClick={prev}>❮</button>
          )}

          <div
            className="carousel-track"
            style={
              isMobile
                ? { transform: `translateX(-${current * 100}%)` }
                : {}
            }
          >
            {whyLycaCards.map((card, index) => (
              <div className="step" key={index}>

                {/* ✅ Dynamic Image */}
                {card.cardImage && (
                  <img src={card.cardImage} alt={card.cardTitle || ""} />
                )}

                {/* ✅ Dynamic Title */}
                {card.cardTitle && (
                  <p className="step-title">
                    <strong>{card.cardTitle}</strong>
                  </p>
                )}

                {/* ✅ Dynamic Description */}
                {card.cardDescription && (
                  <p className="step-benifit">{card.cardDescription}</p>
                )}

                {/* ✅ Desktop Arrow Connector */}
                {!isMobile && index !== whyLycaCards.length - 1 && (
                  <div className="arrow">
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {isMobile && (
            <button className="arrow-btn right" onClick={next}>❯</button>
          )}
        </div>

        {/* ✅ Mobile Dots */}
        {isMobile && (
          <div className="dots">
            {whyLycaCards.map((_, index) => (
              <span
                key={index}
                className={`dot ${index === current ? "active" : ""}`}
                onClick={() => setCurrent(index)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
