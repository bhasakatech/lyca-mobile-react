import './PlanDetails.css';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { plansData } from '../PrepaidCards/PrepaidCards';

export default function PlanDetails() {
  const location = useLocation();
  const query = queryString.parse(location.search);
  const planId = Number(query.planId);

  const allPlans = [...plansData.bestValue, ...plansData.longTermPlans];
  const plan = allPlans.find(p => p.id === planId);

  if (!plan) return <p>Plan not found</p>;

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
                <div className="plan-details-gb">{plan.data}</div>
                <div className="plan-details-data-text">Data</div>
              </div>
            </div>

            <div className="plan-details-price">
              <div className="plan-details-price-value">£{plan.price.toFixed(2)}</div>
              <div className="plan-details-price-label">{plan.duration}</div>
            </div>

            <hr className="plan-details-divider" />

            <div className="plan-details-benefit-title">{plan.name}</div>

            <div className="plan-details-benefits">
              <div className="plan-details-benefit-list">
                {plan.benefits.map((b, idx) => (
                  <div className="plan-details-benefit-item" key={idx}>
                    <img src="https://www.lycamobile.co.uk/paymonthly/_next/static/media/greenTick2.ebb6f697.svg" />
                    <p>{b}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="plan-details-buttons">
              <button className="plan-details-btn-buy">
                <p>Buy now</p>
                <span></span>
              </button>

              <button className="plan-details-btn-view">
                <p>View all plans</p>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
