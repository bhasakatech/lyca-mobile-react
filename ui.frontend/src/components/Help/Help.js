import React from "react";
import './Help.css'
export default function Help() {
  return (
    <section className="help">
      <div className="help-container">
        <div className="help-container-header">
          <h2>We are here to help you</h2>
        </div>

        <div className="help-container-card-container">
          {/* Card 1 */}
          <div className="help-container-card">
            <p className="help-container-card-icon-container">
              <a href="#">
                {/* URL-encoded spaces and & */}
                <img src="/content/dam/lyca-mobile/assets/PayG-PayM.jpg" alt="Prepaid plans" />
              </a>
              <br />
            </p>
            <p className="help-container-card-icon-container-content">
              <a href="#">Prepaid plans</a>
              <a href="#">FAQ</a>
            </p>
          </div>

          {/* Card 2 */}
          <div className="help-container-card">
            <p className="help-container-card-icon-container">
              <a href="#">
                <img src="/content/dam/lyca-mobile/assets/Switch_0.jpg" alt="Switch to Lyca" />
              </a>
              <br />
            </p>
            <p className="help-container-card-icon-container-content">
              <a href="#">Switch to</a>
              <a href="#">Lyca</a>
            </p>
          </div>

          {/* Card 3 */}
          <div className="help-container-card">
            <p className="help-container-card-icon-container">
              <a href="#">
                <img src="/content/dam/lyca-mobile/assets/MYA.jpg" alt="Manage your account" />
              </a>
              <br />
            </p>
            <p className="help-container-card-icon-container-content">
              <a href="#">Manage your</a>
              <a href="#">account</a>
            </p>
          </div>

          {/* Card 4 */}
          <div className="help-container-card">
            <p className="help-container-card-icon-container">
              <a href="#">
                {/* URL-encoded space */}
                <img src="/content/dam/lyca-mobile/assets/Lia%20chat.jpg" alt="Chat with LIA" />
              </a>
              <br />
            </p>
            <p className="help-container-card-icon-container-content">
              <a href="#">Chat with</a>
              <a href="#">LIA</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
