import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

let mapSateToPropsForRedirect = (state) => ({
  isAuth: state.auth.isAutn,
});

export const WithAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Redirect to="/login" />;
      return <Component {...this.props} />;
    }
  }

  let ConnectedAutnRedirectComponent = connect(mapSateToPropsForRedirect)(
    RedirectComponent
  );

  return ConnectedAutnRedirectComponent;
};
