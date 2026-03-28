import React from "react";
import "./UnderMaintenance.css";

const UnderMaintenance = () => {
    return (
        <div className="maintenance-container">
            <div className="maintenance-card">
                <div className="maintenance-icon">🛠️</div>

                <h1 className="maintenance-title">
                    We’ll be Back Soon
                </h1>

                <p className="maintenance-message">
                    Our website is currently undergoing scheduled maintenance.
                    We’re working hard to improve your experience.
                </p>

                <p className="maintenance-subtext">
                    Please check back in a little while.
                </p>

                <footer className="maintenance-footer">
                    © {new Date().getFullYear()} Your Company Name
                </footer>
            </div>
        </div>
    );
};

export default UnderMaintenance;
