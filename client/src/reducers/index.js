import {combineReducers} from "redux";
import productReducer from "./productReducer";
import authReducer from "./authReducer";
import errReducer from './errReducer';
import assetReducer from './assetReducer';

export default combineReducers({
     product: productReducer,
     user: authReducer,
     error: errReducer,
     asset: assetReducer
})