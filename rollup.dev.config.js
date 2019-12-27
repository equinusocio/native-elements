import postcss from 'rollup-plugin-postcss';
import serve from 'rollup-plugin-serve';

export default [
  {
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
    ]
  }
];
