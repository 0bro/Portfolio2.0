const { default: Review } = require('./Review');

import Marquee from 'react-fast-marquee';
import data from './../../data/reviews';

import style from './ReviewSection.module.css';
import { useEffect, useState } from 'react';
import { Box } from '@mui/material';

function ReviewSection() {
  const [speed, setSpeed] = useState();
  useEffect(() => {
    window.addEventListener('resize', () => {
      window.innerWidth > 692 ? setSpeed(150) : setSpeed(50);
    });
  }, []);
  return (
    <>
      <Box className={style.BigBox}>
        <Marquee
          pauseOnHover={true}
          autoFill={true}
          className={style.marquee}
          speed={speed}
        >
          {data.map((val) => {
            return (
              <Review
                key={val.reviewID}
                title={`"${val.header}"`}
                author={val.author}
                link={val.link}
                company={val.company}
              />
            );
          })}
        </Marquee>
      </Box>
    </>
  );
}

export default ReviewSection;
