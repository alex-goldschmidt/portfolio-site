import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Project = (props) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 250, backgroundPosition: "top" }}
        image="https://images.unsplash.com/photo-1504450874802-0ba2bcd9b5ae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.ProjectTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.ProjectDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={props.link} target="_blank">
          {props.ButtonLinkContent}
        </Button>
        <Button size="small" href={props.repository} target="_blank">
          {props.ButtonRepositoryContent}
        </Button>
      </CardActions>
    </Card>
  );
};

export default Project;
