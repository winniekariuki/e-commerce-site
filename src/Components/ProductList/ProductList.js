import React, { Component } from "react";
import Product from "../Product/Product";
import Carousel from "../Carousel/Carousel";
import { connect } from "react-redux";
import getProducts from "../../actions/getProducts";
import getGeneratedCartId from "../../actions/generateUniqueId";
import addtocartAction from "../../actions/addProducts"
import Footer from "../Footer/Footer";
import { ButtonContainer } from "../Button/Button";
import { PushSpinner } from "react-spinners-kit";
import addtocartActions from '../../actions/addProducts';
import * as accessCart from '../../Utilis/cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";




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
      currentPage: 1
    };


  };
  componentDidMount() {
    const { match: { params: { id } }, getProducts, getGeneratedCartId } = this.props;
    const queryParams = {
      page: 1,
      limit: 30,
      description_length: 200
    };
    getProducts(queryParams);
    getGeneratedCartId();
     
    }
  

  componentWillReceiveProps(newProps) {
    this.setState({
      products: newProps.products.rows,
      isLoading: true,
    });
  }
 
     onClickhandler = (pageNumber) => {
      const queryParams = {
        page: pageNumber,
        limit: 30,
        description_length:200
       }
       this.setState({
        currentPage : queryParams.page
       });
       this.props.getProducts(queryParams)
     
  }
 
  

   
  handleClick = (productId) => {
    const { addToCart } = this.props;
    const itemAttributes = "";
    const generatedId = accessCart.getGeneratedCartId();
    const payload = {
      cart_id: generatedId,
      product_id: productId,
      attributes: itemAttributes
    };
    toast.success("Added to cart successfully !");
 
    
    addToCart(payload).then(data => {
    }); 
  }
  

  loadMore = () =>
  
  {
    this.setState(prev => {
      return { visible: prev.visible + 12 };
    });
  };
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
         <ButtonContainer onClick={() => { this.handleClick(product.product_id) }}>Add to my Cart</ButtonContainer>
      
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
              <ToastContainer position={toast.POSITION.TOP_CENTER} toastClassName="dark-toast"
/>
            </CardColumns>
          }
            <nav aria-label="...">
  <ul className="pagination justify-content-center">
   
     <li className={(this.state. currentPage === 1? ' active' : '') + ' page-item'}><a className="page-link" onClick={() => { this.onClickhandler(1) }}>1</a></li>
     <li className={(this.state.currentPage === 2 ? 'active' : '') + ' page-item'}><a className="page-link"  onClick={()=>{this.onClickhandler (2)}}>2</a></li>
    <li className={(this.state.currentPage === 3 ? 'active' : '') + ' page-item'}><a className="page-link"  onClick={()=>{this.onClickhandler (3)}}>3</a></li>
    <li className={(this.state.currentPage === 4 ? 'active ' : '') + ' page-item'}><a className="page-link"  onClick={()=>{this.onClickhandler (4)}}>4</a></li>
  
  </ul>
</nav>
        </Container>
        <Footer/>
          </div> 
    );
  }
}
export const mapDispatchToProps = dispatch => ({
  getProducts: id => dispatch(getProducts(id)),
  getGeneratedCartId: () => dispatch(getGeneratedCartId()),
  addToCart: data => dispatch(addtocartActions(data))
       }
)
const mapStateToProps = state => {
  return {
    products: state.products.products

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
