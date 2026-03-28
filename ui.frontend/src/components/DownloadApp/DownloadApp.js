import React from "react";
import './DownloadApp.css';

export default function DownloadApp(props) {
  const {
    mainImage,
    mobileImage,
    heading1,
    heading2,
    features = [],
    appStoreLinks = []
  } = props;

  return (
    <section className="download-app">
      {/* Image Container */}
      {mainImage && (
        <figure className="download-app-image-container">
          <img loading="lazy" src={mainImage} alt="App Loader" />
        </figure>
      )}

      {/* Content Section */}
      <div className="download-app-content-container">
        {mobileImage && (
          <div className="mobile-img">
            <img loading="lazy" src={mobileImage} alt="Mobile Preview" />
          </div>
        )}

        <div className="download-app-content">
          {heading1 && (
            <h2>
              <strong>{heading1}</strong>
            </h2>
          )}
          {heading2 && (
            <h2>
              <strong>{heading2}</strong>
            </h2>
          )}

          {/* Features */}
          {features.map((feature, index) => (
            <p key={index}>
              {feature.featureIcon && (
                <img
                  loading="lazy"
                  src={feature.featureIcon}
                  alt="Feature Icon"
                />
              )}
              {feature.featureText}
            </p>
          ))}

          {/* App Store Links */}
          {appStoreLinks.length > 0 && (
            <p>
              {appStoreLinks.map((store, index) => (
                <a href={store.storeLink} key={index}>
                  <img
                    loading="lazy"
                    src={store.storeIcon}
                    alt="App Store Icon"
                  />
                </a>
              ))}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
