import React, { Component } from "react";
import stamp  from "../../Image/stamp.jpg"
import "./Product.scss";
import {
Image
} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Flippy, { FrontSide,BackSide } from 'react-flippy';

export default function Product({
  name,
  description,
  price,
  discounted_price,
  thumbnail,
  button
}) {
  return (
    <div className="row">
      <div className="column">
        <Flippy
          className=""
            flipOnHover={false}
            flipOnClick={true}
            flipDirection="horizontal"
        > <FrontSide
        className="card"
          >
              <div className="card-img-top" >
                <Image src={require(`../../product_images/${thumbnail}`)} alt={thumbnail} height="200px" width="300px" />
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
              </div>
            </FrontSide>
          <BackSide
            className="card-back"  >
       
              <div className="card-img-top" >
                <Image src={require(`../../product_images/${thumbnail}`)} alt={thumbnail} height="150px" width="300px" />
                <p >{parseInt(discounted_price, 10) ? <img src={stamp} height="40px" width="50px" className="back-discount" alt="discount-stamp" /> : null}</p>
              </div>
              <div>
                <p className="card-description">{description}</p>
                <p className="addbutton">{button}</p>
              </div>
            </BackSide>
          </Flippy>
        </div>
      </div>
  )
}
Product.propTypes = {
  product: PropTypes.object.isRequired
};