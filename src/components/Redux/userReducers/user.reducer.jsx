const initial_state={
   loginStatus:false
}

const userLoginReducer=(state=initial_state,action)=>{
switch (action.type) {
    case "userLogin":
        
     return{
         ...state,
         loginStatus:action.payload
     }

    default:
        break;
}


}