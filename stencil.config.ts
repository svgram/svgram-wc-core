import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'svgram-wc-core',
  outputTargets:[
    { type: 'dist' },
    { type: 'docs' },
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ],
  copy: [
    { src: 'start.mjs', dest: './build/start.mjs' },
    { src: 'fallback.js', dest: './fallback.js' }
  ]  
};
