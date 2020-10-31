import { combineReducers } from "redux"
import AuthReducer from "./auth"
import CartReducer from './cart'

const allReducers = combineReducers({
    auth: AuthReducer,
    cart: CartReducer,
})

export default allReducers