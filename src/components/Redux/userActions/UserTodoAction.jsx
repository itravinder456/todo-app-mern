import { getServiceCALLS } from "../../tools/helpers";
import userConstants from "../userConstants/userConstants";

const GetUserTodos = (payload) => {
  return async (dispatch) => {
    let userTodos = await getServiceCALLS("/usertodos", payload);
    console.log("asdnjakdnjndkdnsjakd", userTodos);
    dispatch(userTodosPayLoad(userTodos));
  };
};
export default GetUserTodos;

export function userTodosPayLoad(payload) {
  return {
    type: userConstants.userTodos,
    payload,
  };
}

export function broadCastUpdates(payload) {
  return {
    type: userConstants.broadCastUpdates,
    payload,
  };
}
