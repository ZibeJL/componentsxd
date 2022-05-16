import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import { card, divider } from "./Style";

export default function MediaCard(props) {
  const { img, tittle, description } = props
  return (
    <Card sx={card("asdasdasd")}>
      <img
        style={{ marginBottom: "1.5rem" }}
        src={img}
        height="65rem"
        width="65rem"
        alt="cap"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {tittle}
        </Typography>
        <Divider
          sx={divider}
          variant="middle"
        />
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}
