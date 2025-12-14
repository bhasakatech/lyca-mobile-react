// Recharge.jsx
import './Recharge.css';
import React, { useState, useRef } from 'react';
import deleteIcon from "../../fonts/GT-Eesti/delete.svg";
import left from "../../fonts/GT-Eesti/arrowLeft.svg";
import right from "../../fonts/GT-Eesti/arrow-right.svg";

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

  const scrollLeft = () => { plansRef.current?.scrollBy({ left: -220, behavior: 'smooth' }); };
  const scrollRight = () => { plansRef.current?.scrollBy({ left: 220, behavior: 'smooth' }); };

  return (
    <div className="recharge-container">
      <div className="recharge-header"><h1>{title}</h1><p>{description}</p></div>

      <div className="recharge-section">
        <h2 className="recharge-section-title">{operatorTitle}</h2>
        <div className="recharge-phone-input-wrapper">
          <span className="recharge-phone-prefix">{countryCode}</span>
          <input type="text" placeholder={phonePlaceholder} value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} className="recharge-phone-input"/>
        </div>
        <p className="recharge-verify-text">{verifyText}</p>
      </div>

      {/* Plans Section */}
      <div className="recharge-section">
        <div className="recharge-section-header">
          <h2 className="recharge-section-title" style={{ margin: 0 }}>{plansTitle}</h2>
          <div className="recharge-price-display"><span className="recharge-price-amount">$0.00</span><img src={deleteIcon} alt="delete"/></div>
        </div>

        <div className="recharge-tabs">
          <button onClick={() => setActiveTab('30days')} className={`recharge-tab ${activeTab==='30days'?'recharge-active':''}`}>30 days plans</button>
          <button onClick={() => setActiveTab('long')} className={`recharge-tab ${activeTab==='long'?'recharge-active':''}`}>Long term plans</button>
          <button onClick={() => setActiveTab('data')} className={`recharge-tab ${activeTab==='data'?'recharge-active':''}`}>Data plans</button>
        </div>

        <div className="recharge-plans-wrapper">
          <div className="recharge-plans-container" ref={plansRef}>
            {plans[activeTab]?.map((plan, idx) => (
              <div key={idx} onClick={() => setSelectedPlan(idx)} className={`recharge-plan-card ${selectedPlan===idx?'recharge-selected':''}`}>
                <div className="recharge-plan-data">{plan.data}</div>
                <div className="recharge-plan-price">{plan.price}</div>
                <div className="recharge-plan-validity">{plan.validity}</div>
              </div>
            ))}
          </div>
          <button className="recharge-nav-button recharge-nav-button-right" onClick={scrollLeft}><img src={left} alt="left"/></button>
          <button className="recharge-nav-button recharge-nav-button-left" onClick={scrollRight}><img src={right} alt="right"/></button>
        </div>
      </div>

      {/* TopUp Section */}
      <div className="recharge-section">
        <div className="recharge-section-header">
          <h2 className="recharge-section-title">{topupTitle}</h2>
          <div className="recharge-price-display"><span className="recharge-price-amount">$0.00</span><img src={deleteIcon} alt="delete"/></div>
        </div>
        <div className="recharge-amount-grid">
          {topUpAmounts.map((item, idx) => (
            <button key={idx} onClick={() => setSelectedAmount(idx)} className={`recharge-plan-card ${selectedAmount===idx?'recharge-selected':''}`}>
              <div className="recharge-plan-data">{item.amount}</div>
              <div className="recharge-plan-validity recharge-amount-validity">{item.label}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Payment & Summary */}
      <div className="recharge-section"><h2 className="recharge-section-title">{paymentTitle}</h2><p className="recharge-payment-description">{paymentDescription}</p></div>

      <div className="recharge-section recharge-order-summary" style={{borderBottom:'none'}}>
        <h2>Order summary</h2>
        <div className="recharge-summary-row"><span>{feeLabel}</span><span>$0.00</span></div>
        <div className="recharge-total-row"><span>Total</span><span>$0.00</span></div>
      </div>

      <div className="recharge-section">
        <p className="recharge-terms-text">{termsText}</p>
        <button className="recharge-confirm-button">{ctaText}</button>
      </div>
    </div>
  );
}





