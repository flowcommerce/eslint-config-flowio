'use strict';

module.exports = {
  'extends': [
    'eslint-config-airbnb',
    './rules/react',
    './rules/style',
  ].map(require.resolve)
}
