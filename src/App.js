import Header from "./components/Header";
import Home from "./components/Home";
import React from "react";
import { connect } from "react-redux";
import "./App.css";

const mapStateToProps = (state) => ({
  appName: state.appName,
});

class App extends React.Component {
  render() {
    return (
      <div>
        <Header appName={this.props.appName} />
        <Home />
      </div>
    );
  }
}

export default connect(mapStateToProps, () => ({}))(App);
