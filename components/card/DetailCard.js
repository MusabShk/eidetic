import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import classes from "./DetailCard.module.css";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const DetailCard = (props) => {
  return (
    <>
      <Toolbar />
      <Toolbar />
      <Container>
        <Grid container justifyContent="center" className={classes.container}>
          <Grid item>
            <Card sx={{ maxWidth: 600 }} elevation={5}>
              <CardMedia
                component="img"
                height="100%"
                width="100%"
                image={props.image}
              />
            </Card>
          </Grid>
          <Grid item>
            <Card sx={{ maxWidth: 600, marginTop: 5 }} elevation={1}>
              <CardContent>
                <Typography className={classes.card_title}>
                  {props.title}
                </Typography>

                <Typography className={classes.card_description}>
                  {props.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default DetailCard;
