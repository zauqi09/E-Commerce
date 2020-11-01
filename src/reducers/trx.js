const initialState = {
    listTrx : [],
}
const TrxReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADDTRX":
            return {
                ...state,
                listTrx: [...state.listTrx, action.payload],
            }
        default:
            return state
        }
}

export default TrxReducer