import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import classes from "./PhotoCard.module.css";
import { useRouter } from "next/router";

const PhotoCard = (props) => {
  const router = useRouter();

  const clickHandler = () => {
    router.push(`/${props.carddata.id}`);
  };

  return (
    <>
      <Card onClick={clickHandler}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={props.carddata.image}
            alt="no image"
          />
          <CardContent>
            <Typography
              variant="body2"
              className={classes.cardcontent_typography}
            >
              {props.carddata.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </>
  );
};

export default PhotoCard;
