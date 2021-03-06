const path = require('path');
const variables = require('./src/props');
const camelCase = require('camelcase');

const envVariables = {
  environmentVariables: Object.keys(variables).reduce((props, key) => {
    let prop = variables[key];
    let normalizedName = prop.name.replace('--ne-', '');
    let newKey = `--${camelCase(normalizedName)}`;
    props[newKey] = `${prop.tokenValue}`;
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
        'logical-properties-and-values': false
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
          cssDeclarationSorter: true,
          reduceIdents: false,
          autoprefixer: false
        }
      ]
    }
  }
};
