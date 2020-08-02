import React from "react";
import ListErrors from "./ListErrors";
import agent from "../agent";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  LOGIN,
  LOGIN_PAGE_UNLOADED,
  UPDATE_FIELD_BABY,
} from "../constants/actionTypes";
import { TextField, Container, Button, Typography } from "@material-ui/core";

const mapStateToProps = (state) => ({ ...state.auth });

const mapDispatchToProps = (dispatch) => ({
  onChangeEmail: (value) =>
    dispatch({ type: UPDATE_FIELD_BABY, key: "email", value }),
  onChangePassword: (value) =>
    dispatch({ type: UPDATE_FIELD_BABY, key: "password", value }),
  onSubmit: (email, password) =>
    dispatch({ type: LOGIN, payload: agent.Auth.login(email, password) }),
  onUnload: () => dispatch({ type: LOGIN_PAGE_UNLOADED }),
});

class CreateBaby extends React.Component {
  constructor() {
    super();
    this.changeEmail = (event) => this.props.onChangeEmail(event.target.value);
    this.changePassword = (event) =>
      this.props.onChangePassword(event.target.value);
    this.submitForm = (email, password) => (event) => {
      event.preventDefault();
      this.props.onSubmit(email, password);
    };
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {
    const { email, password } = this.props;
    return (
      <Container component="main" maxWidth="xs">
        <div
          style={{
            marginTop: 64,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            style={{ paddingTop: "2rem" }}
            component="h1"
            variant="h5"
          >
            Sign In
          </Typography>
          <Typography className="text-xs-center">
            <Link to="/register">Need an account?</Link>
          </Typography>

          <ListErrors errors={this.props.errors} />

          <form
            onSubmit={this.submitForm(email, password)}
            style={{ width: "100%", marginTop: 6 }}
          >
            <TextField
              variant="outlined"
              margin="normal"
              type="email"
              fullWidth
              label="Email Address"
              required
              name="email"
              value={email}
              onChange={this.changeEmail}
              autoComplete="email"
            />

            <TextField
              variant="outlined"
              margin="normal"
              type="password"
              fullWidth
              label="Password"
              required
              name="password"
              value={password}
              onChange={this.changePassword}
              autoComplete="current-password"
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={this.props.inProgress}
            >
              Sign in
            </Button>
          </form>
        </div>
      </Container>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CreateBaby);
