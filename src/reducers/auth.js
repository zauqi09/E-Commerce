const initialState = {
    isLoggedIn: false,
    userListFromApp:[{
        username : "admin",
        email : "admin@admin.com",
        name : "admin",
        password : "123",
        type : 1
      },{
        username : "zauqi09",
        email : "zauqi09@gmail.com",
        name : "Fuad Zauqi Nur",
        password : "123",
        type : 1
      }],
    dataLogin : {},
    dataRegister :{}
}


const authReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                isLoggedIn: true,
                dataLogin: action.payload.dataLogin,
                
            }
        case "LOGOUT":
            return {
                ...state,
                isLoggedIn: false,
                dataLogin : {},
                
            }
        case "REGISTER":
            return {
                ...state,
                userListFromApp: [...state.userListFromApp, action.payload.dataRegister],
                isLoggedIn: true,
                dataLogin: action.payload.dataLogin,
            }
        case "ADDPRODUCT":
            return {
                ...state,
            }
        case "ADDTOBESTSELLER":
            return {
                ...state,
            }      
        case "ADDTONEWARRIVAL":
            return {
                ...state,
            }  
        
        case "ADDTOBESTDISCOUNTITEM":
            return {
                ...state,
            }
        case "PLUS_ORDER":
            return {
               ...state,
            }
        case "MINUS_ORDER":
            return {
                ...state,
            }
        case "VIEWDETAIL":
            return {
                ...state,
            }
        case "ADDTOCART":
            return {
                ...state,
            }
        default:
            return state
        }
    }
export default authReducer