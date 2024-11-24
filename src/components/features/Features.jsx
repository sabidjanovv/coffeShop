import React from "react";
import "./Features.css";

const Features = () => {
  const features = [
    { id: 1, title: "Best Coffee Flavour", img: "/src/assets/Rectangle4(1).png" },
    { id: 2, title: "Place to get lost", img: "/src/assets/Rectangle4(2).png" },
    { id: 3, title: "Proper roasting", img: "/src/assets/Rectangle4(3).png" },
  ];

  return (
    <section className="features">
      <div className="container">
        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <h3>{feature.title}</h3>
              <img src={feature.img} alt={feature.title} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
