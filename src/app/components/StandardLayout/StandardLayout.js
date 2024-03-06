import styles from './StandardLayout.module.css';
import '../../globals.css';
import Navbar from '../Navbar/Navbar';
import { Footer } from '../Footer';
import { Container } from '@mui/material';

export default function StandardLayout({ children }) {
  return (
    <main>
      <Navbar />
      <Container>
        <div className={styles.spacer} />
        {children}
        <Footer />
      </Container>
    </main>
  );
}
