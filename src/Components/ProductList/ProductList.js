import React, { Component } from "react";
import Product from "../Product/Product";
import Carousel from "../Carousel/Carousel";
import { connect } from "react-redux";
import getProducts from "../../actions/getProducts";
import Footer from "../Footer/Footer";
import { ButtonContainer } from "../Button/Button";
import { PushSpinner } from "react-spinners-kit";
// import { addToCart } from '../../actions/addProducts';




import {
  CardColumns,
  Container,
} from 'react-bootstrap';


export class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      visible: 12,
      total: '',
      pageTotal: 1,
      isLoading: false,
    };

  };
  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    // const { metaData } = this.props};
    const queryParams = {
      page: 1,
      limit: 30,
      description_length: 200
    };
    this.props.getProducts(queryParams);
     
    }
  

  componentWillReceiveProps(newProps) {
    this.setState({
      products: newProps.products.rows,
      isLoading: true
  
    });
  }
 
     onClickhandler = (pageNumber) => {
      const queryParams = {
        page: pageNumber,
        limit: 30,
        description_length:200
      }
      
       this.props.getProducts(queryParams)
       console.log(queryParams,"hey")
     
  }
 
  

   
  handleClick = (id)=>{
    this.props.addToCart(id); 
  }
  

  loadMore = () => {
    this.setState(prev => {
      return { visible: prev.visible + 12 };
    });
  };
  render() {
    let productsArray = this.state.products;
    console.log( this.state.products,">>>><<")
    
    const productItem = productsArray.map(product => (
      <Product
        thumbnail={product.thumbnail}
        name={product.name}
        price={product.price}
        discounted_price={product.discounted_price}
        description={product.description}
        button={  
        <ButtonContainer  onClick={()=>{this.handleClick(product.id)}}>Add to my Cart</ButtonContainer>
      }
      />
  
    ));
    return (
     
      <div>
            <Carousel />
        <Container>
          {!this.state.isLoading ? < PushSpinner style={"margin-left:500px;"}/>
        :
            <CardColumns>
             {productItem}
            </CardColumns>
          }
            <nav aria-label="...">
  <ul className="pagination justify-content-center">
   
    <li className="page-item"><a className="page-link" onClick={()=>{this.onClickhandler (1)}}>1</a></li>
    <li className="page-item ">
      <span className="page-link" onClick={()=>{this.onClickhandler (2)}}>
        2
        <span className="sr-only"></span>
      </span>
    </li>
    <li className="page-item"><a className="page-link"  onClick={()=>{this.onClickhandler (3)}}>3</a></li>
    <li className="page-item">
      <a className="page-link" onClick={()=>{this.onClickhandler (4)}}>Next</a>
    </li>
  </ul>
</nav>
        </Container>
        <Footer/>
          </div> 
    );
  }
}
export const mapDispatchToProps = dispatch => ({
  // addToCart: (id) => { dispatch(addToCart(id)) },
  getProducts: id=> dispatch( getProducts(id)),
       }
)
const mapStateToProps = state => {
  return {
    products: state.products.products

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
