import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './PrepaidCards.css';
import tick from "../../fonts/GT-Eesti/tick.svg"
import { useGlobal } from '../../context/GlobalContext';

export const plansData = {
  bestValue: [],
  longTermPlans: []
};


export default function PrepaidCards(props) {
  const {
    heading,
    description,
    bestValueLabel,
    longTermLabel,
    plans,
    existingTitle,
    existingOptions,
    containerProps
  } = props;

  console.log(props, "prepaidCards")

  const [planTabs, setPlanTabs] = useState('bestValue');
  const [currentPlans, setCurrentPlans] = useState(plans || []);

  const { cartItems, setCartItems, buyItem, setBuyItem } = useGlobal();

  // Hardcoded long-term plans
  const longTermPlans = [
    {
      id: 101,
      planTag: 'Business Plan',
      price: '$99.0',
      duration: '/30 days',
      data: 'Unlimited',
      esimNote: "Get Immediate Activation with eSIM",
      benefits: [
        { text: 'Unlimited Talk & Text' },
        { text: 'Unlimited data' },
        { text: 'Dedicated customer support' }
      ]
    },
    {
      id: 102,
      planTag: 'Travel Plan',
      price: '$59.0',
      duration: '/30 days',
      esimNote: "Get Immediate Activation with eSIM",
      data: '15GB',
      benefits: [
        { text: 'Unlimited Talk & Text' },
        { text: 'International Minutes and Texts to 100 Countries' },
        { text: 'Roaming included' }
      ]
    },
    {
      id: 103,
      planTag: 'Data Only Plan',
      price: '$19.0',
      duration: '/30 days',
      esimNote: "Get Immediate Activation with eSIM",
      data: '20GB',
      benefits: [
        { text: 'High-speed data up to 20GB' },
        { text: 'No talk & text' },
        { text: 'Perfect for tablets & hotspots' }
      ]
    },
    {
      id: 104,
      planTag: 'Basic Plan',
      price: '$15.0',
      duration: '/30 days',
      esimNote: "Get Immediate Activation with eSIM",
      data: '2GB',
      benefits: [
        { text: 'Talk & Text included' },
        { text: 'High-speed data up to 2GB' },
        { text: 'Affordable option for light users' }
      ]
    },
    {
      id: 105,
      planTag: 'Unlimited Basic',
      price: '$29.0',
      duration: '/30 days',
      esimNote: "Get Immediate Activation with eSIM",
      data: '10GB',
      benefits: [
        { text: 'Unlimited Talk & Text' },
        { text: 'High-speed data up to 10GB' },
        { text: 'International texts to 50 Countries' }
      ]
    }
  ];

  // Store plans for debugging or reuse
  useEffect(() => {
    plansData.bestValue = plans;
    plansData.longTermPlans = longTermPlans;
  }, [plans]);

  const addingBasket = (plan) => {
    setCartItems((prev) => {
      const updatedCart = [...prev, plan];
      localStorage.setItem(
        "cartPlanItems",
        JSON.stringify(updatedCart)
      );
      return updatedCart;
    });
  };


  const itemToBuy = (plan) => {
    setBuyItem(plan)
    localStorage.setItem("user", JSON.stringify(plan));
    const storedUser = JSON.parse(localStorage.getItem("user"));

    console.log("storedUser", storedUser);

  }

  console.log("plansArray :: ", currentPlans);
  console.log("cartItems :: ", cartItems);
  // Render plans dynamically
  const renderPlans = (plansArray) =>
    plansArray.map((plan, index) => (
      <React.Fragment key={plan.id || plan.planTag || index}>



        <div className="plan-card">
          <div className="plan-upper-card">
            <div className="plan-card-head">
              <div className="plan-type">
                <h2>{plan.title || plan.planTag}</h2>
              </div>
              <div className="plan-row">&nbsp;</div>
              <div className="plan-price">
                <div className="unlimited-data">
                  <span>{plan.authoringLabel || plan.data}</span>
                  <span>Data</span>
                </div>
                <div className="price">
                  <span>{plan.price}</span>
                  <span>{plan.duration}</span>
                </div>
              </div>
            </div>

            <div className="plan-card-benifits">
              {(plan.features || plan.benefits || []).map((feature, idx) => (
                <div className="benifit-row" key={idx}>
                  <img src={tick} alt="tick" />
                  <p>{feature.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="plan-lower-card">
            <div className="plan-btns">
              <div className="view-more">
                <button>
                  <Link
                    to="/content/lyca-mobile/us/en/plan-details.html"
                    className="plan-card-link"
                    onClick={() => {
                      localStorage.setItem(
                        'selectedPlanId',
                        plan.planTag || String(plan.id)
                      );
                      localStorage.setItem(
                        'selectedPlan',
                        JSON.stringify(plan)
                      );
                    }}
                  ><p>View More</p></Link>

                  <span></span>
                </button>
              </div>
              <div className="select-btns">
                <button className="add-basket" onClick={() => (addingBasket(plan))}>
                  <p>{plan.basketCta || "Add to basket"}</p>
                  <span></span>
                </button>
                <Link to="/content/lyca-mobile/us/en/home/cart.html" onClick={() => window.scrollTo(0, 0)}>
                  <button className="buy-now" onClick={() => itemToBuy(plan)}>
                    <p>{plan.buyCta || "Buy now"}</p>
                    <span></span>
                  </button>
                </Link>
              </div>
            </div>
            <div className="activation">
              <div>{plan.esimNote}</div>
            </div>
          </div>
        </div>


        {index === 1 && (
          <div className="option-card-container">
            <div className="option-card-main">
              <div className="option-details-card">
                <div className="option-detail-main">
                  <h1>
                    <span>{existingTitle}</span>
                  </h1>
                  {existingOptions.map((option, idx) => (
                    <p key={idx}>
                      <img src="https://cms-pim-assets-dev.ldsvcplatform.com/IRE/s3fs-public/inline-images/Path%20%281%29.png" />
                      {option.text}
                    </p>
                  ))}
                </div>
              </div>
              <div className="option-promotion-card">
                <img src="https://cms-assets.ldsvcplatform.com/USA/s3fs-public/2024-02/TopUp%201%20%282%29.png?VersionId=uW1IrHzuZhrYLO3foqU.zogD9STFMjQW" />
              </div>
            </div>
          </div>
        )}

      </React.Fragment>
    ));

  // Handle tab switching
  const handleTabChange = (tab) => {
    setPlanTabs(tab);
    if (tab === 'bestValue') {
      setCurrentPlans(plans);
    } else {
      setCurrentPlans(longTermPlans);
    }
  };

  return (
    <section {...containerProps}>
      <div className="prepaid-sim-phone">
        <h1 className="prepaid-card-heading">{heading}</h1>
        <p id="prepaid-description">{description}</p>
      </div>

      <div className="tab-switch">
        <div className="tab-switch-container">
          <div className="tabs">
            <button
              className={planTabs === 'bestValue' ? 'best-value-btn' : 'long-term-plans-btn'}
              onClick={() => handleTabChange('bestValue')}
            >
              {bestValueLabel}
            </button>
            <button
              className={planTabs === 'longTermPlans' ? 'best-value-btn' : 'long-term-plans-btn'}
              onClick={() => handleTabChange('longTermPlans')}
            >
              {longTermLabel}
            </button>
          </div>
        </div>
      </div>

      <div className="sim-plan-cards">
        <div className="sim-plan-container">
          {renderPlans(currentPlans)}
        </div>
      </div>

    </section>
  );
}
