import React from "react";
import { connect } from "react-redux";
import {
  follow,
  unfollow,
  setCurrentPage,
  toggleFollowingProgress,
  getUsers,
} from "../../redux/usersPage_reducer";
import Users from "./Users";
import Preloader from "../common/preloader/preloader";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";
import {
  gettotalItemsCount ,
  getUsersMap,
  getPageSize,
  getCurrentPage,
  getIsFetching,
  getFollowingInProgress,
} from "../../redux/user_selectors";

class UsersContainer extends React.Component {
  componentDidMount() {
    let {currentPage,pageSize}= this.props
    this.props.getUsers(currentPage, pageSize);
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.isAuth != prevProps.isAuth) {
    }
  }

  onPageChanged = (currentPage) => {
    let {pageSize}= this.props
    this.props.getUsers(currentPage, pageSize); 
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalItemsCount ={this.props.totalItemsCount }
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          unfollow={this.props.unfollow}
          follow={this.props.follow}
          onPageChanged={this.onPageChanged}
          followingInProgress={this.props.followingInProgress}
          isFetching={this.props.isFetching}
          isAuth={this.props.isAuth}
        />
      </>
    );
  }
}

/* let mapSateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalItemsCount : state.usersPage.totalItemsCount ,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};
*/
let mapSateToProps = (state) => {
  return {
    users: getUsersMap(state),
    pageSize: getPageSize(state),
    totalItemsCount : gettotalItemsCount (state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
    isAuth: state.auth.isAutn,
  };
};

export default compose(
  //WithAuthRedirect,
  connect(mapSateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers,
  })
)(UsersContainer);
