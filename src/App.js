import React from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import {
  Route,
  withRouter,
  BrowserRouter,
  HashRouter,
  Switch,
  Redirect,
} from "react-router-dom";
import UsersContainer from "./components/users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/login/login";
import { connect, Provider } from "react-redux";
import { initializeApp } from "./redux/app-reduser";
import { compose } from "redux";
import Preloader from "./components/common/preloader/preloader";
import store from "./redux/redux-store";
import { WithSuspense } from "./hoc/WithSuspense";
import Comments from "./components/comments/Comments";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
//import PhotosContainer from "./components/photos/PhotosContainer";
// import Slider from "./components/slider/Slider";
//import MusicContainer from "./components/music/MusicContainer";

const MusicContainer = React.lazy(() =>
  import("./components/music/MusicContainer")
);

const PhotosContainer = React.lazy(() =>
  import("./components/photos/PhotosContainer")
);
const Slider = React.lazy(() => import("./components/slider/Slider"));

class App extends React.Component {
  catchAllUnhandledErrors = (promiseRejectionEvent) => {
    alert("promiseRejectionEvent");
    console.error(promiseRejectionEvent);
  };
  componentWillMount() {
    this.props.initializeApp();
    //window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors)
  }
  componentWillUnmount() {
    //window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors)
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
          <Switch>
            <Route path={"/music"} render={WithSuspense(MusicContainer)} />
            <Route exact path="/" render={() => <Redirect to={"/profile"} />} />
            <Route path="/dialogs" render={() => <DialogsContainer />} />
            <Route
              path="/profile/:userId?"
              render={() => <ProfileContainer />}
            />
            <Route path="/photos" render={WithSuspense(PhotosContainer)} />
            <Route path="/comments" render={() => <Comments />} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path={"/slider"} render={WithSuspense(Slider)} />
            <Route exact path="/login" render={() => <Login />} />
            <Route exact path="*" render={() => <div>404 NOT FOUND</div>} />
          </Switch>
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
    // <BrowserRouter basename={process.env.PUBLIC_URL}></BrowserRouter>
    // <HashRouter></HashRouter>
    <HashRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  );
};
export default MainApp;
