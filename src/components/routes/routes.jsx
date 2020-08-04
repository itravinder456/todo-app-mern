import React from 'react'
import WelcomePage from '../coreComponents/welcomePage'
import SignUp from '../coreComponents/SignUp'
import ForgotPassword from '../coreComponents/ForgotPassword'
import UserContent from '../coreComponents/userComponents/userContent'
import {  Route, Switch, Redirect } from 'react-router-dom';

const Routes = () => {
    return (<>
 
            <Switch>
                        <Route exact path="/" component={WelcomePage} />
                        <Route path="/signup" component={SignUp} />
                        <Route path="/forgotPassword" component={ForgotPassword} />
                        <Route path="/userHome" component={UserContent} />
                    </Switch>
   
        
    </>)
}

export default Routes;