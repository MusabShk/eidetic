import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import PhotoCard from "../card/PhotoCard";
import classes from "./Mainhome.module.css";

const Mainhome = (props) => {
  return (
    <>
      <Toolbar />
      <Container maxWidth="lg">
        <Grid container className={classes.container} spacing={3}>
          <Grid item xs={12} className={classes.grid_item_tagline}>
            <Typography className={classes.tagline}>
              Share your memories with the world
            </Typography>
          </Grid>
          {props.carddata.map((card) => (
            <Grid
              item
              xs={12}
              sm={6}
              lg={4}
              className={classes.grid_item_card}
              key={card.id}
            >
              <PhotoCard carddata={card} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Mainhome;
