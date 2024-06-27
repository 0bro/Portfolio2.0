import { Typography } from '@mui/material';
import { useState } from 'react';
import experiences from '../../data/experience.js';
const { default: Experience } = require('./Experience');

export default function ExperienceView() {
  const [open, setOpen] = useState(-1);
  return (
    <>
      <Typography variant="h2">Experience</Typography>
      {experiences.map((val, index) => {
        return (
          <Experience
            data={val}
            key={index}
            toggle={open === index}
            onClick={() => {
              if (open === index) setOpen(-1);
              else setOpen(index);
            }}
          />
        );
      })}
    </>
  );
}
