'use strict';
'use client';

import { Box, Typography } from '@mui/material';
import Marquee from 'react-fast-marquee';

const style = require('./Skills.module.css');

export function Skills() {
  return (
    <>
      <Box className={style.container}>
        <Typography variant="h2" className={style.header}>
          Skills
        </Typography>
        <SkillsCarousel
          title="Frontend"
          skills={[
            'Html5',
            'Css3',
            'Node.js',
            'React.js',
            'Next.js',
            'Material UI',
          ]}
        />
        <SkillsCarousel
          title="Backend"
          skills={['Express', 'Docker', 'Jest']}
        />
        <SkillsCarousel
          title="AWS Cloud"
          skills={[
            'Cognito',
            'DynamoDB',
            'S3',
            'EC2',
            'ECS',
            'CloudWatch',
            'Pinpoint',
            'SNS',
            'SES',
            'Lambda',
            'IAM',
          ]}
        />
        <SkillsCarousel
          title="Mobile"
          skills={['React Native', 'XCode', 'Android Studio', 'Ionic']}
        />
        <SkillsCarousel
          title="Software"
          skills={['JavaScript ES6', 'C# with Unity', 'C/C++', 'Java']}
        />
      </Box>
    </>
  );
}

/**
 * Creates a carousel of skills
 * @param {string} title - title of skills category
 * @param {Array<string>} skills - Skills that will rotate in the carousel
 * @returns {JSX.Element} - Carousel of skills
 */
function SkillsCarousel({ title, skills }) {
  return (
    <Box className={style.categoryContainer}>
      <Typography variant="h5" className={style.skillCategory}>
        {title}
      </Typography>
      <Marquee autoFill={true} pauseOnHover={true}>
        <Box className={style.skillList}>
          {skills.map((item, index) => (
            <Typography variant="body1" key={index}>
              {item}
            </Typography>
          ))}
        </Box>
      </Marquee>
    </Box>
  );
}
