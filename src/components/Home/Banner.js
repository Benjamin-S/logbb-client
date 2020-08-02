import React from "react";
import { Typography, Container } from "@material-ui/core";

const Banner = ({ appName }) => {
  return (
    <Container maxWidth="xl">
      <Typography variant="h2" component="h1">
        {appName.toLowerCase()}
      </Typography>
      <Typography variant="subtitle1">A place to track your baby.</Typography>
    </Container>
  );
};

export default Banner;
