"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "./AboutMe.module.css";
import Image from "next/image";
import imageOfMe from "./../../../../public/imageOfME.jpg";
import LinkUpArrow from "../LinkUpArrow/LinkUpArrow";
function AboutMe() {
  const [offsetX, setOffsetX] = useState("-200px");
  const handleScroll = () => {
    const data = {
      threshold: (window.visualViewport.height / 4).toFixed(0),
      distanceInPixel: Math.abs(
        document.getElementById("MovingContainer").getBoundingClientRect().y -
          window.visualViewport.height / 2
      ),
    };
    // TODO: DECIDE
    // Coming from the right
    // if (data.distanceInPixel > data.threshold)
    //   setOffsetX(`${data.distanceInPixel - data.threshold}px`);

    // Coming from left
    if (data.distanceInPixel > data.threshold)
      setOffsetX(`${-1 * Math.abs(data.distanceInPixel - data.threshold)}px`);
    else {
      setOffsetX(0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.showcaseContainer}>
          {/* TODO: Move into it's own component so we can make use it again lol */}
          <div id="MovingContainer" className={styles.AboutMeContainer}>
            <h1
              className={`${styles.AboutMe} ${styles.trace}`}
              style={{ transform: `translate(${offsetX}, 0)` }}
            >
              About Me
            </h1>
            <h1
              className={`${styles.AboutMe} ${styles.header}`}
              style={{ transform: `translate(${offsetX}, 0)` }}
            >
              About Me
            </h1>
          </div>

          <div className={styles.imageContainer}>
            <div className={styles.prettyBox} />
            <Image
              className={styles.imageStyle}
              src={imageOfMe}
              alt="image of Ibrahim Muhammad Yusoof facing the camera with a slight smile"
            />
          </div>
        </div>

        <p className={styles.aboutMePara}>
          A tireless developer that works against the clock to squeeze as much
          learning into a day.
          <br />
          <br />I have explored software development and web development very
          early into my life. At the age of 15, I explored DOS operating system,
          in high school I taught myself Java to experiment in game development,
          and app development. I was able to create a simple craps game with a
          open source game engine...
        </p>

        <LinkUpArrow href="/">Read More</LinkUpArrow>
      </div>
    </>
  );
}

export default AboutMe;
