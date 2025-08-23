import React from "react";
import './JoinLyca.css'
export default function JoinLyca() {
  return (
    <section className="join-lyca-container">
      <div className="join-lyca-box">
        {/* Header Section */}
        <div className="join-header-section">
          <div id="top-header">
            <h1>Join Lyca today</h1>
            <p>
              Get superfast, reliable coverage at low prices. All with
              international calling & high speed 5G data.
            </p>
          </div>
        </div>

        {/* Image Cards */}
        <div className="join-image-section">
          <div className="join-card">
            <div id="plans" className="lyca-card">
              <a href="#">
                <img src="/content/dam/lyca-mobile/assets/plans.jpg" alt="Plans" />
              </a>
              <p>
                <a href="#">Plans</a>
              </p>
            </div>
          </div>

          <div className="join-card">
            <div id="activate" className="lyca-card">
              <a href="#">
                <img src="/content/dam/lyca-mobile/assets/Activate_SIM.jpg" alt="Activate SIM" />
              </a>
              <p>
                <a href="#">Activate SIM</a>
              </p>
            </div>
          </div>

          <div className="join-card">
            <div id="switch" className="lyca-card">
              <a href="#">
                <img src="/content/dam/lyca-mobile/assets/Switch.jpg" alt="Switch to Lyca" />
              </a>
              <p>
                <a href="#">Switch to Lyca</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
