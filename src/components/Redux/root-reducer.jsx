import { combineReducers } from "redux";
import userLoginReducer from "./userReducers/user.login.reducer";
import UserTodoReducer from "./userReducers/UserTodoReducer";
export default combineReducers({
  user: userLoginReducer,
  userTodos: UserTodoReducer,
});
