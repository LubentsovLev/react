import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { logOut } from "../../redux/auth-reduser.js";

class HeaderContainer extends React.Component {
 

  render() {
    return (
        <Header {...this.props} />
    );
  }

}


const mapSateToProps = (state) => ({
  
  isAutn:state.auth.isAutn,
  login:state.auth.login
});

export default connect(mapSateToProps, { logOut })(HeaderContainer);
