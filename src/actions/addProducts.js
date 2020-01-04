import { ADD_TO_CART} from "./types";

// import urlPath from '../Config/axios';


export const addToCart= (id)=>{
  return{
      type: ADD_TO_CART,
       id }
  }

// export const addToCart = () => dispatch => {
//   const endpoint = `https://backendapi.turing.com/shoppingcart/add`;

//   return urlPath
//     .request({
//       method: "post",
//       url: endpoint
//     })

//     .then(response => {
   
//       const { data } = response;
      
//       const type = ADD_TO_CART;

//       dispatch(success(data, type));
//     })

// };
// export default addToCart;
