import {
  restApiCall,
  getCacheObject,
  setCacheObject,
  postServiceCALLS,
  getServiceCALLS,
} from "../../tools/helpers";
import userConstants from "../userConstants/userConstants";
import { createBrowserHistory } from "history";
import { useHistory } from "react-router-dom";
import config from "../../tools/config";

const adminTodos = (payload) => {
  return async (dispatch) => {
    let resp = await postServiceCALLS("/usertodos/alluserstodos");
    console.log("asdnjakdnjndkdnsjakd", resp);
    if (resp) {
      dispatch(adminTodosPayload(resp));
    }
  };
};
export default adminTodos;
export function adminTodosPayload(payload) {
  console.log("ckaskcjskcbsc", payload);
  return {
    type: userConstants.admin_Todos,
    payload,
  };
}

export function adminUserAction() {
  return async (dispatch) => {
    let resp = await getServiceCALLS("/user");
    console.log("asdnjakdnjndkdnsjakd", resp);
    if (resp) {
      dispatch(adminUserActionPayload(resp));
    }
  };
}

export function adminUserActionPayload(payload) {
  console.log("ckaskcjskcbsc", payload);
  return {
    type: userConstants.user_Management,
    payload,
  };
}

export function userLogsAction() {
  return async (dispatch) => {
    let resp = await getServiceCALLS("/user/view-logs");
    console.log("asdnjakdnjndkdnsjakd", resp);
    if (resp) {
      dispatch(userLogsPayload(resp));
    }
  };
}

export function userLogsPayload(payload) {
  console.log("ckaskcjskcbsc", payload);
  return {
    type: userConstants.user_Logs,
    payload,
  };
}
