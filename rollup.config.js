import postcss from 'rollup-plugin-postcss';
import serve from 'rollup-plugin-serve';
import livereload from 'rollup-plugin-livereload';

export default () => {
  return (process.env.BUILD === 'production') ? {
    input: './src/elements/native-elements/native-elements.pcss',
    output: {
      dir: 'dist/',
      format: 'esm'
    },
    plugins: [
      postcss({
        extract: true,
        config: {
          path: 'postcss.config.js'
        }
      })
    ]
  } : {
    input: './src/elements/native-elements/native-elements.pcss',
    output: {
      dir: 'demo/',
      format: 'esm'
    },
    plugins: [
      postcss({
        extract: true,
        config: {
          path: 'postcss.config.js'
        }
      }),
      serve({
        open: true,
        contentBase: 'demo',
        host: '0.0.0.0'
      }),
      livereload({
        watch: 'demo',
      })
    ]
  };
};
