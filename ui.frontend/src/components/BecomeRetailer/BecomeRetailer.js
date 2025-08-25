import React from "react";
import './BecomeRetailer.css'
const BecomeRetailer = () => {
  return (
    <section className="become-a-retailer">
      <p className="become-a-retailer-container">
        <img  loading="lazy" src="/content/dam/lyca-mobile/assets/become.jpg" alt="Become a retailer" />
        <a href="#">
          Become a retailer. Join Lyca today
          <img loading="lazy" src="/content/dam/lyca-mobile/assets/image.jpg" alt="Arrow icon" />
        </a>
      </p>
    </section>
  );
};

export default BecomeRetailer;
