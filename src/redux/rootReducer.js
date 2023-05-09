import {combineReducers } from "redux";
import productReducer from '../redux/product/productReducer';
import cartReducer from '../redux/cart/cartReducer';

const rootReducer = combineReducers({
    productsState : productReducer ,
    cartState : cartReducer
})

export default rootReducer;