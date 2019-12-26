const path = require('path');
const coreElement = require('./src/elements/native-elements/config');
const buttonElement = require('./src/elements/ne-button/config');
const checkradioElement = require('./src/elements/ne-checkradio/config');
const selectElement = require('./src/elements/ne-select/config');
const textfieldElement = require('./src/elements/ne-textfield/config');

const envVariables = {
  ...coreElement,
  ...buttonElement,
  ...checkradioElement,
  ...selectElement,
  ...textfieldElement
};

module.exports = {
  modules: false,
  plugins: {
    'postcss-easy-import': {
      extensions: '.pcss'
    },
    'postcss-preset-env': {
      stage: 0,
      importFrom: [{
        environmentVariables: envVariables
      }],
      insertAfter: {
        'custom-media-queries': require('postcss-mixins')({
          mixinsFiles: path.join(__dirname, 'src/elements/**', '_*.pcss')
        })
      }
    },
    cssnano: {
      preset: [
        'advanced',
        {
          discardComments: {
            removeAll: true
          },
          reduceIdents: false
        }
      ]
    },
    'postcss-reporter': {
      clearReportedMessages: true
    }
  }
};
