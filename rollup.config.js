import devConfig from './rollup.dev.config.js';
import prodConfig from './rollup.prod.config.js';

export default () => {
  if (process.env.BUILD === 'production') {
    return prodConfig;
  }
  return devConfig;
};
