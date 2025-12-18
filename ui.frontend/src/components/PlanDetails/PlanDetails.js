import './PlanDetails.css';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { plansData } from '../PrepaidCards/PrepaidCards';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import { useGlobal } from '../../context/GlobalContext';

export default function PlanDetails() {
  const location = useLocation();
  const query = queryString.parse(location.search);
  const planId = localStorage.getItem('selectedPlanId');

  const { cartItems, setCartItems, buyItem, setBuyItem } = useGlobal();
  const allPlans = [
    ...plansData.bestValue,
    ...plansData.longTermPlans
  ];

  const plan = allPlans.find(
    p => p.planTag === planId || String(p.id) === planId
  );

  const itemToBuy = (plan) => {
    setBuyItem(plan)
    localStorage.setItem("user", JSON.stringify(plan));
    const storedUser = JSON.parse(localStorage.getItem("user"));

    console.log("storedUser", storedUser);

  }

  if (!plan) {
    return (
      <div className="empty-cart">
        <h2>Currently the basket is empty</h2>
        <p>We have a wide range of plans to choose from</p>

        <Link to="/content/lyca-mobile/us/en/home/buy-sim---plan.html" onClick={() => window.scrollTo(0, 0)}>
          <div className="buy-box">
            <button className="buy-btn">
              Buy a new line now <span>→</span>
            </button>
          </div>
        </Link>


      </div>)
  }


  return (
    <section className="plan-details-section">
      <div className="plan-details-container">
        <div className="plan-details-wrapper">
          <div className="plan-details-left">
            <img src="https://pim-assets-paym.globalldplatform.com/_default_upload_bucket/PDP%20page%20banner_411X352_1x_5_11zon_3.webp" />
          </div>

          <div className="plan-details-right">
            <div className="plan-details-offer">
              <div className="plan-details-offer-text">Free OPPO Voucher</div>
            </div>

            <div className="plan-details-sim">
              <img src="https://pim-assets-paym.globalldplatform.com/_default_upload_bucket/eSIM%201%20%285%29_10.png" />
              <img src="https://pim-assets-paym.globalldplatform.com/_default_upload_bucket/5G%201%20%286%29_8.png" />
            </div>

            <div className="plan-details-data">
              <div className="plan-details-data-row">
                <div className="plan-details-gb">
                  {plan.authoringLabel || plan.data}
                </div>

                <div className="plan-details-data-text">Data</div>
              </div>
            </div>

            <div className="plan-details-price">
              <div className="plan-details-price-value">
                {plan.price}
              </div>

              <div className="plan-details-price-label">{plan.duration}</div>
            </div>

            <hr className="plan-details-divider" />

            <div className="plan-details-benefit-title">
              {plan.title || plan.name}
            </div>


            <div className="plan-details-benefits">
              <div className="plan-details-benefit-list">
                {(plan.features || plan.benefits).map((b, idx) => (
                  <div key={idx} className="plan-details-benefit-item">
                    <img src="https://www.lycamobile.co.uk/paymonthly/_next/static/media/greenTick2.ebb6f697.svg" />
                    <p>{b.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="plan-details-buttons">
              <Link to="/content/lyca-mobile/us/en/home/cart.html" onClick={() => window.scrollTo(0, 0)}>
                <button className="plan-details-btn-buy" onClick={() => itemToBuy(plan)}>
                  <p>Buy now</p>
                  <span></span>
                </button>
              </Link>
              <Link to="/content/lyca-mobile/us/en/home/buy-sim---plan.html" onClick={() => window.scrollTo(0, 0)}>
                <button className="plan-details-btn-view">
                  <p>View all plans</p>
                  <span></span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>)
}
