import React from "react";
import WelcomePage from "../coreComponents/welcomePage";
import SignUp from "../coreComponents/SignUp";
import ForgotPassword from "../coreComponents/ForgotPassword";
import UserContent from "../coreComponents/userComponents/userContent";
import { Route, Switch, Redirect } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import AdminDashboard from "../coreComponents/adminCompos/AdminDashboard";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login" component={WelcomePage} />
        <Route path="/signup" component={SignUp} />
        <Route path="/forgotPassword" component={ForgotPassword} />

        {/* The below all are protected routes */}
        {/* @all routes should be handled within this section */}
        {/* ************************START******************************* */}
        <ProtectedRoute exact path="/dashboard" component={UserContent} />
        <ProtectedRoute
          exact
          path="/view-users-todos"
          component={AdminDashboard}
        />
        {/* END */}

        <Route path="*">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </>
  );
};

export default Routes;
