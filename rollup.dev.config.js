import postcss from 'rollup-plugin-postcss';
import serve from 'rollup-plugin-serve';
import html from 'rollup-plugin-bundle-html';

export default [
  {
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
      }),
      html({
        template: 'demo/index.html',
        dest: 'dist/',
        filename: 'index.html',
        externals: [
          { type: 'css', file: 'dist/demo.css', pos: 'before' }
        ]
      }),
      serve('dist',{
        open: true,
        host: '0.0.0.0'
      })
    ]
  },
  {
    input: ['./demo/demo.css'],
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
      }),
    ]
  }
];
