import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import {
  Drawer,
  withStyles,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import HomeIcon from "@material-ui/icons/Home";

const drawerWidth = 240;

const useStyles = (theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerContainer: {
    overflow: "auto",
  },
  drawerPaper: {
    width: drawerWidth,
  },
});

const LoggedOutView = (props) => {
  if (!props.currentUser) {
    return (
      <ul className="nav navbar-nav pull-xs-right">
        <li className="nav-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>

        <li className="nav-item">
          <Link to="login" className="nav-link">
            Sign in
          </Link>
        </li>

        <li className="nav-item">
          <Link to="register" className="nav-link">
            Sign up
          </Link>
        </li>
      </ul>
    );
  }
  return null;
};

// const LoggedInView = (props) => {
//   if (props.currentUser) {
//     return (
//       <ul className="nav flex-column">
//         <li className="nav-item">
//           <Link to="" className="nav-link">
//             Home
//           </Link>
//         </li>

//         <li className="nav-item">
//           <Link to="editor" className="nav-link">
//             <ion-icon className="ion-compose"></ion-icon>&nbsp;New Post
//           </Link>
//         </li>

//         <li className="nav-item">
//           <Link to="settings" className="nav-link">
//             <svg
//               width="1em"
//               height="1em"
//               viewBox="0 0 16 16"
//               className="bi bi-gear-wide feather"
//               fill="currentColor"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 fill-rule="evenodd"
//                 d="M8.932.727c-.243-.97-1.62-.97-1.864 0l-.071.286a.96.96 0 0 1-1.622.434l-.205-.211c-.695-.719-1.888-.03-1.613.931l.08.284a.96.96 0 0 1-1.186 1.187l-.284-.081c-.96-.275-1.65.918-.931 1.613l.211.205a.96.96 0 0 1-.434 1.622l-.286.071c-.97.243-.97 1.62 0 1.864l.286.071a.96.96 0 0 1 .434 1.622l-.211.205c-.719.695-.03 1.888.931 1.613l.284-.08a.96.96 0 0 1 1.187 1.187l-.081.283c-.275.96.918 1.65 1.613.931l.205-.211a.96.96 0 0 1 1.622.434l.071.286c.243.97 1.62.97 1.864 0l.071-.286a.96.96 0 0 1 1.622-.434l.205.211c.695.719 1.888.03 1.613-.931l-.08-.284a.96.96 0 0 1 1.187-1.187l.283.081c.96.275 1.65-.918.931-1.613l-.211-.205a.96.96 0 0 1 .434-1.622l.286-.071c.97-.243.97-1.62 0-1.864l-.286-.071a.96.96 0 0 1-.434-1.622l.211-.205c.719-.695.03-1.888-.931-1.613l-.284.08a.96.96 0 0 1-1.187-1.186l.081-.284c.275-.96-.918-1.65-1.613-.931l-.205.211a.96.96 0 0 1-1.622-.434L8.932.727zM8 12.997a4.998 4.998 0 1 0 0-9.995 4.998 4.998 0 0 0 0 9.996z"
//               />
//             </svg>
//             &nbsp;Settings
//           </Link>
//         </li>

//         {/* <li className="nav-item">
//           <Link to={`@${props.currentUser.username}`} className="nav-link">
//             {props.currentUser.username}
//           </Link>
//         </li> */}
//       </ul>
//     );
//   }

//   return null;
// };

const LoggedInView = (props) => {
  if (props.currentUser) {
    return (
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText>Dashboard</ListItemText>
        </ListItem>

        <ListItem button>
          <ListItemText>New Post</ListItemText>
        </ListItem>

        <ListItem button component={Link} to="/settings">
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText>Settings</ListItemText>
        </ListItem>
      </List>
    );
  }

  return null;
};

class Sidebar extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{ paper: classes.drawerPaper }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          {!this.props.currentUser && (
            <LoggedOutView currentUser={this.props.currentUser} />
          )}
          {this.props.currentUser && (
            <LoggedInView currentUser={this.props.currentUser} />
          )}
        </div>
      </Drawer>
      // <nav className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
      //   <div className="sidebar-sticky pt-3">
      //     {/* <div className="container"> */}
      // <LoggedOutView currentUser={this.props.currentUser} />
      // <LoggedInView currentUser={this.props.currentUser} />
      //     {/* </div> */}
      //   </div>
      // </nav>
    );
  }
}

export default withStyles(useStyles)(Sidebar);
