import React from 'react';
import { Link } from 'react-router-dom';
import './CartTable.css';
import logo from "../../Image/new-logo.png";
import StripeCheckout from 'react-stripe-checkout';
import {
    Image
    } from 'semantic-ui-react';


const ShoppingCartTable = ({...props}) => {
    const {
        handleChange,
        cartData,
        handleRemove,
        handleDelete, totalItemInCart,
        shoppingCartTotal } = props;
    const shoppingCartData = cartData;
    const totalAmount = shoppingCartTotal;
    const onToken = (token) => {
        console.log('Stripe Token', token);
      };
      

    const stripeApiKey = "pk_test_zrNK9sVySPgYCjzDbDsEblvR00W4Lm19Xx";
    
    return (
        <div className="container">
            <h4 className="cart-header">{`${totalItemInCart} item(s) in your cart`}</h4>
            {totalItemInCart !== 0 ?
                    <table id="cart" className="table table-hover table-condensed">
                        <thead>
                            <tr>
                                <th className="product" >Product</th>
                                <th className="cost" >Price</th>
                                <th className="quantity" >Quantity</th>
                                <th className="text-center">Subtotal</th>
                            </tr>
                        </thead>
                        {shoppingCartData.map(cartData =>
                            <tbody key={cartData.item_id}>
                                <tr>
                                    <td data-th="Product">
                                        <div className="row">
                                            <div className="col-sm-3 hidden-xs remove">
                                                <i data-key={cartData.item_id}
                                                    onClick={handleRemove}
                                                    className="fa fa-trash delete">
                                                </i>
                                            </div>
                                            <div className="col-sm-9">
                                            <h4 className="nomargin"> <Image src={require(`../../product_images/${cartData.image}`)} alt={cartData.image} height="100px" width="100px" /></h4>
                                                <h4 className="nomargin">{cartData.name}</h4>
                                            </div>
                                        </div>
                                    </td>
                                    <td data-th="Price">&euro; {cartData.price}</td>
                                    <td>
                                        <select onChange={handleChange}
                                            data-key={cartData.item_id}
                                            value={cartData.quantity}
                                            className="form-control" >
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            <option value="6">6</option>
                                            <option value="7">7</option>
                                            <option value="8">8</option>
                                            <option value="9">9</option>
                                            <option value="10">10</option>
                                        </select>
                                    </td>
                                    <td data-th="Subtotal" className="text-center">&euro; {cartData.subtotal}</td>
                                </tr>
                            </tbody>
                        )}
                        <tfoot>
                            <tr>
                                <td><Link to="/" className="add-to-cart back-btn btn btn-default arrow-back"><i class="back material-icons w3-large">arrow_back</i>Continue Shopping</Link></td>
                                <td className="actions" data-th="">
                                    <Link onClick={handleDelete} to="" className="add-to-cart btn"><i className="fas fa-trash-alt  empty"></i> Empty</Link>
                                </td>
                                <td className="hidden-xs text-center"><strong>Total &euro;{totalAmount.total_amount}</strong></td>
                            <td>
                            <StripeCheckout
        amount={totalAmount.total_amount}
        billingAddress
        description="Awesome Product"
        image={logo}
        locale="auto"
        name="YourDomain.tld"
        stripeKey={stripeApiKey}
        token={onToken}
        zipCode

      />
  </td>
                            </tr>
                        </tfoot>
                    </table>
                : <div className="cart">
                    <img src="https://www.freepngimg.com/thumb/web_design/42851-3-cart-free-clipart-hd.png" height="250" width="500" />
                    <p>Your Cart is Empty! <br />
                        Browse more to discover crazy deals and discounts
                    </p>
                        <Link className="btn" to="/"> Start Shopping</Link>
                    </div>}
                </div>
    );
}

export default ShoppingCartTable;
