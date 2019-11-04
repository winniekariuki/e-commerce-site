import React, { Component } from 'react';
import './NavBar.scss';


export class NavBar extends Component{
  render() {
    return (
    
        <div className="navbar">
          <div className="sign">
            <a href="#" className="btn btn-primary">Sign in</a>
            <a href="#" className="btn btn-primary">Register</a>
          </div>
          <div className="centerNav">
          <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>

  </div>
      <div className="shoppingcart">
        <img src="https://previews.123rf.com/images/val2014/val20141603/val2014160300006/54302308-shopping-cart-icon.jpg" height="30" width="30"/>
      </div>
        
      </div>
    )
  }
};
export default NavBar;
