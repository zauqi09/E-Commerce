import { combineReducers } from "redux"
import AuthReducer from "./auth"
import productReducer from "./product"

const allReducers = combineReducers({
    auth: AuthReducer,
    product: productReducer
})

export default allReducers