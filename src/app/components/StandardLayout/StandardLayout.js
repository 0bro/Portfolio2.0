import styles from './StandardLayout.module.css';
import '../../globals.css';
import Navbar from '../Navbar/Navbar';
import { Footer } from '../Footer';

export default function StandardLayout({ children }) {
  return (
    <div className={styles.container}>
      <main className={styles.centerMe}>
        <Navbar />
        <div className={styles.spacer} />
        {children}
        <Footer/>
      </main>
    </div>
  );
}
