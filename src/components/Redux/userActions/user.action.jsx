import { setCacheObject, postServiceCALLS } from "../../tools/helpers";
import userConstants from "../userConstants/userConstants";
import config from "../../tools/config";

const loginUserRequest = (payload) => {
  return async (dispatch) => {
    let resp = await postServiceCALLS("/user/login", payload);
    if (resp) {
      if (resp.token !== "fail") {
        localStorage.setItem("token", resp.token);
        setCacheObject(config.SESSION_KEY_NAME, resp.user);
        dispatch(loginPayload(resp.user));
      } else {
        dispatch(loginPayload(resp));
      }
    }
  };
};
export default loginUserRequest;
export function loginPayload(payload) {
  return {
    type: userConstants.user_Login,
    payload,
  };
}

// registration Actions-----------------------------------------------------------

export function signUpUserRequest(payload) {
  return async (dispatch) => {
    let resp = await postServiceCALLS("/user/signup", payload);
    if (resp) {
      if (resp.status) {
        dispatch(signUpUserPayload(resp.status));
      } else {
        dispatch(signUpUserPayload(resp.status));
      }
    }
  };
}

export function signUpUserPayload(payload) {
  return {
    type: userConstants.user_Register,
    payload,
  };
}

