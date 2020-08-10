import { combineReducers } from "redux";
import userLoginReducer from "./userReducers/user.login.reducer";
import UserTodoReducer from "./userReducers/UserTodoReducer";
import AdminTodoReducer from "./adminReducer/admin.reducers";
import sideMenuReducer from "./sideMenu.reducer";

export default combineReducers({
  user: userLoginReducer,
  userTodos: UserTodoReducer,
  adminReducers:AdminTodoReducer,
  sideMenuReducer:sideMenuReducer
});
