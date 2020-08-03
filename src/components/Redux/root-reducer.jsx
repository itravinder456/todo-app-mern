import {combineReducers} from 'redux'
import userLoginReducer from './userReducers/user.login.reducer'
export default combineReducers({
    user:userLoginReducer
})