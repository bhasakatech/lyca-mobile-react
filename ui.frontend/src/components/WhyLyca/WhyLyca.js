import React from "react";
import './WhyLyca.css'
export default function WhyLyca() {
  return (
    <section className="why-lyca">
      <div className="why-lyca-child">
        {/* Header */}
        <div className="why-lyca-child-header">
          <h2>Why Lyca?</h2>
        </div>

        {/* Content Cards */}
        <div className="why-lyca-child-content">
          <div className="why-lyca-child-content-cards">
            <p>
              <img src="/content/dam/lyca-mobile/assets/5g_new_0.jpg" alt="5G" />
            </p>
            <p>
              <strong>Superfast 5G at low cost</strong>
              <br />
              Top-tier service with superfast 5G network at significantly lower
              costs compared to major wireless providers
            </p>
          </div>

          <div className="why-lyca-child-content-cards">
            <p>
              <img
                src="/content/dam/lyca-mobile/assets/No_strings_attached_1%20(1).jpg"
                alt="No strings attached"
              />
            </p>
            <p>
              <strong>No strings attached</strong>
              <br />
              Get unbeatable value with 100% flexibility. No contracts, no
              credit checks or hidden fees.
            </p>
          </div>

          <div className="why-lyca-child-content-cards">
            <p>
              <img
                src="/content/dam/lyca-mobile/assets/Bring_your_own_num_0.jpg"
                alt="Bring your own device"
              />
            </p>
            <p>
              <strong>Bring your own devices (BYOD)</strong>
              <br />
              Bring your unlocked device and your current phone number to Lyca
              Mobile completely hassle free.
            </p>
          </div>

          <div className="why-lyca-child-content-cards">
            <p>
              <img
                src="/content/dam/lyca-mobile/assets/Flexible_plans.jpg"
                alt="Flexible plans"
              />
            </p>
            <p>
              <strong>Flexible plans for everyone</strong>
              <br />
              Choose the monthly data amount that's right for you, all loaded
              with international benefits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
