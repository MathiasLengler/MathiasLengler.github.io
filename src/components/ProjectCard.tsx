import {makeStyles} from "@material-ui/styles";
import React from "react";
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";
import MuiLink from "@material-ui/core/Link";
import {Project} from "../data/projects";

interface ProjectCardProps {
  project: Project
}

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  media: {
    height: 200,
  },
});
export const ProjectCard: React.FunctionComponent<ProjectCardProps> = ({project}) => {
  const classes = useStyles();

  const demo = project.links.demo;
  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        className={classes.media}
        image={project.teaserImgSrc}
        title={`Teaser for ${project.title}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {project.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          TODO: description
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
        <MuiLink href={project.links.github}>GitHub</MuiLink>
        {demo && <MuiLink href={demo}>Demo</MuiLink>}
      </CardActions>
    </Card>
  );
};