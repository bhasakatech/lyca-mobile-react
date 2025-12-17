// Recharge.jsx
import './Recharge.css';
import React, { useState, useRef } from 'react';

export default function Recharge(props) {
  const {
    title,
    description,
    operatorTitle,
    countryCode,
    phonePlaceholder,
    verifyText,
    plansTitle,
    plans = {},
    topUpAmounts = [],
    topupTitle,
    paymentTitle,
    paymentDescription,
    feeLabel,
    termsText,
    ctaText
  } = props;

  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [activeTab, setActiveTab] = useState('30days');

  const plansRef = useRef(null);

  /* ============================
     VALIDATION & CALCULATIONS
  ============================ */
  const isValidMobile = phoneNumber.length === 10;

  const selectedPlanPrice =
    selectedPlan !== null && plans[activeTab]
      ? Number(plans[activeTab][selectedPlan].price.replace('$', ''))
      : 0;

  const selectedTopupPrice =
    selectedAmount !== null
      ? Number(topUpAmounts[selectedAmount].amount.replace('$', ''))
      : 0;

  const totalAmount = selectedPlanPrice || selectedTopupPrice;

  const scrollLeft = () => {
    plansRef.current?.scrollBy({ left: -220, behavior: 'smooth' });
  };

  const scrollRight = () => {
    plansRef.current?.scrollBy({ left: 220, behavior: 'smooth' });
  };

  return (
    <div className="recharge-container">
      {/* HEADER */}
      <div className="recharge-header">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>

      {/* MOBILE INPUT */}
      <div className="recharge-section">
        <h2 className="recharge-section-title">{operatorTitle}</h2>
        <div className="recharge-phone-input-wrapper">
          <span className="recharge-phone-prefix">{countryCode}</span>
          <input
            type="text"
            placeholder={phonePlaceholder}
            value={phoneNumber}
            maxLength={10}
            onChange={(e) => {
              const value = e.target.value.replace(/\D/g, '');
              setPhoneNumber(value);
            }}
            className="recharge-phone-input"
          />
        </div>
      </div>

      {/* PLANS SECTION */}
      <div className="recharge-section">
        <div className="recharge-section-header">
          <h2 className="recharge-section-title">{plansTitle}</h2>
          <div className="recharge-price-display">
            <span className="recharge-price-amount">
              ${selectedPlanPrice.toFixed(2)}
            </span>
          </div>
        </div>

        <div className="recharge-tabs">
          <button
            onClick={() => setActiveTab('30days')}
            className={`recharge-tab ${activeTab === '30days' ? 'recharge-active' : ''}`}
          >
            30 days plans
          </button>
          <button
            onClick={() => setActiveTab('long')}
            className={`recharge-tab ${activeTab === 'long' ? 'recharge-active' : ''}`}
          >
            Long term plans
          </button>
          <button
            onClick={() => setActiveTab('data')}
            className={`recharge-tab ${activeTab === 'data' ? 'recharge-active' : ''}`}
          >
            Data plans
          </button>
        </div>

        <div
          className="recharge-plans-wrapper"
          style={{
            opacity: isValidMobile ? 1 : 0.3,
            pointerEvents: isValidMobile ? 'auto' : 'none'
          }}
        >
          <div className="recharge-plans-container" ref={plansRef}>
            {plans[activeTab]?.map((plan, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setSelectedPlan(idx);
                  setSelectedAmount(null);
                }}
                className={`recharge-plan-card ${
                  selectedPlan === idx ? 'recharge-selected' : ''
                }`}
              >
                <div className="recharge-plan-data">{plan.data}</div>
                <div className="recharge-plan-price">{plan.price}</div>
                <div className="recharge-plan-validity">{plan.validity}</div>
              </div>
            ))}
          </div>

        
        </div>
      </div>

      {/* TOP-UP SECTION */}
      <div className="recharge-section">
        <div className="recharge-section-header">
          <h2 className="recharge-section-title">{topupTitle}</h2>
          <div className="recharge-price-display">
            <span className="recharge-price-amount">
              ${selectedTopupPrice.toFixed(2)}
            </span>
          </div>
        </div>

        <div
          className="recharge-amount-grid"
          style={{
            opacity: isValidMobile ? 1 : 0.3,
            pointerEvents: isValidMobile ? 'auto' : 'none'
          }}
        >
          {topUpAmounts.map((item, idx) => (
            <button
              key={idx}
              onClick={() => {
                setSelectedAmount(idx);
                setSelectedPlan(null);
              }}
              className={`recharge-plan-card ${
                selectedAmount === idx ? 'recharge-selected' : ''
              }`}
            >
              <div className="recharge-plan-data">{item.amount}</div>
              <div className="recharge-plan-validity recharge-amount-validity">
                {item.label}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* PAYMENT */}
      <div className="recharge-section">
        <h2 className="recharge-section-title">{paymentTitle}</h2>
        <p className="recharge-payment-description">{paymentDescription}</p>
      </div>

      {/* ORDER SUMMARY */}
      <div className="recharge-section recharge-order-summary" style={{ borderBottom: 'none' }}>
        <h2>Order summary</h2>
        <div className="recharge-summary-row">
          <span>{feeLabel}</span>
          <span>$0.00</span>
        </div>
        <div className="recharge-total-row">
          <span>Total</span>
          <span>${totalAmount.toFixed(2)}</span>
        </div>
      </div>

      {/* CTA */}
      <div className="recharge-section">
        <p className="recharge-terms-text">{termsText}</p>
        <button
          className="recharge-confirm-button"
          disabled={!isValidMobile || totalAmount === 0}
          style={{
            pointerEvents: isValidMobile && totalAmount ? 'auto' : 'none'
          }}
        >
          {ctaText}
        </button>
      </div>
    </div>
  );
}
