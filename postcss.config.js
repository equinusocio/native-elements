module.exports = (ctx) => ({
  plugins: {
    'stylelint': {},
    'postcss-easy-import': {
      extensions: '.pcss',
      plugins: [require('stylelint')()]
    },
    'postcss-responsive-type': {},
    'postcss-preset-env': {
      stage: 0,
      autoprefixer: {
        grid: true
      },
      insertBefore: {
        'nesting-rules': require('postcss-mixins')()
      }
    },
    'cssnano': { preset: 'advanced' },
    'postcss-reporter': { clearReportedMessages: true }
  }
})
