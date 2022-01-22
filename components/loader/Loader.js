import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";

const Loader = () => {
  return (
    <>
      <Toolbar />
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <CircularProgress />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Loader;
