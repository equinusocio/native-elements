const path = require('path');
const coreConfig = require('./src/elements/native-elements/config');
const buttonConfig = require('./src/elements/ne-button/config');
const checkradioConfig = require('./src/elements/ne-checkradio/config');
const selectConfig = require('./src/elements/ne-select/config');
const textfieldConfig = require('./src/elements/ne-textfield/config');
const rangeConfig = require('./src/elements/ne-range/config');
const detailsConfig = require('./src/elements/ne-details/config');
const codeConfig = require('./src/elements/ne-code/config');
const colorConfig = require('./src/elements/ne-color/config');
const dialogConfig = require('./src/elements/ne-dialog/config');
const formConfig = require('./src/elements/ne-form/config');
const meterConfig = require('./src/elements/ne-meter/config');
const progressConfig = require('./src/elements/ne-progress/config');
const uploadConfig = require('./src/elements/ne-upload/config');

const envVariables = {
  ...coreConfig,
  ...buttonConfig,
  ...checkradioConfig,
  ...selectConfig,
  ...textfieldConfig,
  ...rangeConfig,
  ...detailsConfig,
  ...codeConfig,
  ...colorConfig,
  ...dialogConfig,
  ...formConfig,
  ...meterConfig,
  ...progressConfig,
  ...uploadConfig,
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
