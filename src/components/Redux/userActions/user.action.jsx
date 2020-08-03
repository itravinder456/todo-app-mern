import {restApiCall }from '../../tools/helpers'
import userConstants from '../userConstants/userConstants'

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
  export function loginUser(payload) {
    return {
      type: userConstants.user_Login,
      payload
    };
  }
//   const setToken = (token) => {
//     localStorage.setItem('token', token);
//   }