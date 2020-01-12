import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShoppingCartTable from "../CartItems/CartTable"
import totalAmountActions from '../../actions/totalAmount';
import  shoppingcartActions from '../../actions/shoppingCart';
import { removecartitemActions } from '../../actions/removeCartItem';
import updateItemActions from '../../actions/updateCart';
import deleteItemActions from '../../actions/deleteCart';
import * as accessCart from '../../Utilis/cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class ShoppingCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shoppingCart: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
    };

    componentDidMount() {
        this.updateShoppingCart();
    };

    computeTotal = (data) => {
        let total = 0;
        for (let i = 0; i < data.length; i+=1) {
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
    
        handleChange = (e) => {
            const value = e.target.value;
            const itemId = e.target.getAttribute('data-key');
            const payload = {
                quantity: value
            };
            const { updateItemActions } = this.props;
            updateItemActions(itemId, payload).then(data => {
                this.updateShoppingCart();
            })
    }
    handleDelete = (e) => {
        e.preventDefault();
        const { deleteItemActions } = this.props;
        const cartId = accessCart.getGeneratedCartId();
        if (cartId) {
            deleteItemActions(cartId).then(data => {
                this.updateShoppingCart();
            });
        }
        toast.success("Your Cart is now Empty!");
    }

    handleRemove = (e) => {
        const { removecartitemActions } = this.props;
        const itemId = e.target.getAttribute('data-key');
        if (itemId) {
            removecartitemActions(itemId).then(data => {
                this.updateShoppingCart();
            });
        }
        toast.success("Item removed successfully!");
    }

    render() {
        let cartArray = [];
        let totalItemInCart = 0;
        if (this.props.cartData.data && this.props.shoppingCartTotal.data) {
            cartArray = this.props.cartData.data;
            totalItemInCart = this.computeTotal(cartArray);
    }
   return (
       <div>
     <ShoppingCartTable
               cartData={cartArray}
               handleRemove={this.handleRemove}
               handleChange={this.handleChange}
               handleDelete={this.handleDelete}
           shoppingCartTotal={this.props.shoppingCartTotal.data}
         totalItemInCart={totalItemInCart}
           />
  <ToastContainer position={toast.POSITION.TOP_CENTER} toastClassName="dark-toast"
/>
     </div>
   )
 }
}

const mapDispatchToProps = {
    totalAmountActions,
    shoppingcartActions,
    removecartitemActions,
    updateItemActions,
    deleteItemActions,
    // updatedData: updateitem,
    // deleteCart: deleteitem,
  
};

const mapStateToProps = ({
    shoppingCartData,
    totalAmount,
    removeCartItem,
    updateShoppingCart,
    deleteCart,
}) => ({
    cartData:  shoppingCartData,
        shoppingCartTotal: totalAmount,
        removeItem: removeCartItem,
        deleteCart: deleteCart,
        updateShoppingCart:  updateShoppingCart,
  });

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);