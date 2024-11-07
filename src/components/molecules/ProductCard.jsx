import React from "react";
import "./ProductCard.css"; // Kendi CSS dosyanı unutma

function ProductCard({ item, isHovered }) {
  return (
    <div className={`product-card ${isHovered ? "hovered" : ""}`}>
      <div className="product-card-image">
        <img src={item.image} alt={item.title || "Coffee"}  />
      </div>
      <div className="product-card-description">
        <span className="product-card-title">{item.title}</span>
      </div>
      <div className="product-card-hover-description">
        <p>{item.description}</p> 
      </div>
    </div>
  );
}

export default ProductCard;
