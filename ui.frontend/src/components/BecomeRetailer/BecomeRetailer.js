import React from "react";
import "./BecomeRetailer.css";

const BecomeRetailer = (props) => {
  const { mainImage, linkText, linkUrl, arrowImage } = props;

  return (
    <section className="become-a-retailer">
      <p className="become-a-retailer-container">
        {/* Main Image */}
        {mainImage && (
          <img
            loading="lazy"
            src={mainImage}
            alt={linkText || "Become a retailer"}
          />
        )}

        {/* Link with text + arrow */}
        {linkText && (
          <a href={linkUrl || "#"}>
            {linkText}
            {arrowImage && (
              <img
                loading="lazy"
                src={arrowImage}
                alt="Arrow icon"
              />
            )}
          </a>
        )}
      </p>
    </section>
  );
};

export default BecomeRetailer;
