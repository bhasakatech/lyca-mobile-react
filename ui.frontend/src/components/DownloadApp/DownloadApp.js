import React from "react";
import './DownloadApp.css'
export default function DownloadApp() {
  return (
    <section className="download-app">
      {/* Image Container */}
      <figure className="download-app-image-container">
        <img src="/content/dam/lyca-mobile/assets/App_Loader_Img.jpg" alt="App Loader" />
      </figure>

      {/* Content Section */}
      <div className="download-app-content-container">
        <div className="mobile-img">
          <img src="/content/dam/lyca-mobile/assets/mobile_1-removebg-preview.png" alt="Mobile Preview" />
        </div>

        <div className="download-app-content">
          <h2>
            <strong>Download iOS/Android </strong>
          </h2>
          <h2>
            <strong>My Lyca Mobile app</strong>
          </h2>

          <p>
            <img src="/content/dam/lyca-mobile/assets/Icon_1.jpg" alt="Feature Icon" />
            Check your credit balance, data availability & more
          </p>

          <p>
            <img src="/content/dam/lyca-mobile/assets/Icon_1.jpg" alt="Feature Icon" />
            Get reminders to renew
          </p>

          <p>
            <img src="/content/dam/lyca-mobile/assets/Icon_1.jpg" alt="Feature Icon" />
            Be the first to know about our latest offers and discounts
          </p>

          <p>
            <a href="#">
              <img src="/content/dam/lyca-mobile/assets/Group%20383180556%20(1).jpg" alt="Download on App Store" />
            </a>
            <a href="#">
              <img src="/content/dam/lyca-mobile/assets/Group%20383180557%20(1).jpg" alt="Get it on Google Play" />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
