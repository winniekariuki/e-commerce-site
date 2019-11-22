import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import Carousel from "./Carousel";
// import { connect } from "react-redux";
import { connect } from "react-redux";
import getProducts from "../actions/getProducts";

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

  // componentDidMount() {  //   this.props.getProducts()
  //   console.log("mount",this.props.getProducts)

  // }


  componentWillMount() {
    this.props.getProducts();
    console.log(this.props.getProducts(),"props")
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      products: newProps.products.rows,
     
    });
    console.log(newProps.products.rows,"products")
  }

  // componentDidMount() {
  //   this.props.getProducts()
  //   console.log("mount",this.props.getProducts())
  // }
  // componentWillMount() {
  //   this.props.getProducts();

  // }
  // componentWillReceiveProps(newProps) {
  //   if (newProps.products.rows !== this.props.rows ) {
  //     this.setState({
  //       products: newProps.products
  //     });

  //   }
  // }
  render() {
    let productsArray = this.state.products;
    // const arrayLength = productsArray.length;

    // if (arrayLength > 6) {
    //   productsArray = productsArray.slice(Math.max(arrayLength - 6, 1));
    // }
    const productItem = productsArray.map(product => (
      <Product
        name={product.name}
        description={product.description}
        price={product.price}
        discounted_price={product.discounted_price}
        thumbnail={product.thumbnail}
      />
    ));
    
  
    // let {rows}  = this.state.products.rows ? this.state.products.rows[1] : this.state.products.rows ;
    // console.log(this.state.products.rows ? this.state.products.rows[1] : this.state.products.rows, "rowssss")
  
    return (
      <div>
      
      {/* <Container>
              <CardColumns> */}
            <Carousel />
            <Container>
              <CardColumns>
       
            {productItem}
          </CardColumns>
          </Container>
          </div>
        
      
    );
  }
}
const mapStateToProps = state => {
  return { products: state.products.products }
};
export default connect(mapStateToProps, { getProducts })(ProductList);
