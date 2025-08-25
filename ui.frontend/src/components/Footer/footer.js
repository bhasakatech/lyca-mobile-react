import React from "react";
import './footer.css';
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container">
          <div className="footer-content">

            {/* Section 1: Join Lyca Mobile */}
            <div>
              <div className="footer-ul-header">
                <h2>Join Lyca mobile</h2>
                <img loading="lazy" src="/content/dam/lyca-mobile/assets/arrow-down-circle.e8d1ba6f.svg" alt="" />
              </div>
              <ul>
                <li><a href="#">prepaid plans</a></li>
                <li><a href="#">Free SIM</a></li>
                <li><a href="#">California MTS</a></li>
                <li><a href="#">Become a retailer</a></li>
                <li><a href="#">Student offers</a></li>
                <li><a href="#">Register on our website</a></li>
                <li><a href="#">Lycamobile Reviews</a></li>
              </ul>
            </div>

            {/* Section 2: Quick Links */}
            <div>
              <div className="footer-ul-header">
                <h2>Quick links</h2>
                <img loading="lazy" src="/content/dam/lyca-mobile/assets/arrow-down-circle.e8d1ba6f.svg" alt="" />
              </div>
              <ul>
                <li><a href="#">Rates</a></li>
                <li><a href="#">Quick recharge</a></li>
                <li><a href="#">Coverage & services</a></li>
                <li><a href="#">Activate your plan</a></li>
                <li><a href="#">Plan changes update</a></li>
                <li><a href="#">Use of this website</a></li>
                <li><a href="#">Refer a Friend</a></li>
              </ul>
            </div>

            {/* Section 3: Help & Support */}
            <div>
              <div className="footer-ul-header">
                <h2>Help & support</h2>
                <img  loading="lazy" src="/content/dam/lyca-mobile/assets/arrow-down-circle.e8d1ba6f.svg" alt="" />
              </div>
              <ul>
                <li><a href="#">Contact us</a></li>
                <li><a href="#">Security</a></li>
                <li><a href="#">Cookie policy</a></li>
                <li><a href="#">Port-in status</a></li>
                <li><a href="#">Mobile web settings</a></li>
                <li><a href="#">FAQ</a></li>
              </ul>
            </div>

            {/* Section 4: Lyca Mobile US */}
            <div>
              <div className="footer-ul-header">
                <h2>Lyca Mobile US</h2>
                <img loading="lazy" src="/content/dam/lyca-mobile/assets/arrow-down-circle.e8d1ba6f.svg" alt="" />
              </div>
              <ul>
                <li><a href="#">About us</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Privacy policy</a></li>
                <li><a href="#">Network Management Policy</a></li>
                <li><a href="#">Terms and conditionse</a></li>
                <li><a href="#">California billing notice</a></li>
                <li><a href="#">Become a Lyca Mobile retailer</a></li>
                <li><a href="#">2G Shutdown</a></li>
              </ul>
            </div>

            <hr className="footer-list-hr" />

            {/* Section 5: Lyca on the go */}
            <div>
              <div className="footer-ul-header">
                <h2>Lyca on the go</h2>
              </div>
              <ul>
                <li>
                  <a href="#">
                    <img loading="lazy" src="/content/dam/lyca-mobile/assets/Gpay.jpg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img loading="lazy" src="/content/dam/lyca-mobile/assets/AppStore.jpg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img loading="lazy" src="/content/dam/lyca-mobile/assets/StoreLocator.jpg" alt="" />
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        <hr />

        {/* Footer Signature */}
        <div className="footer-signature">
          <div className="footer-signature-container">
            <div>
              <img loading="lazy" src="/content/dam/lyca-mobile/assets/lyca-mobile-logo.jpg" alt="" />
              <br />
            </div>
            <div>© 2025 Lycamobile USA Inc. All rights reserved.</div>
            <div>
              <a href="#"><img  loading="lazy" src="/content/dam/lyca-mobile/assets/fb.jpg" alt="" /></a>
              <a href="#"><img loading="lazy" src="/content/dam/lyca-mobile/assets/twitter.jpg" alt="" /></a>
              <a href="#"><img loading="lazy" src="/content/dam/lyca-mobile/assets/Insta.jpg" alt="" /></a>
            </div>
          </div>
        </div>
      </footer>

      {/* Go to Top Button */}
      <button className="go-to-top-button">
        <a href="#">
          <img  src="/content/dam/lyca-mobile/assets/goToTopHomeIcon.4eba1f71.svg" alt="" loading="lazy" />
        </a>
      </button>

      {/* access container*/}
      <section className="access-container">
    <button>
      <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 131.3"
  part="acsb-trigger-icon-svg" data-testid="base-icon-svg" style={{ display: 'inline-flex' }}>
  <path d="M71.6 131.3c1 0 2.1-.3 3.1-.8 3.9-1.8 5.5-6.2 3.6-10.1 0 0-14.3-32.7-16.9-44.7-1-4.2-1.6-15.3-1.8-20.5 0-1.8 1-3.4 2.6-3.9l32-9.6c3.9-1 6.2-5.5 5.2-9.4-1-3.9-5.5-6.2-9.4-5.2 0 0-29.6 9.6-40.3 9.6-10.4 0-39.8-9.4-39.8-9.4-3.9-1-8.3.8-9.6 4.7-1.3 4.2 1 8.6 5.2 9.6l32 9.6c1.6.5 2.9 2.1 2.6 3.9-.3 5.2-.8 16.4-1.8 20.5-2.6 12-16.9 44.7-16.9 44.7-1.8 3.9 0 8.3 3.6 10.1 1 .5 2.1.8 3.1.8 2.9 0 5.7-1.6 6.8-4.4l15.3-31.2L64.8 127c1.3 2.7 3.9 4.3 6.8 4.3z"/>
</svg>

    </button>
  </section>
    </>
  );
};

export default Footer;
