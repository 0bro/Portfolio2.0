'use client';
import React, { useEffect } from 'react';
import AboutMe from './components/AboutMe/AboutMe.js';
import Hero from './components/HeroPage/Hero.js';
import StandardLayout from './components/StandardLayout/StandardLayout.js';
import { Skills } from './components/Skills/index.js';

import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material';
import { SplashScreenProvider } from './components/Guards/useSplashScreen/index.js';

export default function HomePage() {
  let theme = createTheme({
    typography: {
      body1: {
        fontFamily: 'var(--font-SourceCodePro), monospace',
        fontStyle: 'medium',
        fontWeight: '500',
        color: '#828282',
      },
      h1: {
        fontFamily: 'var(--font-Outfit), sans-serif',
        fontWeight: '700',
        letterSpacing: '-0.04em',
        color: '#141420',
      },
      h2: {
        fontFamily: 'var(--font-Outfit), monospace',
        fontWeight: '800',
        fontSize: '48px',
        letterSpacing: '-0.04em',
        paddingBottom: '20px',
        color: '#141420',
      },
      h3: {
        fontFamily: 'var(--font-Outfit), monospace',
        fontWeight: '800',
        fontSize: '36px',
        letterSpacing: '-0.04em',
        paddingBottom: '20px',
        color: '#141420',
      },
    },
  });
  theme = responsiveFontSizes(theme);

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme}>
        <SplashScreenProvider>
          <StandardLayout>
            <Hero />
            <AboutMe />
            <Skills />
          </StandardLayout>
        </SplashScreenProvider>
      </ThemeProvider>
    </React.StrictMode>
  );
}
