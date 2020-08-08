import { restApiCall, getCacheObject, setCacheObject, postServiceCALLS } from "../../tools/helpers";
import userConstants from "../userConstants/userConstants";
import { createBrowserHistory } from "history";
import { useHistory } from "react-router-dom";
import config from "../../tools/config";

// export function loginUser({ username, password }) {
//     return  async (dispatch) =>{
//         return ()=>{

//             let res=await estApiCall("url")
//             if (res) {

//                 dispatch(loginUser(res));
//             }
//         }

//     //   return axios.post(`${API_URL}/signin`, { username, password })
//     //     .then(response => {
//     //       // - Save the JWT token
//     //       setToken(response.data.token);
//     //       // - redirect to the route '/dashboard'
//     //       browserHistory.push('/dashboard');
//     //     })
//     //     .catch((error) => dispatch(onError(error.response || error)));
//     // }
//   };
// }
const loginUserRequest = (payload) => {
  return async (dispatch) => {
    console.log("asdnjakdnjndkdnsjakd", payload);
    let resp = await postServiceCALLS("/user/login",payload)
    console.log("mclasclascamlcmas", resp);
    if (resp) {
      if (resp.token !== "") {
        localStorage.setItem("token", resp.token);
        setCacheObject(config.SESSION_KEY_NAME,resp.user);
        // localStorage.setItem(
        //   config.SESSION_KEY_NAME,
        //   JSON.stringify(resp.user)
        // );
        dispatch(loginPayload(resp.user));
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
//   const setToken = (token) => {
//     localStorage.setItem('token', token);
//   }
