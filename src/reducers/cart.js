const initialState = {
    listCart : [],
    order: 0,
}

const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "PLUS_ORDER":
            return {
                ...state,
                order: state.order + 1,
            }
        case "MINUS_ORDER":
            return {
                ...state,
                order: state.order -1,
            }
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