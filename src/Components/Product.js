import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
import baby from "./velvet.jpg";
import "./Product.scss";

export default function Product({
  name,
  description,
  price,
  discounted_price,
  thumbnail
}) {
  return (
    <div className="row">
      <div className="column">
        <div className="card">
          <div className="card-img-top" alt="..." >{thumbnail} </div>
          <div className="card-body">
            <h5 className="card-title">{(name={name}, price, discounted_price)}</h5>

            <p className="card-text">{description}</p>
            <Link to="/cart" className="ml-auto">
              <ButtonContainer>Add to my Cart</ButtonContainer>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
