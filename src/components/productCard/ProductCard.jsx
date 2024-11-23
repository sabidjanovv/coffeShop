// components/ProductCard.js
import React from "react";

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h4 className="product-name">{product.name}</h4>
      <p className="product-price">Price: {product.price}</p>
      <button className="add-to-cart-btn">Add to Cart</button>
    </div>
  );
}

export default ProductCard;
