import React, { Component } from "react";
import Product from "./Product";
import Carousel from "./Carousel";
import { connect } from "react-redux";
import getProducts from "../actions/getProducts";
import Footer from "./Footer";

import {
  CardColumns,
  Container,
} from 'react-bootstrap';

export class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  componentWillMount() {
    this.props.getProducts();
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      products: newProps.products.rows,
     
    });
  }

  render() {
    let productsArray = this.state.products;
    const productItem = productsArray.map(product => (
      <Product
      thumbnail={product.thumbnail}
        name={product.name}
        price={product.price}
           discounted_price={product.discounted_price}
        description={product.description}
   
      />
  
    ));
    return (
     
      <div>
            <Carousel />
            <Container>
              <CardColumns>
            {productItem}
          </CardColumns>
        </Container>
        <Footer/>
          </div> 
    );
  }
}
const mapStateToProps = state => {
  return { products: state.products.products }
};
export default connect(mapStateToProps, { getProducts })(ProductList);
