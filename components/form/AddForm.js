import React from "react";
import classes from "./AddForm.module.css";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import { useRef } from "react";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { useState } from "react";
var imageExists = require("image-exists");

const AddForm = (props) => {
  const titleRef = useRef();
  const imageLinkRef = useRef();
  const descriptionRef = useRef();
  const [error, setError] = useState(false);

  const submitHandler = async (event) => {
    event.preventDefault();
    imageExists(imageLinkRef.current.value, function (exists) {
      if (exists) {
        const enteredTitle = titleRef.current.value;
        const enteredImage = imageLinkRef.current.value;
        const enteredMemory = descriptionRef.current.value;
        const eideticData = {
          title: enteredTitle,
          image: enteredImage,
          description: enteredMemory,
        };
        props.newEidetic(eideticData);
      } else {
        setError(true);
      }
    });
    // const res = await fetch(imageLinkRef.current.value);
    // console.log(res);

    // const link = "https://cors-anywhere.herokuapp.com/";
    // async function checkImage(url) {
    //   const res = await fetch(link.concat(url));
    //   return res.ok;
    // }
    // let result = await checkImage(imageLinkRef.current.value);
    // // (await checkImage(imageLinkRef.current.value)) &&
    // // (imageLinkRef.current.value.endsWith(".jpg") ||
    // //   imageLinkRef.current.value.endsWith(".gif") ||
    // //   imageLinkRef.current.value.endsWith(".png"));

    // if (result) {

    // } else {
    //   imageLinkRef.current.focus();
    // }

    // const checkImage = async (url) => {
    //   const res = await fetch(url);
    //   const buff = await res.blob();

    //   return buff.type.startsWith("image/");
    // };
  };

  const imageLinkChangeHandler = () => setError(false);

  return (
    <>
      <Toolbar />
      <Container maxWidth="lg">
        <Grid container className={classes.container}>
          <Grid item xs={12}>
            <Typography className={classes.page_heading} gutterBottom>
              Add new
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <form autoComplete="off" onSubmit={submitHandler}>
              <TextField
                label="Give a Title"
                variant="standard"
                className={classes.form_fields}
                inputRef={titleRef}
                fullWidth
                required
              />
              <TextField
                label="Image Link"
                variant="standard"
                className={classes.form_fields}
                inputRef={imageLinkRef}
                fullWidth
                required
                error={error}
                helperText={error ? `please entera valid image url` : ``}
                onChange={imageLinkChangeHandler}
              />
              <TextField
                label="Your Memories..."
                variant="outlined"
                multiline
                rows={4}
                inputRef={descriptionRef}
                fullWidth
                className={classes.form_fields}
                required
              />
              <Button
                variant="contained"
                className={classes.submit_button}
                type="submit"
              >
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Submit
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AddForm;
