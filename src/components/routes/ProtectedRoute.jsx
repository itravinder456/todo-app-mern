import React from "react";
import { Route, Redirect } from "react-router";
import { checkSession } from "../tools/helpers";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  // check for user authentication status
  var isAuthenticated = checkSession();
  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }
  return (
    <Route
      {...rest}
      render={(props) => {
        return <Component {...props} />;
      }}
    />
  );
};

export default ProtectedRoute;
