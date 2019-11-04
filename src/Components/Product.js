import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';


export default function Product({name, description,price, discounted_price,thumbnail}) {
    return (
            <div className="card" style="width: 18rem;">
        <img src={thumbnail} className="card-img-top" alt="..."/>
        <div className="card-body">
      <h5 className="card-title">{name, price,discounted_price}</h5>
      
     <p className="card-text">{description}</p>
     <Link to="/cart" className="ml-auto">
        <ButtonContainer>
        Add to my Cart
        </ButtonContainer>
    </Link>
  </div>
</div>
        )

    } 