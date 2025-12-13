import { useState, useEffect } from "react";
import "./HowItWorks.css";

export default function HowItWorks() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const steps = [
    {
      img: "https://cms-pim-assets-dev.ldsvcplatform.com/IRE/s3fs-public/inline-images/Group%20383180914%20%282%29.png",
      title: "Choose a Line",
      text: "Lyca Mobile offers a variety of high-speed data plan to fit every budget and need."
    },
    {
      img: "https://cms-pim-assets-dev.ldsvcplatform.com/IRE/s3fs-public/inline-images/Group%20383180914%20%283%29.png",
      title: "Activate your line",
      text: "Complete your activation by clicking “Activate SIM” from the menu of this site and follow the simple steps to activate your phone in moments."
    },
    {
      img: "https://cms-pim-assets-dev.ldsvcplatform.com/IRE/s3fs-public/inline-images/Group%20383180914%20%284%29.png",
      title: "Control Your Plan",
      text: "Download the Lyca Mobile US application on your mobile device and enjoy hassle-free account management."
    }
  ];

  const next = () => setCurrent((prev) => (prev + 1) % steps.length);
  const prev = () => setCurrent((prev) => (prev - 1 + steps.length) % steps.length);

  return (
    <section className="how-it-works-container">
      <div className="how-it-works-main">
        <h2 className="how-it-works-heading">How it works</h2>

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
            {steps.map((step, index) => (
              <div className="step" key={index}>
                <img src={step.img} alt={step.title} />
                <p className="step-title"><strong>{step.title}</strong></p>
                <p className="step-benifit">{step.text}</p>

                {/* ✅ DESKTOP ARROW CONNECTOR */}
                {!isMobile && index !== steps.length - 1 && (
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

        {isMobile && (
          <div className="dots">
            {steps.map((_, index) => (
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
