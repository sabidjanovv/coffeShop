// components/ProductGrid.js
import React from "react";
import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    name: "Brazil Coffee Gred",
    price: "$320.00/$58",
    image: "path/to/image1.png",
    rating: 5,
  },
  {
    id: 2,
    name: "Brazil Coffee Gred",
    price: "$320.00/$58",
    image: "path/to/image2.png",
    rating: 5,
  },
  {
    id: 3,
    name: "Brazil Coffee Gred",
    price: "$320.00/$58",
    image: "path/to/image3.png",
    rating: 5,
  },
];

function ProductGrid() {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductGrid;
