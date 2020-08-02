import BabyList from "../BabyList";
import React from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  babies: state.home.babies,
});

const MainView = (props) => {
  return <BabyList babies={props.babies} />;
};

export default connect(mapStateToProps, () => ({}))(MainView);
