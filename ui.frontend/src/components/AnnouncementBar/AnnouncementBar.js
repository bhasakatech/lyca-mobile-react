import React from "react";
import "./AnnouncementBar.css";

export default function AnnouncementBar(props) {
  const { announcementText, announcementImage, announcementLink } = props;

  return (
    <section className="announcement-bar">
      <div id="bar-container">
        <div id="text-box">
          {/* Announcement Text */}
          {announcementText && <div>{announcementText}</div>}

          {/* Announcement Link + Image */}
          {announcementLink && announcementImage && (
            <div>
              <a href={announcementLink}>
                <img loading="lazy" src={announcementImage} alt="announcement icon" />
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
