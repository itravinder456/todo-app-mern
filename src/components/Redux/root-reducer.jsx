import {combineReducers} from 'redux'
import userLoginReducer from './userReducers/user.reducer'
export default combineReducers({
    userLogin:userLoginReducer
})