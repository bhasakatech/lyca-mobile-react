import React from "react";
import './Header.css'

import { Link } from "react-router-dom/cjs/react-router-dom.min";
import CartSection from "../CartSection/CartSection";
import { useGlobal } from "../../context/GlobalContext";


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
  const {cartItems}=useGlobal();
  return (
    <header className="header">
      <div className="nav-bar">
        <nav>
          <div className="left-container">
            <button id="lyca-logo">
              <Link to="/content/lyca-mobile/us/en/home.html" onClick={() => window.scrollTo(0, 0)}>
                <img loading="lazy" src={logoImage} alt="Lyca Logo" />
              </Link>
            </button>

            <button id="lyca-logo-mobile">
              <Link to="/content/lyca-mobile/us/en/home.html" onClick={() => window.scrollTo(0, 0)}>
                <img loading="lazy" src={logoMobileImage} alt="Lyca Mobile Logo" />
              </Link>
            </button>

            {/* <button id="menu">
              <img loading="lazy" src={menuImage} alt="Menu" />
            </button> */}

            <div id="tab-container">
              <div id="block-container">
                <ul>
                  
                    <li>
                      
                      <Link to="/content/lyca-mobile/us/en/home/buy-sim---plan.html" onClick={() => window.scrollTo(0, 0)}>{linkLabel[0]}</Link>
                    </li>

                     <li>
                      
                      <Link to="/content/lyca-mobile/us/en/help-support.html" onClick={() => window.scrollTo(0, 0)}>{linkLabel[1]}</Link>
                    </li>
                 
                </ul>
              </div>
            </div>
          </div>

          <div id="right-container">
            <button id="quick-recharge">
              <p>
                {/* <a href="#">{quickRechargeLabel}</a> */}
                <Link to="/content/lyca-mobile/us/en/quick-top-up.html" onClick={() => window.scrollTo(0, 0)}>{quickRechargeLabel}</Link>
              </p>
            </button>

         

            <Link to="/content/lyca-mobile/us/en/home/cart.html" onClick={() => window.scrollTo(0, 0)}>
            <button id="cart">
              <img loading="lazy" src={cartImage} alt="Cart" />
              <div className={cartItems.length === 0 ? "":"cart-superscript"}>{cartItems.length === 0 ? "":cartItems.length}</div>
            </button>
            </Link>

            <button id="country">
              <span>EN</span>
              <img loading="lazy" src={countryImage} alt="US Flag" id="us" />

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