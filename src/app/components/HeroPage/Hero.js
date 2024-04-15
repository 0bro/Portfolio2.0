const style = require('./Hero.module.css');
import { Box, Button, Typography } from '@mui/material';
import Showcase from './HeroShowcase/HeroShowcase';

// TODO: Add the Arrow Down suggesting to scroll

export default function Hero(params) {
  return (
    <Box className={style.Hero}>
      <Box className={style.HeroContainer}>
        <Box className={style.HeroWordsContainer}>
          <Typography variant="h1" className={style.HeroHead}>
            Full Stack Engineer
          </Typography>
          <Typography variant="body1" className={style.HeroPara}>
            With 3 years of experience in building high-quality applications and
            services, with a strong passion for improving the development
            experience. Adept at collaborating with others and thriving in
            challenging environments. Skilled in JavaScript, Node.js, React, and
            AWS Cloud Services.
          </Typography>
          <Button variant='beemo'>View Resume</Button>
        </Box>
        <Box className={style.showcaseContainer}>
          <Showcase />
        </Box>
      </Box>
    </Box>
  );
}
