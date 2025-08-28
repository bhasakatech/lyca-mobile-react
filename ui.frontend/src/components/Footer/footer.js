import React from "react";
import "./footer.css";

const Footer = ({ footerSections = [], onTheGo = [], signatureLogo, copyrightText, socialLinks = [] }) => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-content">
          {/* Dynamic Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <div className="footer-ul-header">
                <h2>{section.title}</h2>
              </div>
              <ul>
                {section.links &&
                  section.links.map((link, i) => (
                    <li key={i}>
                      <a href={link.url}>{link.label}</a>
                    </li>
                  ))}
              </ul>
            </div>
          ))}

          {/* Lyca on the go */}
          {onTheGo.length > 0 && (
            <div>
              <div className="footer-ul-header">
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
