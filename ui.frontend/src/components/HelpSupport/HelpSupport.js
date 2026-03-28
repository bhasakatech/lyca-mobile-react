import React from "react";
import "./HelpSupport.css";

const HelpSupport = () => {
  return (
    <div className="help-support">
      <h1 className="page-title">Help & Support</h1>
      <p className="page-subtitle">
        We’re here to help you. Choose the best way to reach us.
      </p>

      <div className="support-grid">
        {/* Email Support */}
        <div className="support-card">
          <h2>Email Support</h2>
          <p className="response-time">
            Response time: <strong>5–7 working days</strong>
          </p>
          <p>
            For faster assistance, use <strong>Live Chat</strong> or call an
            advisor.
          </p>

          <div className="section">
            <h3>Support Hours</h3>
            <ul>
              <li>Monday – Saturday: 9:00 AM – 6:00 PM</li>
              <li>Sunday: 10:00 AM – 8:00 PM</li>
            </ul>
          </div>

          <div className="section">
            <h3>Email</h3>
            <a href="mailto:cs@lycamobile.us" className="email-link">
              cs@lycamobile.us
            </a>
          </div>

          <div className="section">
            <h3>Required Information</h3>
            <ul>
              <li>Full Name</li>
              <li>Email (MyLycaMobile account)</li>
              <li>Date of Birth</li>
            </ul>
          </div>

          <div className="section note">
            <h4>If you don’t have a MyLycaMobile account:</h4>
            <ul>
              <li>How long you’ve been on the Lyca network</li>
              <li>Contact with Lyca in the last 30 days</li>
              <li>Most recent top-up method</li>
            </ul>
            <p className="warning">
              Requests without these details cannot be processed.
            </p>
          </div>
        </div>

        {/* Call Support */}
        <div className="support-card">
          <h2>Call Support</h2>

          <div className="section">
            <h3>Customer Care Hours</h3>
            <ul>
              <li>Monday – Saturday: 9:00 AM – 10:00 PM EST</li>
              <li>Sunday: 10:00 AM – 8:00 PM EST</li>
            </ul>
          </div>

          <div className="section">
            <h3>Call Options</h3>
            <ul>
              <li>
                <strong>From Lyca number:</strong> Dial 612 (Free)
              </li>
              <li>
                <strong>From another phone (US):</strong> 1-866-277-3221
              </li>
              <li>
                <strong>From abroad:</strong> 1-845-301-1612
              </li>
            </ul>
          </div>

        
        </div>
      </div>
    </div>
  );
};

export default HelpSupport;
