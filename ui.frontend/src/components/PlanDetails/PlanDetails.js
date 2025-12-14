import './PlanDetails.css';

export default function PlanDetails(props) {
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
                <div className="plan-details-gb">200GB</div>
                <div className="plan-details-data-text">Data</div>
              </div>
            </div>

            <div className="plan-details-price">
              <div className="plan-details-price-value">£12.00</div>
              <div className="plan-details-price-label">monthly</div>
            </div>

            <hr className="plan-details-divider" />

            <div className="plan-details-benefit-title">24 Months 200GB</div>

            <div className="plan-details-benefits">
              <div className="plan-details-benefit-list">

                <div className="plan-details-benefit-item">
                  <img src="https://www.lycamobile.co.uk/paymonthly/_next/static/media/greenTick2.ebb6f697.svg" />
                  <p>12GB EU roaming included</p>
                </div>

                <div className="plan-details-benefit-item">
                  <img src="https://www.lycamobile.co.uk/paymonthly/_next/static/media/greenTick2.ebb6f697.svg" />
                  <p>100 International minutes</p>
                </div>

                <div className="plan-details-benefit-item">
                  <img src="https://www.lycamobile.co.uk/paymonthly/_next/static/media/greenTick2.ebb6f697.svg" />
                  <p>Unlimited EU minutes and texts when roaming in EU (fair use policy applies)</p>
                </div>

                <div className="plan-details-benefit-item">
                  <img src="https://www.lycamobile.co.uk/paymonthly/_next/static/media/greenTick2.ebb6f697.svg" />
                  <p>eSim available</p>
                </div>

                <div className="plan-details-benefit-item">
                  <img src="https://www.lycamobile.co.uk/paymonthly/_next/static/media/greenTick2.ebb6f697.svg" />
                  <p>Unlimited UK minutes and texts</p>
                </div>

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
