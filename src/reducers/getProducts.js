import {
    GET_ALL_PRODUCTS_FAILURE ,
  GET_ALL_PRODUCTS_SUCCESS,
    ADD_TO_CART
  } from '../actions/types';

  
  export const initialState = {products :[]};
  export default  function getAllProducts(state = {}, action) {
    switch (action.type) {
      case  GET_ALL_PRODUCTS_FAILURE:
        return { ...state, message: action.payload };
      case GET_ALL_PRODUCTS_SUCCESS:
        return { ...state, products: action.products};
      default:
        return state;

    }
   
}

export const cartState = {
  addedItems: [],
  total: 0,
  items: []
};

export const addProductToCart = (state = cartState, action) => {

 
   
  if (action.type === ADD_TO_CART) {

    console.log(action.type,"youuu")
    var addedItem = state.items.find(product => product.id === action.id)
    console.log(state.products, "second")
    //check if the action id exists in the addedItems
    var existed_item = state.addedItems.find(product => action.id === product.id)
    if (existed_item) {
      addedItem.quantity += 1
      return {
        ...state,
        total: state.total + addedItem.price
      }
    }
    else {
      addedItem.quantity = 1;
      //calculating the total
      let newTotal = state.total + addedItem.price
          
      return {
        ...state,
        addedItems: [...state.addedItems, addedItem],
        total: newTotal
      }
          
    }
  }

  else{
      return state
  }
}