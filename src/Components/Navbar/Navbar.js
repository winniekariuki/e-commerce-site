import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../../Image/new-logo.png";
import cart from "../../shoppingCart.png";
import styled from "styled-components";
import Carousel from "../Carousel/Carousel";
import { ButtonContainer } from "../Button/Button";
// import Search from "../Search/Search";
import totalAmountActions from '../../actions/totalAmount';
import shoppingcartActions from '../../actions/shoppingCart';
import * as accessCart from '../../Utilis/cart';
import { connect } from 'react-redux';
import './Navbar.css';
import searchActions from '../../actions/search';
import {
  CardColumns,
  Container,
} from 'react-bootstrap';
// import { on } from "cluster";
export class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      loading: false,
    };
    // this.handleSearchChange = this.handleSearchChange.bind(this);
  };
  componentDidMount() {
    // const { match: { params: { id } }, getProducts, getGeneratedCartId } = this.props;
    const queryParams = {
      page: 1,
      limit: 15,
      description_length: 200
    };
    searchActions(queryParams);
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

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    })
}
  
  handleSearch = (e) => {
    const { searchText } = this.state;
      const { searchActions, metaSearch } = this.props;
    searchActions(searchText)
    this.setState({
      loading: true
    })
  }


  render() {
    let cartArray = [];
    let totalItemInCart = 0;
    if (this.props.cartData.data && this.props.shoppingCartTotal.data) {
        cartArray = this.props.cartData.data;
        totalItemInCart = this.computeTotal(cartArray);
}
    return (
      <NavWrapper className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
        
          <img src={logo} className="nav-logo" alt="logo" height="55px" width="50px"/>
        
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-12">
            <Link to="/products" className="nav-link">
              Products
            </Link>
          </li>
          <li>
      <div class="wrap">
   <div class="search">
      <input id='searchText' onChange={this.handleChange}  type="text" class="searchTerm" placeholder="Search Products"/>
      <button type="submit" class="searchButton" onClick={this.handleSearch} >
        <i class="fa fa-search"></i>
     </button>
   </div>
</div>
          </li>
        </ul>
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
  shoppingcartActions,
  searchActions
};

const mapStateToProps = ({
  shoppingCart,
  totalAmount,
  searchResults
}) => ({
  cartData:  shoppingCart,
    shoppingCartTotal: totalAmount,
  searchData: searchResults,
  
});

const NavWrapper = styled.nav`
  .nav-link {
    color: white !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
