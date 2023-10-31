import { Box, Typography } from '@mui/material';
import { createContext, useRef, useState } from 'react';

const defaultProvider = {
  loading: false,
};

const SplashScreenContext = createContext(defaultProvider);

const SplashScreenProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const ref = useRef(null);

  const values = {
    loading,
    setLoading,
  };

  return (
    <SplashScreenContext.Provider value={values}>
      {loading && (
        <Box
          sx={{
            zIndex: 1000,
            display: 'flex',
            position: 'absolute',
            width: '100%',
            height: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            backgroundImage: 'radial-gradient(#B5B5B550 1px, transparent 0)',
            backgroundSize: '30px 30px',
            backgroundPosition: '-19px -19px',
          }}
        >
          <Typography variant="h2">👋 Hello World!</Typography>
        </Box>
      )}
      {children}
    </SplashScreenContext.Provider>
  );
};

export { SplashScreenContext, SplashScreenProvider };
