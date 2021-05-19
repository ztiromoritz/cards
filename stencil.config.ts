import { Config } from '@stencil/core';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalScript: 'client/global/app.ts',
  globalStyle: 'client/global/app.css',
  taskQueue: 'async',
  srcDir: 'client',
  outputTargets: [{
    type: 'www',
    serviceWorker: null
  }],
};
