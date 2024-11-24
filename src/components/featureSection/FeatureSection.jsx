import React from "react";
import "./FeatureSection.css";

function FeatureSection() {
  return (
    <div className="feature-section">
      <div className="feature-container">
        <img
          src="/src/assets/blender1.png"
          alt="Coffee Machine"
          className="feature-image"
        />
        <div className="feature-content">
          <h3 className="feature-title">Coffee Machine, Buy for Home</h3>
          <p className="feature-description">
            Mauris rhoncus in imperdiet placerat. Vestibulum emismd nisl
            suscipit ligula volutpat, a feugiat urna maximus. Cras massa nibh
            tincidunt. Donec et nibh maximus, est eu mattis nunc. Praesent ut
            quam quis quam venenatis fringilla. Morbi vestibulum id tellus in
            commodo mattis. Aliquam erat volutpat.
          </p>
          <button className="discover-btn">Discover Now</button>
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
