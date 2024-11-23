import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-text">
          <h1>Enjoy Your Morning Coffee.</h1>
          <p>
            The coffee is brewed by first roasting the green coffee beans over
            hot coals in a brazier. Given to opportunity.
          </p>
          <button className="btn-primary">Test Coffee</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
