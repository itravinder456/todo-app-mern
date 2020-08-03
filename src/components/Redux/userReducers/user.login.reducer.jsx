import userConstants from '../userConstants/userConstants'

const initial_state = {
    email: "kjncjkascnjask"
}

const userLoginReducer = (state = initial_state, action) => {
    switch (action.type) {
        case userConstants.user_Login:
            return {
                ...state,
                email: action.payload
            }
        default:
            return {
                state
            }
    }
}
export default userLoginReducer