'use strict';
'use client';

import { Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';
import Marquee from 'react-fast-marquee';
import { animated, useSpring } from 'react-spring';

const style = require('./Skills.module.css');

export function Skills() {
  return (
    <>
      <div className={style.container}>
        <h2 className={style.header}>Skills</h2>
        <SkillsCarousel
          title="Frontend"
          skills={[
            'Html5',
            'Css3',
            'Node.js',
            'React.js',
            'Next.js',
            'Angular',
            'jQuery ',
            'styled-components',
          ]}
        />
        <SkillsCarousel
          title="Backend"
          skills={[
            'Express',
            'Jest',
            'Docker',
            'Pino-logger',
            'SQL',
            'MongoDB',
          ]}
        />
        <SkillsCarousel
          title="Cloud"
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
          ]}
        />
        <SkillsCarousel
          title="Mobile"
          skills={[
            'React Native',
            'XCode',
            'Android Studio',
            'Ionic',
            'React Native',
            'XCode',
            'Android Studio',
            'Ionic',
          ]}
        />
        <SkillsCarousel
          title="Software"
          skills={[
            'JavaScript ES6',
            'Python',
            'C# with Unity',
            'C/C++',
            'Java',
          ]}
        />
      </div>
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
    <div className={style.categoryContainer}>
      <h3 className={style.skillCategory}>{title}</h3>
      <Marquee autoFill={true} pauseOnHover={true}>
        <div className={style.skillList}>
          {skills.map((item, index) => (
            <Typography variant="body1" key={index}>
              {item}
            </Typography>
          ))}
        </div>
      </Marquee>
    </div>
  );
}
