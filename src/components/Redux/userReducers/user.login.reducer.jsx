import userConstants from '../userConstants/userConstants'

const initial_state = {
    loginedUser:"" 
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
                console.log("akdsjcscacscdask",action)
                    return {
                        ...state,
                        loginedUser:action.payload.token
                    }
                }
              
        default:
            return {
                state
            }
    }
}

export default userLoginReducer