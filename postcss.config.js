const path = require('path');
const coreConfig = require('./src/elements/native-elements/config.pcss');
const buttonConfig = require('./src/elements/ne-button/config.pcss');
const checkradioConfig = require('./src/elements/ne-checkradio/config.pcss');
const selectConfig = require('./src/elements/ne-select/config.pcss');
const textfieldConfig = require('./src/elements/ne-textfield/config.pcss');
const rangeConfig = require('./src/elements/ne-range/config.pcss');
const detailsConfig = require('./src/elements/ne-details/config.pcss');
const codeConfig = require('./src/elements/ne-code/config.pcss');
const colorConfig = require('./src/elements/ne-color/config.pcss');
const dialogConfig = require('./src/elements/ne-dialog/config.pcss');
const formConfig = require('./src/elements/ne-form/config.pcss');
const meterConfig = require('./src/elements/ne-meter/config.pcss');
const progressConfig = require('./src/elements/ne-progress/config.pcss');
const uploadConfig = require('./src/elements/ne-upload/config.pcss');
const tableConfig = require('./src/elements/ne-table/config.pcss');

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
  ...tableConfig,
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
