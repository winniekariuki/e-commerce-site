import React, { Component } from 'react';
import { connect } from 'react-redux';
import ShoppingCartTable from "../CartItems/CartTable"
import totalAmountActions from '../../actions/totalAmount';
import shoppingcartActions from '../../actions/shoppingCart';
import * as accessCart from '../../Utilis/cart';


class ShoppingCart extends Component {

    componentDidMount() {
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
           shoppingCartTotal={this.props.shoppingCartTotal.data}
         totalItemInCart={totalItemInCart}
      />
     </div>
   )
 }
}

const mapDispatchToProps = {
    totalAmountActions,
    shoppingcartActions
};

const mapStateToProps = ({
    shoppingCartData,
    totalAmount,
  }) => ({
    cartData:  shoppingCartData,
    shoppingCartTotal: totalAmount,
  });

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);