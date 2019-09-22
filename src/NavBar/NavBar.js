import React, { Component } from 'react';
import './NavBar.scss';

export class NavBar extends Component{
  render() {
    return (
      <div>
        <div className="navbar">
          <div className="sign">
            <a href="#" className="link">Sign in</a>
            <a href="#" className="link">Register</a>
          </div>
          <div className="centerNav">
        <a  href="#">Daily Deals</a>
        <a  href="#">Sell</a>
            <a href="#">Help & Contact</a>
          </div>
          <div className="Euros">
            <a href="#"> <img src="https://res.cloudinary.com/dievrxv8v/image/upload/v1569091263/e-commerce/gbr_ocrdzl.png" /> </a>
            <a href="#" > € GBP</a>
          </div>
          <div className="Price">
            <a href="#" ><img src="https://res.cloudinary.com/dievrxv8v/image/upload/v1569091265/e-commerce/icons-bag_ytqn9i.png" /></a>
            <a href="#" ><p> Your Bag: €3.99 </p></a>
          </div>
        </div>
      
        <div className="Categories">
            <div className="brand">
              <a href="#">SHOPMATE</a>
            </div>
            <div className="CategoriesList">
              <a href="#">Women</a>
              <a href="#">Men</a>
              <a href="#">Kids</a>
              <a href="#">Shoes</a>
              <a href="#">Brands</a>
          </div>
          <div className="search-bar">
            <input  className="search-text" type="text" name="" placeholder="Search anything"/>
            <a className="search-button" href="#">
              <img src="https://res.cloudinary.com/dievrxv8v/image/upload/v1569091271/e-commerce/icons-search-white_wekd6k.png"/>
            </a>
            <a className="close-button" href="#">
              <img src="https://res.cloudinary.com/dievrxv8v/image/upload/v1569091262/e-commerce/close-big-white_mnifsw.png" />
            </a>
            
          </div>
        
            <div className="Price">
            <a href="#" ><img src="https://res.cloudinary.com/dievrxv8v/image/upload/v1569091265/e-commerce/icons-bag-white_hbna20.png" /></a>
            </div>
          </div>

      </div>
    )
  }
};
export default NavBar;
