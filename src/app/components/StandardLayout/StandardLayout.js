import styles from './StandardLayout.module.css';
import '../../globals.css';
import Navbar from '../Navbar/Navbar';
import { Footer } from '../Footer';
import { Box, Container } from '@mui/material';

export default function StandardLayout({ children }) {
  return (
    <main>
      <Navbar />
      <Container sx={{ backgroundColor: 'transparent' }}>
        <div className={styles.spacer} />
        {children}
        <Box height={50}></Box>
        <Footer />
      </Container>
    </main>
  );
}
