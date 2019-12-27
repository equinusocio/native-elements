import postcss from 'rollup-plugin-postcss';

export default {
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
};
