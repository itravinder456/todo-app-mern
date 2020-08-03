import React from 'react'
import WelcomePage from '../coreComponents/welcomePage'
import SignUp from '../coreComponents/SignUp'
import ForgotPassword from '../coreComponents/ForgotPassword'
import {Switch,Route} from "react-router-dom"

const Routes = () => {
    return (<>
        <Switch>
            <Route exact path="/" component={WelcomePage} />
            <Route path="/signup" component={SignUp} />
            <Route path="/forgotPassword" component={ForgotPassword} />
        </Switch>
    </>)
}

export default Routes;