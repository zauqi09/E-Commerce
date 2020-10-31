import { combineReducers } from "redux"
import AuthReducer from "./auth"
import productReducer from "./product"

const allReducers = combineReducers({
    auth: AuthReducer,
    product: productReducer
import CartReducer from './cart'

const allReducers = combineReducers({
    auth: AuthReducer,
    cart: CartReducer,
})

export default allReducers