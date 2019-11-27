// import { ADD_PRODUCTS_SUCCESS } from "./types";
// import axiosInstance from '../../services/axiosInstance';

// export const addProductToCart = (cartId, productId, attributes) => ({
//     type: ADD_PRODUCTS_SUCCESS,
//     payload: axiosInstance().post('/shoppingcart/add', {cartId, productId, attributes})
//   });
import { ADD_PRODUCTS_SUCCESS} from "./types";

import urlPath from '../Config/axios';


export const success = productId => ({ type: ADD_PRODUCTS_SUCCESS, payload: {productId }});

export const addProducts = () => dispatch => {
  const endpoint = `https://backendapi.turing.com/shoppingcart/add`;

  return urlPath
    .request({
      method: "post",
      url: endpoint
    })

    .then(response => {
   
      const { data } = response;
      
      const type = ADD_PRODUCTS_SUCCESS;

      dispatch(success(data, type));
    })

};
export default addProducts;
