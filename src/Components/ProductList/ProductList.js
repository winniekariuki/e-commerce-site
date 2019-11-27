import React, { Component } from "react";
import Product from "../Product/Product";
import Carousel from "../Carousel/Carousel";
import { connect } from "react-redux";
import getProducts from "../../actions/getProducts";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
import { ButtonContainer } from "../Button/Button";
import { addProducts, addProductsAction } from '../../actions/addProducts';

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
    const { match: { params: { id } }, getProducts }= this.props;
    this.props.getProducts();
    this.props.getProducts(id);
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      products: newProps.products.rows,
     
    });
  }

   
  handleClick = (id)=>{
    this.props.getProducts(id); 
    console.log( this.props.getProducts(id),"props")
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
        button={  
        <ButtonContainer onClick={()=>{this.handleClick(product.id)}}>Add to my Cart</ButtonContainer>
      }
      
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
  return {
    products: state.products.products

  }
};
// export const mapDispatchToProps = dispatch => 
//   {
//     return{
//       addProducts: (id) => { dispatch(addProducts(id)) }
// }
//  addProducts: payload => dispatch(addProducts(payload)),
// };
export default connect(mapStateToProps, { getProducts})(ProductList);
