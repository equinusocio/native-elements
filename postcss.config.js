const path = require('path');
const coreConfig = require('./src/elements/native-elements/config.js');
const buttonConfig = require('./src/elements/ne-button/config.js');
const checkradioConfig = require('./src/elements/ne-checkradio/config.js');
const selectConfig = require('./src/elements/ne-select/config.js');
const textfieldConfig = require('./src/elements/ne-textfield/config.js');
const rangeConfig = require('./src/elements/ne-range/config.js');
const detailsConfig = require('./src/elements/ne-details/config.js');
const codeConfig = require('./src/elements/ne-code/config.js');
const colorConfig = require('./src/elements/ne-color/config.js');
const dialogConfig = require('./src/elements/ne-dialog/config.js');
const formConfig = require('./src/elements/ne-form/config.js');
const meterConfig = require('./src/elements/ne-meter/config.js');
const progressConfig = require('./src/elements/ne-progress/config.js');
const uploadConfig = require('./src/elements/ne-upload/config.js');
const tableConfig = require('./src/elements/ne-table/config.js');
const hrConfig = require('./src/elements/ne-hr/config.js');

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
  ...hrConfig,
};

module.exports = {
  modules: false,
  plugins: {
    'postcss-dark-theme-class': {},
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
