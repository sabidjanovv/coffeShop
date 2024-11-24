import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        {/* <div className="logo">Coffee Shop</div> */}
        <nav className="navbar">
          <a href="#home" className="active">
            Home
          </a>
          <a href="#about">About</a>
          <a href="#menu">Menu</a>
          <a href="#reservation">Reservation</a>
          <img className="logo" src="/src/assets/Logo.png" alt="" />
          <a href="#pages">Pages</a>
          <a href="#shop">Shop</a>
          <a href="#contact">Contact</a>
          <img src="/src/assets/search (1).png" alt="Search Logo" />
          <img src="/src/assets/shopping-bag.png" alt="Bag" />
        </nav>
      </div>
    </header>
  );
};

export default Header;
