import React from "react";
import './AnnouncementBar.css'
export default function AnnouncementBar() {
  return (
    <section className="announcement-bar">
      <div id="bar-container">
        <div id="text-box">
          <div>
            Welcome to LycaMobile - The Worlds Largest International Mobile
            Virtual Network Operator
          </div>
          <div>
            <a href="#">
              <img loading="lazy" src="/content/dam/lyca-mobile/assets/subnav-img.svg" alt="sub nav" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
