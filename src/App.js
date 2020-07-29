import React from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";

import { Route, withRouter, BrowserRouter } from "react-router-dom";

import UsersContainer from "./components/users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/login/login";
import { connect, Provider } from "react-redux";
import { initializeApp } from "./redux/app-reduser";
import { compose } from "redux";
import Preloader from "./components/common/preloader/preloader";
import store from "./redux/redux-store";
import {WithSuspense} from "./hoc/WithSuspense"

//import DialogsContainer from "./components/Dialogs/DialogsContainer";
//import ProfileContainer from "./components/Profile/ProfileContainer";
const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);
//const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
//const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));

class App extends React.Component {
  componentWillMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Nav />
        <div className="app__wrapper__content">
          <Route
            path="/dialogs"
            render={WithSuspense(DialogsContainer)}
          />
          <Route
            path="/profile/:userId?"
            render={WithSuspense(ProfileContainer)}
          />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/login" render={() => <Login />} />
        </div>
      </div>
    );
  }
}
let mapSateToProps = (state) => ({
  initialized: state.app.initialized,
});

let AppContainer = compose(
  withRouter,
  connect(mapSateToProps, { initializeApp })
)(App);

const MainApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};
export default MainApp;
