import React from "react";
import './Header.css'
const Header = () => {
  return (
    <header className="header">
      <div className="nav-bar">
        <nav>
          <div className="left-container">
            <button id="lyca-logo">
              <a href="#">
                <img src="/content/dam/lyca-mobile/assets/lyca-logo-img.jpg" alt="Lyca Logo" />
              </a>
            </button>

            <button id="lyca-logo-mobile">
              <a href="#">
                <img src="/content/dam/lyca-mobile/assets/lyca-mobile-img.png" alt="Lyca Mobile Logo" />
              </a>
            </button>

            <button id="menu">
              <img src="/content/dam/lyca-mobile/assets/Menuhs-img.jpg" alt="Menu" />
            </button>

            <div id="tab-container">
              <div id="block-container">
                <ul>
                  <li><a href="#">Plans</a></li>
                  <li><a href="#">Family plan</a></li>
                  <li><a href="#">Help & Support</a></li>
                  <li><a href="#">Refer a Friend</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div id="right-container">
            <button id="quick-recharge">
              <p>
                <a href="#">Quick recharge</a>
              </p>
            </button>

            <button id="profile">
              <img src="/content/dam/lyca-mobile/assets/navBarProfile-img.svg" alt="Profile" />
              &nbsp;&nbsp;
              <img src="/content/dam/lyca-mobile/assets/dropdown-img.svg" alt="Dropdown" id="drop-down" />
            </button>

            <button id="cart">
              <img src="/content/dam/lyca-mobile/assets/Cart-img.svg" alt="Cart" />
            </button>

            <button id="country">
              <span>EN</span>
              <img src="/content/dam/lyca-mobile/assets/United-States1-img.png" alt="US Flag" id="us" />
              <img src="/content/dam/lyca-mobile/assets/dropdown-img.svg" alt="Dropdown" id="drop-down" />
              &nbsp;
            </button>
          </div>

          <div id="menu-mobile">
            <a href="#">
              <img src="/content/dam/lyca-mobile/assets/Menuhs-img.jpg" alt="Menu Mobile" />
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
