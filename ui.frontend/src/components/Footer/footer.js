import React, { useEffect, useState } from "react";
import "./footer.css";

const Footer = ({
  footerSections = [],
  onTheGo = [],
  signatureLogo,
  copyrightText,
  socialLinks = [],
}) => {
  const [toggleArrow, setToggleArrow] = useState(true);
  const [activeSection, setActiveSection] = useState(footerSections);
  useEffect(() => {
    const arr = activeSection.map((section, index) => {
      section.Arrow = toggleArrow;
      return section;
    });
  }, [toggleArrow]);

  const settingToggle = (index) => {
    setActiveSection((prevSections) =>
      prevSections.map((section, i) => {
        if (i === index) {
          section.Arrow = !section.Arrow;
        }
        return section;
      })
    );
  };

  console.log("activeSection : ", activeSection);
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          {/* Dynamic Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <div className="footer-ul-header">
                <h2>{section.title}</h2>
                {section.Arrow ? (
                  <div
                    className="arrow-icon-down"
                    onClick={() => settingToggle(index)}
                  >
                    <img
                      src="/content/dam/lyca-mobile/assets/arrow-down-white.svg"
                      alt=" img not available"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div
                    className="arrow-icon-up"
                    onClick={() => settingToggle(index)}
                  >
                    <img
                      src="/content/dam/lyca-mobile/assets/arrow-up-circle-small.svg"
                      alt=" img not available"
                      loading="lazy"
                    />
                  </div>
                )}
              </div>
                <ul className={`${section.Arrow ? "expanded": "collapsed"}`}>
                  {section.links &&
                    section.links.map((link, i) => (
                      <li key={i}>
                        <a href={link.url}>{link.label}</a>
                      </li>
                    ))}
                </ul>
            </div>
          ))}
          {/* <hr /> */}
          {/* Lyca on the go */}
          {onTheGo.length > 0 && (
            <div class="footer-ul-header2">
              <div>
                <h2>Lyca on the go</h2>
              </div>
              <ul>
                {onTheGo.map((entry, i) => (
                  <li key={i}>
                    <a href={entry.url}>
                      <img src={entry.icon} alt="" loading="lazy" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <hr />

      {/* Signature */}
      <div className="footer-signature">
        <div className="footer-signature-container">
          {signatureLogo && <img src={signatureLogo} alt="Footer Logo" />}
          {copyrightText && <div>{copyrightText}</div>}
          <div>
            {socialLinks.map((social, i) => (
              <a key={i} href={social.url}>
                <img src={social.icon} alt={`Social ${i}`} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
