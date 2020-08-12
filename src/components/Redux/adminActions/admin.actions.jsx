import {
  postServiceCALLS,
  getServiceCALLS,
} from "../../tools/helpers";
import userConstants from "../userConstants/userConstants";

const adminTodos = (payload) => {
  return async (dispatch) => {
    let resp = await postServiceCALLS("/usertodos/alluserstodos");
    if (resp) {
      dispatch(adminTodosPayload(resp));
    }
  };
};
export default adminTodos;
export function adminTodosPayload(payload) {
  return {
    type: userConstants.admin_Todos,
    payload,
  };
}

export function adminUserAction() {
  return async (dispatch) => {
    let resp = await getServiceCALLS("/user");
    if (resp) {
      dispatch(adminUserActionPayload(resp));
    }
  };
}

export function adminUserActionPayload(payload) {
  return {
    type: userConstants.user_Management,
    payload,
  };
}

export function userLogsAction() {
  return async (dispatch) => {
    let resp = await getServiceCALLS("/user/view-logs");
    if (resp) {
      dispatch(userLogsPayload(resp));
    }
  };
}

export function userLogsPayload(payload) {
  return {
    type: userConstants.user_Logs,
    payload,
  };
}
