import React from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Features from "./components/features/Features";
// import ProductGrid from "./components/productGrid/ProductGrid";
import FeatureSection from "./components/featureSection/FeatureSection";

import "./App.css";

const App = () => {
  return (
    <div className="container_father">
      <Header />
      <Hero />
      <Features />
      <section className="popular-products">
        <h2 className="section-title">Popular Product</h2>
        <h3 className="section-subtitle">Coffee Popular Product</h3>
        <ProductGrid />
        <button className="view-all-btn">View All Product</button>
      </section>
      <FeatureSection />
    </div>
  );
};

export default App;
