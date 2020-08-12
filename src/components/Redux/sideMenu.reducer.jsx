import userConstants from "./userConstants/userConstants";
const initial_state = {
    sideMenuToggle:false
     };
     const sideMenuReducer = (state = initial_state, action) => {
       switch (action.type) {
         case userConstants.sideMenuToggle:
          
             return {
               ...state,
               sideMenuToggle:action.payload,
             };
           
         default:
           return {
             state,
           };
       }
     };
     
     export default sideMenuReducer;