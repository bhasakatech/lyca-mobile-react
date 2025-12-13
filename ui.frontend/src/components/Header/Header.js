import React from "react";
import './Header.css'

import { Link } from "react-router-dom/cjs/react-router-dom.min";


const Header = ({
  logoImage,
  menuImage,
  quickRechargeLabel,
  profileImage,
  profileDropdownImage,
  cartImage,
  countryImage,
  logoMobileImage,
  linkLabel,
  menuMobileImage,
  countryDropdownImage
}) => {
  return (
    <header className="header">
      <div className="nav-bar">
        <nav>
          <div className="left-container">
            <button id="lyca-logo">
              <a href="#">
                <img loading="lazy" src={logoImage} alt="Lyca Logo" />
              </a>
            </button>

            <button id="lyca-logo-mobile">
              <a href="#">
                <img loading="lazy" src={logoMobileImage} alt="Lyca Mobile Logo" />
              </a>
            </button>

            <button id="menu">
              <img loading="lazy" src={menuImage} alt="Menu" />
            </button>

            <div id="tab-container">
              <div id="block-container">
                <ul>
                  {linkLabel && linkLabel.map((label, index) => (
                    <li key={index}>
                      {/* <a href="#">{label}</a> */}
                      <Link to="/content/lyca-mobile/us/en/home/buy-sim---plan.html">{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div id="right-container">
            <button id="quick-recharge">
              <p>
                <a href="#">{quickRechargeLabel}</a>
              </p>
            </button>

            <button id="profile">
              <img loading="lazy" src={profileImage} alt="Profile" />
              &nbsp;&nbsp;
              <img loading="lazy" src={profileDropdownImage} alt="Dropdown" id="drop-down" />
            </button>

            <button id="cart">
              <img loading="lazy" src={cartImage} alt="Cart" />
            </button>

            <button id="country">
              <span>EN</span>
              <img loading="lazy" src={countryImage} alt="US Flag" id="us" />
              <img loading="lazy" src={countryDropdownImage} alt="Dropdown" id="drop-down" />
              &nbsp;
            </button>
          </div>

          <div id="menu-mobile">
            <a href="#">
              <img loading="lazy" src={menuMobileImage} alt="Menu Mobile" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;