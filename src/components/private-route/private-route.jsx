import {AppRoute, AuthorizationStatus} from "../../const";
import {connect} from "react-redux";
import {privateRouteTypes} from "../../prop-types";
import {Route, Redirect} from "react-router-dom";
import React from "react";

const PrivateRoute = (props) => {
  const {render, path, exact, authorizationStatus} = props;

  return (
    <Route
      path = {path}
      exact = {exact}
      render = {(routeProps) => {
        return (
          authorizationStatus === AuthorizationStatus.AUTH
            ? render(routeProps)
            : <Redirect to = {AppRoute.LOGIN} />
        );
      }}
    />
  );
};

PrivateRoute.propTypes = privateRouteTypes;

const mapStateToProps = (state) => ({
  authorizationStatus: state.USER.authorizationStatus,
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
