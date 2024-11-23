// components/FeatureSection.js
import React from "react";

function FeatureSection() {
  return (
    <div className="feature-section">
      <img
        src="path/to/coffee-machine.png"
        alt="Coffee Machine"
        className="feature-image"
      />
      <div className="feature-content">
        <h3 className="feature-title">Coffee Machine, Buy for Home</h3>
        <p className="feature-description">
          Mauris Rhoncus In Imperdiet Placerat. Vestibulum Et Egestas Mauris.
          Curabitur Vitae Nunc.
        </p>
        <button className="discover-btn">Discover Now</button>
      </div>
    </div>
  );
}

export default FeatureSection;
