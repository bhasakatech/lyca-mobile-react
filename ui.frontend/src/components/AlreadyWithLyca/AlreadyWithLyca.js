import React from "react";
import './AlreadyWithLyca.css'
export default function AlreadyWithLyca() {
  return (
    <section className="already-main-container">
      <div className="already-with-lyca">
        {/* Header Section */}
        <div className="already-header-section">
          <div id="already-top-header">
            <h1>Already with Lyca?</h1>
            <p>Add a data pack or renew your current plan.</p>
          </div>
        </div>

        {/* Recharge / Renew Buttons */}
        <div className="recharge-and-renew">
          <div className="recharge-tabs-container">
            <button id="recahrge">
              <a href="#">Recharge</a>
            </button>
            <button id="renew">
              <a href="#">Renew plan</a>
            </button>
          </div>
        </div>

        {/* Enter Lyca Number */}
        <div className="enter-lyca-number">
          <div className="input-container">
            <p>+1</p>
            <div className="input-section">
              <input
                type="number"
                placeholder="Enter lyca number & get started "
                id="number"
              />
              <button>
                <a href="#">
                  <img
                    src="/content/dam/lyca-mobile/assets/blueRightCircleArrow.f268c82d.svg"
                    alt=""
                  />
                </a>
              </button>
            </div>
          </div>
        </div>

        {/* Download Our App */}
        <div className="download-our-app">
          <div className="cms-content">
            <p>
              <img
                src="/content/dam/lyca-mobile/assets/mobile-App%20Icon_1.jpg"
                alt=""
                id="download-mobile"
              />
              <span>Track your usage on the go!</span>
              <a href="#">Download our app</a>
              <img
                src="/content/dam/lyca-mobile/assets/app_arrow.jpg"
                alt=""
                id="download-right-arrow"
              />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
