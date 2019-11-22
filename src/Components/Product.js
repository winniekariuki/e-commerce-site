import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";
import stamp  from "./stamp.jpg"
import "./Product.scss";
import {
Image
} from 'semantic-ui-react';
import PropTypes from 'prop-types';

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
          <div className="card-img-top" >
            <Image src={require(`../product_images/${thumbnail}`)} alt={thumbnail} height="200px"width="350px" />
            <p >{parseInt(discounted_price, 10) ? <img src={stamp} height="70px" width="60px" className="discount" alt="discount-stamp" /> : null}</p>
 </div>
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <div className="price">
            <p> {parseInt(discounted_price, 10)
            ? (
              <div className="discounted">
                <span>
                  {' '}
                  <span>$</span>
                  {discounted_price}
                  {' '}
                </span>
                <span>{price}</span>
              </div>

            )
            : (
              <span>
                {' '}
                <span>$</span>
                {price}
                {' '}
              </span>
                )}
           
              </p> 
              </div>
        
            {/* <p>discount:{ discounted_price}</p> */}
            {/* <p>{description}</p> */}

            <p className="card-description">{description}</p>
            <Link to="/cart" className="ml-auto">
              <ButtonContainer>Add to my Cart</ButtonContainer>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
Product.propTypes = {
  product: PropTypes.object.isRequired
};