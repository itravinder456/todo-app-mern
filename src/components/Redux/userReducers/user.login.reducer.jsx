import userConstants from '../userConstants/userConstants'

const initial_state = {
    loginedUser:"" ,
    RegisterUser:"" 
}

const userLoginReducer = (state = initial_state, action) => {
    switch (action.type) {
        case userConstants.user_Login:
            if (action.payload.token!=="fail") {
                // window.location.href="/dashboard"
                return {
                    ...state,
                    loginedUser: action.payload
                }
            }else{
                return {
                    ...state,
                    loginedUser:action.payload.token
                }
            }
            case userConstants.user_Register:
                console.log("akdsjcscacscdask",action)
                    return{
                        ...state,
                          RegisterUser:action.payload 

                        
                    }
        default:
            return {
                state
            }
    }
}

export default userLoginReducer