// import './Recharge.css'
// import React, { useState, useRef } from 'react';

// import deleteIcon from "../../fonts/GT-Eesti/delete.svg"
// import left from "../../fonts/GT-Eesti/arrowLeft.svg"
// import right from "../../fonts/GT-Eesti/arrow-right.svg"


// export default function Recharge(props) {

//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [selectedPlan, setSelectedPlan] = useState(null);
//   const [selectedAmount, setSelectedAmount] = useState(null);
//   const [activeTab, setActiveTab] = useState('30days');

//   const plansRef = useRef(null);

//   const scrollLeft = () => {
//     if (plansRef.current) {
//       plansRef.current.scrollBy({
//         left: -220,
//         behavior: 'smooth'
//       });
//     }
//   };

//   const scrollRight = () => {
//     if (plansRef.current) {
//       plansRef.current.scrollBy({
//         left: 220,
//         behavior: 'smooth'
//       });
//     }
//   };


//   const plans = {
//     '30days': [
//       { data: '500MB', price: '$15.00', validity: '30 days' },
//       { data: '12GB', price: '$20.00', validity: '30 days' },
//       { data: '5GB', price: '$25.00', validity: '30 days' },
//       { data: '12GB', price: '$35.00', validity: '30 days' },
//       { data: '15GB', price: '$50.00', validity: '30 days' },
//       { data: '12GB', price: '$35.00', validity: '30 days' },
//       { data: '15GB', price: '$50.00', validity: '30 days' }
//     ],
//     'long': [
//       { data: '12GB', price: '$20.00', validity: '3 months' },
//       { data: 'Unlimited', price: '$25.00', validity: '3 months' },
//       { data: 'Unlimited', price: '$50.00', validity: '3 months' }
//     ],
//     'data': [
//       { data: '12GB', price: '$20.00' },
//       { data: '12GB', price: '$20.00' }
//     ]
//   };

//   const topUpAmounts = [
//     { amount: '$10.00', label: 'Min save' },
//     { amount: '$20.00', label: 'Credit only' },
//     { amount: '$50.00', label: 'Credit only' },
//     { amount: '$100.00', label: 'Credit only' }
//   ];

//   return (
//     <div className="recharge-container">

//       {/* Header */}
//       <div className="recharge-header">
//         <h1>Recharge</h1>
//         <p>Get the best of top-up & plan in one go</p>
//       </div>

//       {/* Phone Number Section */}
//       <div className="recharge-section">
//         <h2 className="recharge-section-title">LycaMobile</h2>
//         <div className="recharge-phone-input-wrapper">
//           <span className="recharge-phone-prefix">+1</span>
//           <input
//             type="text"
//             placeholder="Enter a LycaMobile number"
//             value={phoneNumber}
//             onChange={(e) => setPhoneNumber(e.target.value)}
//             className="recharge-phone-input"
//           />
//         </div>
//         <p className="recharge-verify-text">
//           Want to see saved cards? <span className="recharge-verify-link">Verify your number</span>
//         </p>
//       </div>

//       {/* Plans Section */}
//       <div className="recharge-section">
//         <div className="recharge-section-header">
//           <h2 className="recharge-section-title" style={{ margin: 0 }}>Save more with SIM only plan</h2>
//           <div className="recharge-price-display">
//             <span className="recharge-price-amount">$0.00</span>
//             <img src={deleteIcon} />
//           </div>
//         </div>

