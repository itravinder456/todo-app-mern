import userConstants from "./userConstants/userConstants";




export function sideMenuActionPayload(payload) {
    console.log("ckaskcjskcbsc",payload)
    return {
      type: userConstants.sideMenuToggle,
      payload,
    };
  }
  