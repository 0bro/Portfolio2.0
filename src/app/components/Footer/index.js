import { Box, Divider, Typography } from '@mui/material';
import Link from 'next/link';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <>
      <Box>
        <Typography variant="body1">
          Designed by
          <Link
            href="https://dribbble.com/istiaqahmed"
            style={{ textDecorationLine: 'underline' }}
          >
            Istiaq Ahmed
          </Link>
          & Developed by Ibrahim Muhammad Yusoof (ME)
        </Typography>
        <Divider sx={{padding:'10px'}}/>
        <Box className={styles.BottomContainer}>
          <Box className={styles.IconsContainer}>
            <Link
              className={styles.IconClickBox}
              href="https://www.linkedin.com/in/ibrahim-muhammad-yusoof/"
            >
              <AiFillLinkedin />
            </Link>
            <Link
              className={styles.IconClickBox}
              href="https://github.com/0bro"
            >
              <AiFillGithub />
            </Link>
          </Box>
          <Typography variant="body1" style={{ textAlign: 'center' }}>
            &#169; 2024 Ibrahim Mahammad Yusoof. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </>
  );
}
