import React from "react";
import "./Features.css";

const Features = () => {
  const features = [
    { id: 1, title: "Best Coffee Flavour", img: "/src/assets/card1.svg" },
    { id: 2, title: "Place to get lost", img: "/src/assets/card2.svg" },
    { id: 3, title: "Proper roasting", img: "/src/assets/card3.svg" },
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
