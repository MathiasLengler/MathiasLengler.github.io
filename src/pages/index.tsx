import {GetStaticProps} from "next";
import React from "react";
import {Project, projects} from "../data/projects";
import {Grid} from "@material-ui/core";
import {ProjectCard} from "../components/ProjectCard";

interface ProjectsProps {
  projects: Array<Project>;
}

export const getStaticProps: GetStaticProps<ProjectsProps> = async () => {
  return {
    props: {
      projects
    }
  };
};

const Projects: React.FunctionComponent<ProjectsProps> = (props) => {
  return (
    <>
      <Grid container spacing={2}>
        {props.projects.map((project, i) => (
          <Grid item key={i} xs={12} sm={6}>
            <ProjectCard project={project}/>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Projects;

