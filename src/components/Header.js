import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  withStyles,
  Button,
} from "@material-ui/core";

const useStyles = (theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  title: {
    flexGrow: 1,
  },
});

// const LoggedOutView = (props) => {
//   if (!props.currentUser) {
//     return (
//       <ul className="nav navbar-nav pull-xs-right">
//         <li className="nav-item">
//           <Link to="/" className="nav-link">
//             Home
//           </Link>
//         </li>

//         <li className="nav-item">
//           <Link to="login" className="nav-link">
//             Sign in
//           </Link>
//         </li>

//         <li className="nav-item">
//           <Link to="register" className="nav-link">
//             Sign up
//           </Link>
//         </li>
//       </ul>
//     );
//   }
//   return null;
// };

// const LoggedInView = (props) => {
//   if (props.currentUser) {
//     return (
//       <ul className="navbar-nav ml-auto ml-md-0">
//         <li className="nav-item">
//           <Link to="" className="nav-link">
//             Home
//           </Link>
//         </li>

//         <li className="nav-item">
//           <Link to="editor" className="nav-link">
//             <i className="ion-compose"></i>&nbsp;New Post
//           </Link>
//         </li>

//         <li className="nav-item">
//           <Link to="settings" className="nav-link">
//             <i className="ion-gear-a"></i>&nbsp;Settings
//           </Link>
//         </li>

//         <li className="nav-item">
//           <Link to={`@${props.currentUser.username}`} className="nav-link">
//             {props.currentUser.username}
//           </Link>
//         </li>
//       </ul>
//     );
//   }

//   return null;
// };

class Header extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar elevation={0} position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap className={classes.title}>
            {this.props.appName.toLowerCase()}
          </Typography>
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
        </Toolbar>
      </AppBar>

      // <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
      //   {/* <div className="container"> */}
      //   <Link to="/" className="navbar-brand col-md-3 col-lg-2 mr-0 px-3">
      //     {this.props.appName.toLowerCase()}
      //   </Link>

      //   {/* <LoggedOutView currentUser={this.props.currentUser} />
      //   <LoggedInView currentUser={this.props.currentUser} /> */}
      //   {/* </div> */}
      // </nav>
    );
  }
}

export default withStyles(useStyles)(Header);
