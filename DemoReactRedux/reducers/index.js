import { combineReducers } from 'redux';
import ProductReducer from './ProductReducer.js';
import EditProduct from './EditProduct.js';

export default combineReducers({
	ProductReducer,
	EditProduct
});