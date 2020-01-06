import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import NavBar from './Components/Navbar/Navbar';
import ProductList from './Components/ProductList/ProductList';
import Default from './Components/Default/Default';
import Cart from './Components/Cart';
import    Details from './Components/Details';



export class HomePage extends Component{
  render() {
    return (
      <React.Fragment>
     <NavBar/>
     <Switch>
       <Route exact path="/" component={ProductList}></Route>
       <Route path="/details" component={Details}></Route>
       <Route path="/cart" component={Cart}></Route>
       <Route  component={Default}></Route>

     </Switch>
     </React.Fragment>
     

    )
  }
}
export default HomePage;
