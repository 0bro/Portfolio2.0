'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './AboutMe.module.css';
import Image from 'next/image';
import imageOfMe from './../../../../public/imageOfME.jpg';
import LinkUpArrow from '../LinkUpArrow/LinkUpArrow';
import { Typography } from '@mui/material';
function AboutMe() {
  const [offsetX, setOffsetX] = useState('-200px');
  const handleScroll = () => {
    const data = {
      threshold: (window.visualViewport.height / 4).toFixed(0),
      distanceInPixel: Math.abs(
        document.getElementById('MovingContainer').getBoundingClientRect().y -
          window.visualViewport.height / 2
      ),
    };
    // TODO: DECIDE
    // // Coming from the right
    if (data.distanceInPixel > data.threshold)
      setOffsetX(`${data.distanceInPixel - data.threshold}px`);

    // Coming from left
    if (data.distanceInPixel > data.threshold)
      setOffsetX(`${-1 * Math.abs(data.distanceInPixel - data.threshold)}px`);
    else {
      setOffsetX(100);
    }
  };

  useEffect(() => {
    // window.addEventListener('scroll', handleScroll);
    // return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className={styles.container}>
        {/* TODO: Move into it's own component so we can make use it again lol */}
        <div className={styles.showcaseContainer}>
          <div id="MovingContainer" className={styles.AboutMeContainer}>
            <Typography
              variant="h1"
              className={`${styles.AboutMe} ${styles.header}`}
            >
              About Me
            </Typography>
            <Typography variant='h1' className={`${styles.AboutMe} ${styles.trace}`}>About Me</Typography>
          </div>
          <div className={styles.imageContainer}>
            <Image
              priority={true}
              className={styles.imageStyle}
              src={imageOfMe}
              alt="image of Ibrahim Muhammad Yusoof facing the camera with a slight smile"
            />
            <div className={styles.prettyBox} />
          </div>
        </div>
        <div className={styles.wordContainer}>
          <Typography variant='body1' className={styles.aboutMePara}>
            Accomplished Full Stack Developer with 3+ years of experience
            building high-quality, scalable applications and services.
            Specializing in OOP principles, scalable architecture, test first
            development, supporting CI/CD pipelines, and AWS Cloud Services.
          </Typography>

          <LinkUpArrow href="/">Read More</LinkUpArrow>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
