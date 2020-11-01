const initialState = {
    bestSeller:[],
    listProduct:[],
    newArrival:[],
    discountItem:[],
    dataProduct:{},
    detailProduct:{}
}


const productReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case "ADDPRODUCT":
            return {
                ...state,
                listProduct: [...state.listProduct, action.payload.dataProd],
            }
        case "DELETEPRODUK":
            return {
                ...state,
                listProduct: state.listProduct.filter((item, index) => index !== action.payload),
            }
        case "LOGIN":
            return {
                ...state,
            } 
        case "REGISTER":
            return {
                ...state,
            } 
        case "LOGOUT":
            return {
                ...state,
            }
        case "ADDTOBESTSELLER":
            return {
                ...state,
                bestSeller: [...state.bestSeller, action.payload.dataProduct],
            }      
        case "ADDTONEWARRIVAL":
            return {
                ...state,
                newArrival: [...state.newArrival, action.payload.dataProduct],
                
            }  
        
        case "ADDTOBESTDISCOUNTITEM":
            return {
                ...state,
                discountItem: [...state.discountItem, action.payload.dataProduct],
            }
        case "PLUS_ORDER":
            return {
                ...state
            }
        case "MINUS_ORDER":
            return {
                ...state
            }
        case "VIEWDETAIL":
            return {
                ...state,
                detailProduct: action.payload.detailProduct,
            }
        case "ADDTOCART":
            return {
                ...state,
            }           
        default:
            return state
        }
    }
export default productReducer