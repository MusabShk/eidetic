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

  return (
    <>
      <Card onClick={() => router.push(`/${props.carddata.id}`)}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={props.carddata.image}
            alt="green iguana"
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
