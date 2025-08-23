import React from 'react';
import './countrycarousel.css';

const InternationalCalls = () => {
  return (
    <section className="international-calls-section">
      <div className="international-calls">

        <div className="international-calls-heading">
          <h3>Cheap international calls for everyone</h3>
          <img src="/content/dam/lyca-mobile/assets/arrow-down-circle.e8d1ba6f.svg" alt="" />
        </div>

        <div className="international-calls-icon-container">
          <div className="internatonal-calls-icon">

            <img src="/content/dam/lyca-mobile/assets/leftArrowBlue.4aabcacc.svg" alt="" />

            <div className="international-calls-flag">
              <div className="flag-container">
                <div>
                  <img src="/content/dam/lyca-mobile/assets/India.jpg" alt="India flag" />
                  <p>India</p>
                </div>
              </div>
            </div>

            <div className="international-calls-flag">
              <div className="flag-container">
                <div>
                  <img src="/content/dam/lyca-mobile/assets/malaysia.jpg" alt="Malaysia flag" />
                  <p>Malaysia</p>
                </div>
              </div>
            </div>

            <div className="international-calls-flag">
              <div className="flag-container">
                <div>
                  <img src="/content/dam/lyca-mobile/assets/Flag%20(13).jpg" alt="Nigeria flag" />
                  <p>Nigeria</p>
                </div>
              </div>
            </div>

            <div className="international-calls-flag">
              <div className="flag-container">
                <div>
                  <img src="/content/dam/lyca-mobile/assets/Poland.jpg" alt="Poland flag" />
                  <p>Poland</p>
                </div>
              </div>
            </div>

            <div className="international-calls-flag">
              <div className="flag-container">
                <div>
                  <img src="/content/dam/lyca-mobile/assets/Romania.jpg" alt="Romania flag" />
                  <p>Romania</p>
                </div>
              </div>
            </div>

            <img src="/content/dam/lyca-mobile/assets/rightArrowBlue.beb7ab20.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternationalCalls;
