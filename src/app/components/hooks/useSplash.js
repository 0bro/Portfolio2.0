import { useContext } from 'react'
import { SplashScreenContext } from '../Guards/useSplashScreen'

export const useSplash = () => useContext(SplashScreenContext);
