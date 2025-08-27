import React from "react";
import "./SignUp.css";

const SignupSection = (props) => {
  const { title, placeholder, buttonText, description } = props; // props from Sling model

  return (
    <section className="signup">
      <h1>
        <span>{title}</span>
      </h1>

      <div className="signup-input-container">
        <div className="signup-container">
          <div className="signup-input">
            <input
              type="text"
              placeholder={placeholder}
            />
            <button>{buttonText}</button>
          </div>

          <div>
            <p>
              <span>{description}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupSection;
