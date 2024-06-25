import { Container, Typography } from '@mui/material';
import Project from './Project';
import { projects } from './../../data/projects.json';
import { Button } from '../Button';

const style = require('./ProjectsView.module.css');

function ProjectsView({ count = 0, ...props }) {
  return (
    <>
      <Typography variant="h2">My Projects</Typography>
      <Container className={style.topContainer}>
        <Container className={style.projectsContainer}>
          {projects.map((val, index) => {
            if (count == 0 || index < count)
              return <Project key={index} project={val} />;
          })}
        </Container>
        <Container className={style.buttonStyle}>
          <Button>View All Projects</Button>
        </Container>
      </Container>
    </>
  );
}

export default ProjectsView;
