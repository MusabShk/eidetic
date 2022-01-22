import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { AiFillHome } from "react-icons/ai";
import classes from "./Navbar.module.css";
import { TiPlus } from "react-icons/ti";
import { useRouter } from "next/router";

// import Head from "next/head";

// const useStyles = makeStyles(() => {
//   return {
//     nav: {
//       backgroundColor: "#70FF8E",
//     },
//   };
// });

const Navbar = () => {
  const router = useRouter();

  const newEideticOnclickHandler = () => {
    router.push(`/NewEidetic`);
  };

  const homeOnclickHandler = () => {
    router.push(`/`);
  };

  // const classes = useStyles();
  return (
    <>
      <AppBar elevation={2}>
        <Toolbar className={classes.nav}>
          <Container maxWidth="lg">
            <Grid container>
              <Grid item>
                <Typography variant="h4" className={classes.nav_heading}>
                  Eidetic &nbsp;
                </Typography>
              </Grid>
              <Grid item className={classes.nav_grid_item}>
                <TiPlus
                  className={classes.nav_icons}
                  onClick={newEideticOnclickHandler}
                />
              </Grid>
              <Grid item>
                <AiFillHome
                  className={classes.nav_icons}
                  onClick={homeOnclickHandler}
                />
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
