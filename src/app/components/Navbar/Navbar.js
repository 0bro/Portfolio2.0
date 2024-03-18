'use client';

import Link from 'next/link';
import { AiFillGithub, AiFillLinkedin, AiOutlineMenu } from 'react-icons/ai';
import styles from './Navbar.module.css';
import { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
function Navbar() {
  const [menu, setMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.scrollY || document.documentElement.scrollTop;
      setScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  let toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <nav className={`${styles.navbarContainer} ${scrolled && styles.scrolled}`}>
      <div className={styles.navbar}>
        <div className={`${styles.start} ${styles.column}`}>
          <div className={styles.logo}>
            <Typography variant="body1">👋 I&apos;m Ibrahim</Typography>
          </div>
        </div>
        <div
          className={`${menu ? styles.showMenu : styles.hideMenu}  
            ${styles.column} ${styles.center} `}
        >
          <div className={styles.mainLink}>
            <Link href="/">
              <Typography variant="body1">Home</Typography>
            </Link>
            <Link href="/">
              <Typography variant="body1">About</Typography>
            </Link>
            <Link href="/">
              <Typography variant="body1">Projects</Typography>
            </Link>
            <Link href="/">
              <Typography variant="body1">Contact</Typography>
            </Link>
          </div>
        </div>
        <div className={`${styles.column} ${styles.end}`}>
          <div className={styles.menuButton} onClick={() => toggleMenu()}>
            <AiOutlineMenu />
          </div>
          <div className={styles.linksOut}>
            <AiFillGithub />
            <AiFillLinkedin />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
