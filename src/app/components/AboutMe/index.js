'use client';

import React, { useEffect, useState } from 'react';
import MySVG from './../../../../public/assets/About Me.svg';
import Image from 'next/image';
import imageOfMe from './../../../../public/imageOfME.jpg';
import LinkUpArrow from '../LinkUpArrow/LinkUpArrow';
import { Box, Container, Divider, Typography } from '@mui/material';
import styles from './AboutMe.module.css';
function AboutMe() {
  // const [offsetX, setOffsetX] = useState('-200px');
  const [aboutMeBox, setAboutMeBox] = useState({ height: 0, width: 0 });
  // const handleScroll = () => {
  //   const data = {
  //     threshold: (window.visualViewport.height / 3).toFixed(0),
  //     distanceInPixel:
  //       document.getElementById('MovingContainer').getBoundingClientRect().y -
  //       window.visualViewport.height / 2,
  //   };

  //   if (data.distanceInPixel < data.threshold) {
  //     setOffsetX('0');
  //   } else setOffsetX('-200px');
  // };

  useEffect(() => {
    // setAboutMeBox({
    //   height: document.getElementById('MovingContainer').getBoundingClientRect()
    //     .height,
    //   width: document.getElementById('MovingContainer').getBoundingClientRect()
    //     .width,
    // });
    // window.addEventListener('scroll', handleScroll);
    // return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
            Accomplished Full Stack Developer with 3+ years of experience
            building high-quality, scalable applications and services.
            Specializing in OOP principles, scalable architecture, test first
            development, supporting CI/CD pipelines, and AWS Cloud Services.
          </Typography>
          <LinkUpArrow href="/">Read More</LinkUpArrow>
        </Box>
      </Box>
    </>
  );
}

export default AboutMe;
