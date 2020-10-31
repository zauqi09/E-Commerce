const initialState = {
    listTrx : [],
}
const CartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADDTRX":
            return {
                ...state,
                listTrx: [...state.listTrx, action.payload.dataTrx],
            }
        default:
            return state
        }
}

export default CartReducer