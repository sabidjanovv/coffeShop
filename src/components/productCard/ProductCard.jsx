import React from "react";
import "./ProductCard.css";

const ProductCard = () => {
  const productCard = [
    {
      id: 1,
      title: "Brazil Coffee Gred",
      img: "/src/assets/Rectangle 2.png",
      price: "$320.00 / $358",
    },
    {
      id: 2,
      title: "Brazil Coffee Gred",
      img: "/src/assets/Rectangle 2.png",
      price: "$320.00 / $358",
    },
    {
      id: 3,
      title: "Brazil Coffee Gred",
      img: "/src/assets/Rectangle 2.png",
      price: "$320.00 / $358",
    },
  ];

  return (
    <section className="productCard">
      <div className="container">
        <h2 className="productCard-title">Coffee Popular Product</h2>
        <div className="productCard-grid">
          {productCard.map((product) => (
            <div key={product.id} className="productCard-item">
              <img src={product.img} alt={product.title} />
              <div className="productCard-info">
                <p className="productCard-subtitle">COFFEE</p>
                <div className="productCard-rating">★★★★☆</div>
                <h3 className="productCard-name">{product.title}</h3>
                <p className="productCard-price">PRICE - {product.price}</p>
                <button className="productCard-btn">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
        <button className="viewAll-btn">View All Product</button>
      </div>
    </section>
  );
};

export default ProductCard;
