import userConstants from '../userConstants/userConstants'

const initial_state = {
    loginedUser:null 
}

const userLoginReducer = (state = initial_state, action) => {
    switch (action.type) {
        case userConstants.user_Login:
            
                if (action.payload) {
                    window.location.href="/dashboard"
                      return {
                    ...state,
                    loginedUser: action.payload
                }
                }
              
            
        default:
            return {
                state
            }
    }
}
export default userLoginReducer