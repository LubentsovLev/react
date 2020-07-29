import React from "react";
import Profile from "./Profile";
import * as Axios from "axios";
import { connect } from "react-redux";
import {
  getUserProfile,
  getUserStatus,
  updateUserStatus,
} from "../../redux/profilePage_reducer";
import { withRouter, Redirect } from "react-router-dom";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.authorizedUserId;
      if(!userId){
        this.props.history.push("/login")
      }
    }
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }

  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateUserStatus={this.props.updateUserStatus}
      />
    );
  }
}
let mapSateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId:state.auth.userId,
  isAutn:state.auth.isAutn,
});

export default compose(
  connect(mapSateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
  withRouter,
  WithAuthRedirect   
)(ProfileContainer);
