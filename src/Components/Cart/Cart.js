import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

export  class Cart extends Component {
    render() {
        let addedItems = this.props.products.length ?
        (  
            this.props.products.map(products=>{
                return(
                   
                    <li className="collection-products avatar" key={products.id}>
                                <div className="products-img"> 
                                    <img src={products.img} alt={products.img} className=""/>
                                </div>
                            
                                <div className="products-desc">
                                    <span className="title">{products.title}</span>
                                    <p>{products.desc}</p>
                                    <p><b>Price: {products.price}$</b></p> 
                                    <p>
                                        <b>Quantity: {products.quantity}</b> 
                                    </p>
                                    <div className="add-remove">
                                        <Link to="/cart"><i className="material-icons">arrow_drop_up</i></Link>
                                        <Link to="/cart"><i className="material-icons">arrow_drop_down</i></Link>
                                    </div>
                                    <button className="waves-effect waves-light btn pink remove">Remove</button>
                                </div>
                                
                           </li>                        
                )
            })
        ):

         (
            <p>Nothing.</p>
         )
   return(
        <div className="container">
            <div className="cart">
                <h5>You have ordered:</h5>
                <ul className="collection">
                    {addedItems}
                </ul>
            </div>  
        </div>
   )
}
}

const mapStateToProps = (state)=>{
return{
    items: state.addedItems
}
}

export default connect(mapStateToProps)(Cart)
