import { Box, Typography } from '@mui/material';
import style from './Review.module.css';
import Link from 'next/link';
function Review({ title, author, link, company, ...props }) {
  return (
    <Box className={style.container}>
      <Typography variant="reviewHeader" className={style.header} >
        {title}
      </Typography>
      <Link
        className={style.author}
        href={link || 'https://www.linkedin.com/in/ibrahim-muhammad-yusoof/'}
      >
        <Typography variant="reviewAuthor">
          {company ? `${author} @ ${company}` : author}
        </Typography>
      </Link>
    </Box>
  );
}

export default Review;
