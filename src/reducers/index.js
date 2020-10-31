import { combineReducers } from "redux"
import AuthReducer from "./auth"
import productReducer from "./product"
import CartReducer from './cart'

const allReducers = combineReducers({
    auth: AuthReducer,
    product: productReducer,
    cart: CartReducer,
})

export default allReducers