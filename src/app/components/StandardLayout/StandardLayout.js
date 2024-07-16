import style from './StandardLayout.module.css';
import '../../globals.css';
import Navbar from '../Navbar/Navbar';
import { Footer } from '../Footer';
import { Box, Container } from '@mui/material';

export default function StandardLayout({ children }) {
  return (
    <main>
      <Navbar />
      <Container>
        <div className={style.spacer} />
        {children}
        <Box style={{ height: '20%' }} />
        <Footer />
      </Container>
    </main>
  );
}
