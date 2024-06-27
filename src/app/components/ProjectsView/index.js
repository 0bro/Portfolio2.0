import { Container, Typography } from '@mui/material';
import Project from './Project';
import projects from '../../data/projects.js';
import { Button } from '../Button';
import { useEffect, useState } from 'react';

const style = require('./ProjectsView.module.css');

function ProjectsView({ ...props }) {
  const [seeMore, setSeeMore] = useState(false);

  const lessProjects = projects.slice(0, 3);
  return (
    <>
      <Typography variant="h2">My Projects</Typography>
      <Container className={style.topContainer}>
        <Container className={style.projectsContainer}>
          {!seeMore
            ? lessProjects.map((val, index) => {
                return <Project key={index} project={val} />;
              })
            : projects.map((val, index) => {
                return <Project key={index} project={val} />;
              })}
        </Container>
        <Container className={style.buttonStyle}>
          <Button
            onClick={() => {
              setSeeMore(!seeMore);
            }}
          >
            {!seeMore ? 'See More' : 'See Less'}
          </Button>
        </Container>
      </Container>
    </>
  );
}

export default ProjectsView;
