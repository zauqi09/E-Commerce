const initialState = {
    order: 0,
}

const CartReducer = (state = initialState, action) => {
    if (action.type === 'PLUS_ORDER') {
        return {
            ...state,
            order: state.order + 1
        }
    }
    if (action.type === 'MINUS_ORDER') {
        return {
            ...state,
            order: state.order -1
        }
    }
    return state;
}

export default CartReducer