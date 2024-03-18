'use client';

import React, { useEffect, useState } from 'react';
import styles from './AboutMe.module.css';
import Image from 'next/image';
import imageOfMe from './../../../../public/imageOfME.jpg';
import LinkUpArrow from '../LinkUpArrow/LinkUpArrow';
import { Box, Typography } from '@mui/material';
function AboutMe() {
  const [offsetX, setOffsetX] = useState('-1768px');
  const handleScroll = () => {
    const data = {
      threshold: (window.visualViewport.height / 3).toFixed(0),
      distanceInPixel:
        document.getElementById('MovingContainer').getBoundingClientRect().y -
        window.visualViewport.height / 2,
    };

    if (data.distanceInPixel < data.threshold) {
      setOffsetX('0');
    } else setOffsetX('-1768px');
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Box className={styles.container}>
        <Box className={styles.showcaseContainer}>
          <Typography
            id="MovingContainer"
            variant="h1"
            className={`${styles.AboutMe} ${styles.trace} `}
            sx={{
              transform: `translate(${offsetX}, 0)`,
            }}
          >
            About Me
          </Typography>
          <Box className={styles.imageContainer}>
            <Image
              priority={true}
              className={styles.imageStyle}
              src={imageOfMe}
              alt="image of Ibrahim Muhammad Yusoof facing the camera with a slight smile"
            />
            <Box className={styles.prettyBox} />
          </Box>
          <Typography
            variant="h1"
            className={`${styles.AboutMe} ${styles.header}`}
            sx={{ transform: `translate(${offsetX}, 0)` }}
          >
            About Me
          </Typography>
        </Box>{' '}
        <Box className={styles.wordContainer}>
          <Typography variant="body1" className={styles.aboutMePara}>
            Accomplished Full Stack Developer with 3+ years of experience
            building high-quality, scalable applications and services.
            Specializing in OOP principles, scalable architecture, test first
            development, supporting CI/CD pipelines, and AWS Cloud Services.
          </Typography>
          <LinkUpArrow href="/">Read More</LinkUpArrow>
        </Box>{' '}
      </Box>
    </>
  );
}

export default AboutMe;