const initialState = {
    listProduct:[]
}


const productReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case "ADDPRODUCT":
            return {
                listProduct: [...action.payload.listProduct, action.payload.dataProd]
            }
        case "LOGIN":
            return {
                listProduct: action.payload.listProduct
            } 
        case "LOGOUT":
            return {
                listProduct: action.payload.listProduct
            }    
        default:
            return initialState
        }
    }
export default productReducer