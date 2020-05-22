const path = require('path');
const variables = require('./props.json').props;
const camelCase = require('camelcase');

const envVariables = {
  environmentVariables: Object.keys(variables).reduce((props, key) => {
    let prop = variables[key];
    let normalizedName = prop.name.replace('--ne-', '');
    let newKey = `--${camelCase(normalizedName)}`;
    props[newKey] = `${prop.defaultValue}`;
    return props;
  }, {}),
};

// console.log(JSON.stringify(envVariables.environmentVariables, null, 2))

module.exports = {
  modules: false,
  plugins: {
    'postcss-dark-theme-class': {
      darkSelector: '[data-theme="dark"]',
      lightSelector: '[data-theme="light"]'
    },
    'postcss-easy-import': {
      extensions: '.pcss'
    },
    'postcss-preset-env': {
      stage: 0,
      features: {
        'logical-properties-and-values': {
          preserve: true
        }
      },
      importFrom: [
        envVariables,
      ],
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
          reduceIdents: false,
          autoprefixer: false
        }
      ]
    }
  }
};
