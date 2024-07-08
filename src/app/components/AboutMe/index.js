'use client';

import React from 'react';
import Image from 'next/image';
import imageOfMe from './../../../../public/imageOfME.jpg';
import { Box, Typography } from '@mui/material';
import styles from './AboutMe.module.css';
function AboutMe() {
  return (
    <>
      <Box className={styles.container}>
        <Box className={styles.showcaseContainer}>
          <Box className={styles.imageContainer}>
            <Image
              priority={true}
              className={styles.imageStyle}
              src={imageOfMe}
              alt="image of Ibrahim Muhammad Yusoof facing the camera with a slight smile"
            />
            <Box className={styles.prettyBox} />
          </Box>
        </Box>

        <Box className={styles.wordContainer}>
          <Typography variant="h2" className={`${styles.AboutMe}`}>
            About Me
          </Typography>
          <Typography variant="body1" className={styles.aboutMePara}>
            I grew up trying to scratch an itch for technology, started with MS
            Paint, stumbled into PhotoShop and AfterEffects. My curiosity lead
            me to find joy building a Craps game using Java. Since then I have
            lead a career with <strong>passion</strong>,{' '}
            <strong>curiosity</strong> and <strong>enthusiasm</strong>.
          </Typography>
        </Box>
      </Box>
    </>
  );
}

export default AboutMe;
