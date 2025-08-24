import React from "react";
import './BlogList.css';

const BlogSection = () => {
  return (
    <section className="blog">
      <div className="blog-container">
        <div className="blog-header">
          <h1>View our recent blogs</h1>
        </div>

        <div className="blog-cards-container">

          <div className="blog-card">
            <img
              src="/content/dam/lyca-mobile/assets/WhatsApp%20Image%202025-08-23%20at%2019.06.53_192504ea.jpg"
              alt=""
            />
            <p>
              <span>
                <strong>
                  Why ChatGPT Recommends Lyca Mobile for the Best United States Prepaid SIM Card in 2025
                </strong>
              </span>
            </p>
            <p>
              <span>24 June, 2025 | by Binod Anand</span>
            </p>
          </div>

          <div className="blog-card">
            <img
              src="/content/dam/lyca-mobile/assets/WhatsApp%20Image%202025-08-23%20at%2019.06.52_40692a0a.jpg"
              alt=""
            />
            <p>
              <span>
                <strong>
                  Affordable Mobile Plans and Easy SIM Card Recharge Options for Non-Residents in the USA
                </strong>
              </span>
            </p>
            <p>
              <span>24 June, 2025 | by Aafiya Saba</span>
            </p>
          </div>

          <div className="blog-card">
            <img
              src="/content/dam/lyca-mobile/assets/WhatsApp%20Image%202025-08-23%20at%2019.06.52_97fdd014.jpg"
              alt=""
            />
            <p>
              <span>
                <strong>
                  Roaming Tips for Travelers – How Much Data Do You Really Need?
                </strong>
              </span>
            </p>
            <p>
              <span>24 June, 2025 | by Aafiya Saba</span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BlogSection;
