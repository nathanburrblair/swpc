import React from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

const ProductCard = props => {
  return (
    <div className="container">
    <Link
        to={`/plants/${props.product.product_category}/${props.product.id}`}
      >
      <div className="card">
        <img
          className="product_image"
          src={props.product.product_image}
          alt=""
        />
        <div className="mobile_product_info">
          <h1>{props.product.name}</h1>
          <p>${props.product.price}</p>
        </div>
      </div>
      </Link>
      <Link
        to={`/plants/${props.product.product_category}/${props.product.id}`}
      >
        <div className="overlay">
          <div className="overlay_text">
            <h1>{props.product.name}</h1>
            <p>${props.product.price}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
