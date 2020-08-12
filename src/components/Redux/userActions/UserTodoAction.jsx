import { getServiceCALLS } from "../../tools/helpers";
import userConstants from "../userConstants/userConstants";

export function GetUserTodos (payload) {
  return async (dispatch) => {
    let userTodos = await getServiceCALLS("/usertodos", payload);
    console.log("asdnjakdnjndkdnsjakd", userTodos);
    dispatch(userTodosPayLoad(userTodos));
  };
};

export function userTodosPayLoad(payload) {
  return {
    type: userConstants.user_Todos,
    payload,
  };
}

export function broadCastUpdates(payload) {
  return {
    type: userConstants.broadCast_Updates,
    payload,
  };
}
