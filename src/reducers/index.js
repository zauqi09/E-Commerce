import { combineReducers } from "redux"
import AuthReducer from "./auth"
import productReducer from "./product"
import CartReducer from './cart'
import TrxReducer from './trx'

const allReducers = combineReducers({
    auth: AuthReducer,
    product: productReducer,
    cart: CartReducer,
    trx: TrxReducer
})

export default allReducers