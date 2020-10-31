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
                isLoggedIn: true,
                dataLogin: action.payload.dataLogin,
                userListFromApp: action.payload.userlist
            }
        case "LOGOUT":
            return {
                isLoggedIn: false,
                dataLogin : {},
                userListFromApp: action.payload.userList
            }
        case "REGISTER":
            return {
                userListFromApp: [...action.payload.userlist, action.payload.dataRegister],
                isLoggedIn: true,
                dataLogin: action.payload.dataLogin,
            }
        case "ADDPRODUCT":
            return {
                isLoggedIn: true,
                dataLogin: action.payload.dataLogin,
                userListFromApp: action.payload.userList
            }
        case "ADDTOBESTSELLER":
            return {
                isLoggedIn: true,
                dataLogin: action.payload.dataLogin,
                userListFromApp: action.payload.userlist
            }      
        case "ADDTONEWARRIVAL":
            return {
                isLoggedIn: true,
                dataLogin: action.payload.dataLogin,
                userListFromApp: action.payload.userlist
            }  
        
        case "ADDTOBESTDISCOUNTITEM":
            return {
                isLoggedIn: true,
                dataLogin: action.payload.dataLogin,
                userListFromApp: action.payload.userlist
            }
        case "PLUS_ORDER":
                return {
                    isLoggedIn: true,
                    dataLogin: action.payload.dataLogin,
                    userListFromApp: action.payload.userList
                }
        case "MINUS_ORDER":
            return {
                isLoggedIn: true,
                dataLogin: action.payload.dataLogin,
                userListFromApp: action.payload.userList
            }
        case "VIEWDETAIL":
            return {
                isLoggedIn: true,
                dataLogin: action.payload.dataLogin,
                userListFromApp: action.payload.userList
            }
        default:
            return initialState
        }
    }
export default authReducer