const initialState = {
    bestSeller:[],
    listProduct:[],
    newArrival:[],
    discountItem:[],
    dataProduct:{},
}


const productReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case "ADDPRODUCT":
            return {
                
                listProduct: [...action.payload.listProduct, action.payload.dataProd],
                bestSeller: action.payload.bestSeller,
                newArrival: action.payload.newArrival,
                discountItem: action.payload.discountItem,
            }
        case "LOGIN":
            return {
                listProduct: action.payload.listProduct,
                bestSeller: action.payload.bestSeller,
                newArrival: action.payload.newArrival,
                discountItem: action.payload.discountItem,
            } 
        case "REGISTER":
            return {
                listProduct: action.payload.listProduct,
                bestSeller: action.payload.bestSeller,
                newArrival: action.payload.newArrival,
                discountItem: action.payload.discountItem,
            } 
        case "LOGOUT":
            return {
                listProduct: action.payload.listProduct,
                bestSeller: action.payload.bestSeller,
                newArrival: action.payload.newArrival,
                discountItem: action.payload.discountItem,
            }
        case "ADDTOBESTSELLER":
            return {
                listProduct: action.payload.listProduct,
                bestSeller: [...action.payload.bestSeller, action.payload.dataProduct],
                newArrival: action.payload.newArrival,
                discountItem: action.payload.discountItem,
            }      
        case "ADDTONEWARRIVAL":
            return {
                listProduct: action.payload.listProduct,
                bestSeller: action.payload.bestSeller,
                newArrival: [...action.payload.newArrival, action.payload.dataProduct],
                discountItem: action.payload.discountItem,
            }  
        
        case "ADDTOBESTDISCOUNTITEM":
            return {
                listProduct: action.payload.listProduct,
                bestSeller: action.payload.bestSeller,
                newArrival: action.payload.newArrival,
                discountItem: [...action.payload.discountItem, action.payload.dataProduct],
            }
        case "PLUS_ORDER":
            return {
                listProduct: action.payload.listProduct,
                bestSeller: action.payload.bestSeller,
                newArrival: action.payload.newArrival,
                discountItem: action.payload.discountItem,
            }
        case "MINUS_ORDER":
            return {
                listProduct: action.payload.listProduct,
                bestSeller: action.payload.bestSeller,
                newArrival: action.payload.newArrival,
                discountItem: action.payload.discountItem,
            }     
        default:
            return initialState
        }
    }
export default productReducer