//         {/* Tabs */}
//         <div className="recharge-tabs">
//           <button
//             onClick={() => setActiveTab('30days')}
//             className={`recharge-tab ${activeTab === '30days' ? 'recharge-active' : ''}`}
//           >
//             30 days plans
//           </button>
//           <button
//             onClick={() => setActiveTab('long')}
//             className={`recharge-tab ${activeTab === 'long' ? 'recharge-active' : ''}`}
//           >
//             Long term plans
//           </button>
//           <button
//             onClick={() => setActiveTab('data')}
//             className={`recharge-tab ${activeTab === 'data' ? 'recharge-active' : ''}`}
//           >
//             Data plans
//           </button>
//         </div>



//         {/* Plan Cards */}
//         <div className="recharge-plans-wrapper">
//           <div className="recharge-plans-container" ref={plansRef}>
//             {plans[activeTab].map((plan, index) => (
//               <div
//                 key={index}
//                 onClick={() => setSelectedPlan(index)}
//                 className={`recharge-plan-card ${selectedPlan === index ? 'recharge-selected' : ''}`}
//               >
//                 <div className="recharge-plan-data">{plan.data}</div>
//                 <div className="recharge-plan-price">{plan.price}</div>
//                 <div className="recharge-plan-validity">{plan.validity}</div>
//               </div>
//             ))}
//           </div>

//           {/* Navigation Arrows */}


//           <button
//             className="recharge-nav-button recharge-nav-button-right"
//             onClick={scrollLeft}
//           >
//             <img src={left} className="recharge-icon-img" />
//           </button>
//           <button
//             className="recharge-nav-button recharge-nav-button-left"
//             onClick={scrollRight}
//           >
//             <img src={right} className="recharge-icon-img" />
//           </button>
//         </div>

//       </div>

//       {/* Top Up Section */}
//       <div className="recharge-section">
//         <div className="recharge-section-header">
//           <h2 className="recharge-section-title" style={{ margin: 0 }}>Top up your credit now</h2>
//           <div className="recharge-price-display">
//             <span className="recharge-price-amount">$0.00</span>
//             <img src={deleteIcon} />
//           </div>
//         </div>


//         {/* Amount Buttons */}
//         <div className="recharge-amount-grid">
//           {topUpAmounts.map((item, index) => (
//             <button
//               key={index}
//               onClick={() => setSelectedAmount(index)}
//               className={`recharge-plan-card ${selectedAmount === index ? 'recharge-selected' : ''}`}
//             >
//               <div className="recharge-plan-data">{item.amount}</div>
//               <div className="recharge-plan-validity recharge-amount-validity">{item.label}</div>
//             </button>
//           ))}
//         </div>
//       </div>

//       {/* Payment Details */}
//       <div className="recharge-section">
//         <h2 className="recharge-section-title">Payment details</h2>
//         <p className="recharge-payment-description">Choose from debit card, credit card or alternate payment methods</p>
//       </div>

//       {/* Order Summary */}
//       <div className="recharge-section recharge-order-summary" style={{ borderBottom: 'none' }}>
//         <h2 className="recharge-section-title">Order summary</h2>
//         <div className="recharge-summary-row">
//           <span className="recharge-summary-label">Regulatory recovery fees 6%</span>
//           <span className="recharge-summary-value">$0.00</span>
//         </div>
//         <div className="recharge-total-row">
//           <span>Total</span>
//           <span>$0.00</span>
//         </div>
//       </div>
//       <div className="recharge-section">
//         {/* Terms */}
//         <p className="recharge-terms-text">
//           By continuing, I agree to the LycaMobile{' '}
//           <span className="recharge-terms-link">Terms & Conditions</span>,{' '}
//           <span className="recharge-terms-link">Privacy Policy</span> &{' '}
//           <span className="recharge-terms-link">Payment Terms</span>
//         </p>

//         {/* Submit Button */}
//         <button className="recharge-confirm-button">
//           Confirm & pay $0.00
//         </button>
//       </div>

//     </div>
//   );
// }