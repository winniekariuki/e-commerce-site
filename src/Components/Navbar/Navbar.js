import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../Image/new-logo.png";
import cart from "../../shoppingCart.png";
import styled from "styled-components";
import { ButtonContainer } from "../Button/Button";
import Search from "../Search/Search";
import totalAmountActions from '../../actions/totalAmount';
import shoppingcartActions from '../../actions/shoppingCart';
import * as accessCart from '../../Utilis/cart';
import { connect } from 'react-redux';
import './Navbar.css'

export  class Navbar extends Component {
  componentDidMount() {
    this.updateShoppingCart();
};


computeTotal = (data) => {
  let total = 0;
  for (let i = 0; i < data.length; i+=1) {
      // eslint-disable-next-line
      Object.keys(data[i]).forEach(item => {
          if(item === 'quantity') {
              total += data[i][item];
          }
      });
  };
  return total;
}


updateShoppingCart = () => {
    const {
        shoppingcartActions,
        totalAmountActions
    } = this.props;
    const cartId = accessCart.getGeneratedCartId();
    if (cartId) {
        shoppingcartActions(cartId)
        totalAmountActions(cartId);
        }
    }

  render() {
    let cartArray = [];
    let totalItemInCart = 0;
    if (this.props.cartData.data && this.props.shoppingCartTotal.data) {
        cartArray = this.props.cartData.data;
        totalItemInCart = this.computeTotal(cartArray);
}
    console.log(this.props,"I need props")
    return (
      <NavWrapper className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
        <Link to="/">
          <img src={logo} className="nav-logo" alt="logo"  height="55px" width="50px"/>
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-12">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
        </ul>
        <div className="Search">
          <Search />
        </div>

        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <img src={cart} alt="logo" />
            my cart
            <span class="badge">  {totalItemInCart}</span>
          
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const mapDispatchToProps = {
  totalAmountActions,
  shoppingcartActions
};

const mapStateToProps = ({
  shoppingCartData,
  totalAmount,
}) => ({
  cartData:  shoppingCartData,
  shoppingCartTotal: totalAmount,
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
const NavWrapper = styled.nav`
  .nav-link {
    color: white !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
