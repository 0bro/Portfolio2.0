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
            Welcome to my portfolio! I enjoy tackling complex problems and
            delivering reliable results. Explore my work to see my projects and
            approach to development. <br />
            <br />
            <strong>
              This Portfolio is a work in progress, I am currently working to
              expand each project into interactive experiences.
            </strong>
          </Typography>
          {/* <Button variant="beemo">View Resume</Button> */}
        </Box>
        <Box className={style.showcaseContainer}>
          <Showcase />
        </Box>
      </Box>
    </Box>
  );
}
