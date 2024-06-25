import { Container, Typography } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';

const style = require('./experience.module.css');

export default function Experience({
  data = {},
  toggle = false,
  onClick = () => {},
  ...props
}) {
  const { title, company, bullets, timeline } = data;

  return (
    <>
      <Container className={style.topContainer}>
        <Container className={style.headerContainer} onClick={onClick}>
          <Typography variant="body" className={style.headerText}>
            {title}
          </Typography>
          {toggle ? (
            <Image src="/arrowDown.svg" alt="asd" width={25} height={25} />
          ) : (
            <Image src="/arrowUp.svg" alt="asd" width={25} height={25} />
          )}
        </Container>
        {toggle && (
          <Container className={style.informationContainer}>
            <Typography variant="body" className={style.subHeading}>
              {company}
            </Typography>
            <Typography variant="body" className={style.timeline}>
              {timeline}
            </Typography>
            {bullets.map((val, index) => {
              return (
                <Typography key={index} variant="body" className={style.body}>
                  {val}
                </Typography>
              );
            })}
          </Container>
        )}
      </Container>
    </>
  );
}
