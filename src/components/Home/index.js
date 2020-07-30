import Banner from "./Banner";
import MainView from "./MainView";
import React from "react";
import agent from "../../agent";
import { connect } from "react-redux";
import { HOME_PAGE_LOADED } from "../../constants/actionTypes";
import Sidebar from "../Sidebar";

// const Promise = global.Promise;

const mapStateToProps = (state) => ({
  appName: state.common.appName,
  token: state.common.token,
});

const mapDispatchToProps = (dispatch) => ({
  onLoad: (payload) => dispatch({ type: HOME_PAGE_LOADED, payload }),
});

class Home extends React.Component {
  componentWillMount() {
    this.props.onLoad(agent.Babies.all());
  }
  render() {
    return (
      <div className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
        <Banner appName={this.props.appName} />
        <div className="container page">
          <div className="row">
            <MainView />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
