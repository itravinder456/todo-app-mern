import { restApiCall, getCacheObject, setCacheObject, postServiceCALLS } from "../../tools/helpers";
import userConstants from "../userConstants/userConstants";
import { createBrowserHistory } from "history";
import { useHistory } from "react-router-dom";
import config from "../../tools/config";

const adminTodos = (payload) => {
  return async (dispatch) => {
    let resp = await postServiceCALLS("/usertodos/alluserstodos")
    console.log("asdnjakdnjndkdnsjakd", resp);
    if (resp) {

          dispatch(adminTodosPayload(resp));
        
      
      }

  };
};
export default adminTodos;
export function adminTodosPayload(payload) {
  console.log("ckaskcjskcbsc",payload)
  return {
    type: userConstants.admin_Todos,
    payload,
  };
}






























//   const setToken = (token) => {
//     localStorage.setItem('token', token);
//   }
