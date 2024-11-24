import React from "react";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Features from "./components/features/Features";
import ProductCard from "./components/productCard/ProductCard";
import FeatureSection from "./components/featureSection/FeatureSection";
import "./App.css";

const App = () => {
  return (
    <div className="container_father">
      <Header />
      <Hero />
      <Features />
      <ProductCard />
      <FeatureSection />
    </div>
  );
};

export default App;
