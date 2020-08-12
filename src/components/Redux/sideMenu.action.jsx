import userConstants from "./userConstants/userConstants";

export function sideMenuActionPayload(payload) {
  return {
    type: userConstants.sideMenuToggle,
    payload,
  };
}
