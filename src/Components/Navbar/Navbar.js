import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../Image/logo.png";
import cart from "../../shoppingCart.png";
import styled from "styled-components";
import { ButtonContainer } from "../Button/Button";
import Search from "../Search/Search";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
        <Link to="/">
          <img src={logo} alt="logo"  height="55px" width="100px"/>
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
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  .nav-link {
    color: white !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
