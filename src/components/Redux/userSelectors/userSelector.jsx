import {createSelector} from 'reselect'


const selectUser=state=>state.user
export const selectRegisterUser=createSelector([selectUser],
    (regSelector)=>regSelector.RegisterUser
    )

  

