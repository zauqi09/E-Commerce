const initialState = {
    listCart : [],
    curentCart : [],
    listjumlah : [],
}

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADDTOCART":
            return {
                ...state,
                listCart: [...state.listCart, action.payload.dataCart],
            }
        default:
            return state
        }
}

export default CartReducer