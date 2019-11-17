import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../shoppingCart.png";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import Search from "./Search";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-12">
            <Link to="/" className="nav-link">
              Products
            </Link>
          </li>
        </ul>
        <div className="Search  ml-20">
          <Search />
        </div>

        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <img src={logo} alt="logo" />
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
