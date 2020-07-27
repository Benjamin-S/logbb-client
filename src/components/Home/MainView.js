import BabyList from '../BabyList';
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  babies: state.home.babies,
});

const MainView = (props) => {
  return (
    <div className="col-md-9">
      <div className="feed-toggle">
        <ul className="nav nav-pills outline-active">
          <li className="nav-item">
            <Link to="" className="nav-link active">
              Global Feed
            </Link>
          </li>
        </ul>
      </div>

      <BabyList babies={props.babies} />
    </div>
  );
};

export default connect(mapStateToProps, () => ({}))(MainView);
