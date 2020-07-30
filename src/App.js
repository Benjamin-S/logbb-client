import "bootstrap/dist/css/bootstrap.css";
import agent from "./agent";
import Header from "./components/Header";
import React from "react";
import { connect } from "react-redux";
import "./App.css";
import { REDIRECT, APP_LOAD } from "./constants/actionTypes";
import { store } from "./store";
import { push } from "connected-react-router";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Settings from "./components/Settings";
import Sidebar from "./components/Sidebar";

const mapStateToProps = (state) => ({
  appLoaded: state.common.appLoaded,
  appName: state.common.appName,
  currentUser: state.common.currentUser,
  redirectTo: state.common.redirectTo,
});

const mapDispatchToProps = (dispatch) => ({
  onLoad: (payload, token) => dispatch({ type: APP_LOAD, payload, token }),
  onRedirect: () => dispatch({ type: REDIRECT }),
});

class App extends React.Component {
  componentDidUpdate(prevProps) {
    if (
      this.props.redirectTo &&
      this.props.redirectTo !== prevProps.redirectTo
    ) {
      // this.context.router.replace(this.props.redirectTo);
      store.dispatch(push(this.props.redirectTo));
      this.props.onRedirect();
    }
  }

  componentWillMount() {
    const token = window.localStorage.getItem("jwt");
    if (token) {
      agent.setToken(token);
    }

    this.props.onLoad(token ? agent.Auth.current() : null, token);
  }

  render() {
    if (this.props.appLoaded) {
      return (
        <div>
          <Header
            currentUser={this.props.currentUser}
            appName={this.props.appName}
          />
          <div className="container-fluid">
            <div className="row">
              <Sidebar
                currentUser={this.props.currentUser}
                appName={this.props.appName}
              />
              <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/settings" component={Settings} />
                <Route exact path="/" component={Home} />
              </Switch>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div>
        <Header
          appName={this.props.appName}
          currentUser={this.props.currentUser}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
