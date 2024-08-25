import { ISourceOptions } from '@tsparticles/engine';
/**
 * Particles.js options
 * @type {ISourceOptions}
 */

export const options = {
  fpsLimit: 40,
  fullScreen: {
    enable: false,
  },
  interactivity: {},
  particles: {
    number: {
      value: 60,
      density: {
        enable: true,
      },
    },
    color: {
      value: ['#434343'],
    },
    opacity: {
      value: { min: 0.1, max: 0.5 },
    },
    size: {
      value: { min: 1, max: 4 },
    },
    move: {
      enable: true,
      speed: 2,
      random: true,
    },
  },
  detectRetina: true,
};
