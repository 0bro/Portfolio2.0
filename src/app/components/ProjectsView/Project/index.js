import { Container, Typography } from '@mui/material';
import Image from 'next/image';

const style = require('./Project.module.css');

function Project({ project = {}, ...props }) {
  const { title, details, images } = project;
  const { timeline, skills } = details || { timeline: '', skills: [] };
  return (
    <>
      <Container className={style.container}>
        <Image
          src={images[0].path}
          width={120}
          height={120}
          alt={images[0].alt}
        />
        <Container className={style.textContainer}>
          <Typography variant="h4" className={style.projectTitle}>
            {title}
          </Typography>
          <Typography variant="body" className={style.timelineText}>
            {timeline}
          </Typography>

          <Container className={style.tagContainer}>
            {skills.map((val, index) => {
              return (
                <Typography
                  key={index}
                  variant="body"
                  className={style.tagStyle}
                >
                  {val}
                </Typography>
              );
            })}
          </Container>
        </Container>
      </Container>
    </>
  );
}

export default Project;
