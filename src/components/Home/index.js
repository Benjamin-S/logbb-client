import Banner from "./Banner";
import MainView from "./MainView";
import React from "react";
import agent from "../../agent";
import { connect } from "react-redux";
import { HOME_PAGE_LOADED } from "../../constants/actionTypes";
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
      <div>
        <Banner appName={this.props.appName} />
        <MainView />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
