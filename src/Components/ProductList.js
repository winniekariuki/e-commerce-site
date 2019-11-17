import React, { Component } from "react";
import Product from "./Product";
import Title from "./Title";
import Carousel from "./Carousel";
// import { connect } from "react-redux";
import { connect } from "react-redux";
import getProducts from "../actions/getProducts";

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
      products: newProps
    });
  }
  render() {
    return (
      <div>
        <div className="py-5">
          <div className="container">
            <Carousel />
            <Product />
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  products: state
});
export default connect(mapStateToProps, { getProducts })(ProductList);
