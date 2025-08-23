import React from "react";
import './signup.css';

const SignupSection = () => {
  return (
    <section className="signup">
      <h1>
        <span>Sign up to get exclusive offers</span>
      </h1>

      <div className="signup-input-container">
        <div className="signup-container">
          <div className="signup-input">
            <input
              type="text"
              placeholder="Enter your email address"
            />
            <button>
              Join our offers club
            </button>
          </div>

          <div>
            <p>
              <span>
                We would like to share relevant offers with you and keep you posted about our rewards
                and new products via email. You can change your mind at any time.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupSection;
