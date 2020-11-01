const initialState = {
    listCart : [],
    curentCart : [],

}

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADDTOCART":
            return {
                ...state,
                listCart: [...state.listCart, action.payload.dataCart],
            }
        case "UPDATEJUMLAH":
            return {
                ...state,
            }
        default:
            return state
        }
}

export default CartReducer