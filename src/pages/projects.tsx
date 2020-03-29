import {GetStaticProps} from "next";
import React from "react";
import {Project, projects} from "../data/projects";
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@material-ui/core";
import Link from "next/link";
import {makeStyles} from "@material-ui/styles";

interface ProjectsProps {
  projects: Array<Project>;
}

export const getStaticProps: GetStaticProps<ProjectsProps> = async context => {
  return {
    props: {
      projects
    }
  };
};


const Projects: React.FunctionComponent<ProjectsProps> = (props) => {
  return (
    <>
      <Grid container>
        {props.projects.map((project, i) => (
          <Grid item key={i}>
            <ProjectCard project={project}/>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Projects;

interface ProjectCardProps {
  project: Project
}

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const ProjectCard: React.FunctionComponent<ProjectCardProps> = ({project}) => {
  const classes = useStyles();

  const demo = project.links.demo;
  return (
    <Card className={classes.root}>
      <CardMedia
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
        <a href={project.links.github}>GitHub</a>
        {demo && <a href={demo}>Demo</a>}
      </CardActions>
    </Card>
  );
};