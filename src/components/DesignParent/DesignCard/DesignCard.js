import React from "react";
import "./DesignCard.css";
import { Link } from "react-router-dom";

const DesignCard = props => {
  return (
    <div className="design">
    <Link
        to={`/design/${props.product.product_category}/${props.product.id}`}
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
        to={`/design/${props.product.product_category}/${props.product.id}`}
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

export default DesignCard;
