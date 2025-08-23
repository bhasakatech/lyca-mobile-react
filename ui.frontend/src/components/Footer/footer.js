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
                <img src="/content/dam/lyca-mobile/assets/arrow-down-circle.e8d1ba6f.svg" alt="" />
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
                <img src="/content/dam/lyca-mobile/assets/arrow-down-circle.e8d1ba6f.svg" alt="" />
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
                <img src="/content/dam/lyca-mobile/assets/arrow-down-circle.e8d1ba6f.svg" alt="" />
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
                <img src="/content/dam/lyca-mobile/assets/arrow-down-circle.e8d1ba6f.svg" alt="" />
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
                    <img src="/content/dam/lyca-mobile/assets/Gpay.jpg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/content/dam/lyca-mobile/assets/AppStore.jpg" alt="" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/content/dam/lyca-mobile/assets/StoreLocator.jpg" alt="" />
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
              <img src="/content/dam/lyca-mobile/assets/footer-logo.jpg" alt="" />
              <br />
            </div>
            <div>© 2025 Lycamobile USA Inc. All rights reserved.</div>
            <div>
              <a href="#"><img src="/content/dam/lyca-mobile/assets/fb.jpg" alt="" /></a>
              <a href="#"><img src="/content/dam/lyca-mobile/assets/twitter.jpg" alt="" /></a>
              <a href="#"><img src="/content/dam/lyca-mobile/assets/Insta.jpg" alt="" /></a>
            </div>
          </div>
        </div>
      </footer>

      {/* Go to Top Button */}
      <button className="go-to-top-button">
        <a href="#">
          <img src="" alt="" loading="lazy" />
        </a>
      </button>
    </>
  );
};

export default Footer;
