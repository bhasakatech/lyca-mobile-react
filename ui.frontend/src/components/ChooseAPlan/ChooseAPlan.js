import React from "react";
import './ChooseAPlan.css'
export default function ChooseAPlan() {
  return (
    <section className="choose-a-plan">
      <h2>Choose a prepaid plan today</h2>
      <p>
        Want flexibility with international calling benefits? Choose from our
        wide range of prepaid plans.
      </p>

      <div className="choose-a-plan-cards">
        {/* Best Value Card */}
        <div className="best-value-card">
          <div className="text-container">
            <div className="block-text-container">
              <h2>
                <a href="#">Best value</a>
              </h2>
              <p>
                <a href="#">Check out our 30 days plans</a>
                <a href="#"></a>
                <a href="#">
                  <img loading="lazy" src="/content/dam/lyca-mobile/assets/app_arrow.jpg" alt="arrow" />
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Long Term Card */}
        <div className="long-term-card">
          <div className="text-container">
            <div className="block-text-container">
              <h2>
                <a href="#">Long term plans</a>
              </h2>
              <p>
                <a href="#">Stay more, save more</a>
                <a href="#"></a>
                <a href="#">
                  <img  loading="lazy" src="/content/dam/lyca-mobile/assets/app_arrow.jpg" alt="arrow" />
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* International Plans Card */}
        <div className="internation-plans-card">
          <div className="text-container">
            <div className="block-text-container">
              <h2>
                <a href="#">International plans</a>
              </h2>
              <p>
                <a href="#">Unlimited talk & text to 100 countries</a>
                <a href="#"></a>
                <a href="#">
                  <img loading="lazy" src="/content/dam/lyca-mobile/assets/app_arrow.jpg" alt="arrow" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
